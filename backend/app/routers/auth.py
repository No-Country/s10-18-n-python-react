from fastapi import APIRouter, Depends, HTTPException, status

from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from schemas.user import CreateuserRequest, Token
from models.user import Users
from passlib.context import CryptContext

from typing import Annotated
from utils.get_db import db_dependency
from utils.jwt_manager import create_access_token, validate_token

from dotenv import load_dotenv
import os

load_dotenv()


auth_router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@auth_router.post("/", tags=["auth"], status_code=status.HTTP_201_CREATED)
async def create_user(
    db: db_dependency, create_user_request: CreateuserRequest
):
    hashed_password = pwd_context.hash(create_user_request.password)
    create_user_model = Users(
        username=create_user_request.username, hashed_password=hashed_password
    )
    db.add(create_user_model)
    db.commit()
    db.refresh(create_user_model)
    return JSONResponse(
        content=jsonable_encoder(create_user_model),
        status_code=status.HTTP_201_CREATED,
    )


@auth_router.post("/token", tags=["auth"], response_model=Token)
async def login_for_acess_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: db_dependency,
):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    token = create_access_token(
        user.username, user.id, os.getenv("SECRET_KEY")
    )
    result = {"access_token": token, "token_type": "bearer"}
    return JSONResponse(
        content=jsonable_encoder(result), status_code=status.HTTP_200_OK
    )


def authenticate_user(username: str, password: str, db: db_dependency):
    user = db.query(Users).filter(Users.username == username).first()
    if not user:
        return False
    if not pwd_context.verify(password, user.hashed_password):
        return False
    return user


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    payload = validate_token(token, os.getenv("SECRET_KEY"))
    username: str = payload.get("sub")
    user_id: int = payload.get("id")
    if username is None or user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return {"username": username, "id": user_id}
