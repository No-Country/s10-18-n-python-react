from fastapi import APIRouter, Depends, HTTPException, status

# from fastapi.responses import JSONResponse
# from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.schemas.user import CreateuserRequest, Token
from app.models.user import Users
from passlib.context import CryptContext

from typing import Annotated
from app.utils.get_db import db_dependency


auth_router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@auth_router.post(
    "/user/create/", tags=["auth"], status_code=status.HTTP_201_CREATED
)
async def create_user(
    db: db_dependency, create_user_request: CreateuserRequest
):
    create_user_model = Users(
        username=create_user_request.username,
        hashed_password=pwd_context.hash(create_user_request.hashed_password),
        full_name=create_user_request.full_name,
        email=create_user_request.email,
        disabled=create_user_request.disabled,
    )
    db.add(create_user_model)
    db.commit()


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
    return {"access_token": user.username, "token_type": "bearer"}


def authenticate_user(username: str, password: str, db):
    user = db.query(Users).filter(Users.username == username).first()
    if not user:
        return False
    if not pwd_context.verify(password, user.hashed_password):
        return False
    return user


# @auth_router.get("/users/me")
# async def user(token: str = Depends(oauth2_scheme)):
#     print(token)
#     return "I am an user"


# @auth_router.post("/token", tags=["auth"])
# async def login(form_data: OAuth2PasswordRequestForm = Depends()):
#     user = authentica_user(fake_users_db, form_data.username, form_data.password)
#     print(user)
#     return {"access_token": "Tomatito", "token_type": "bearer"}


# def verify_password(plane_password, hashed_password) -> bool:
#     return pwd_context.verify(plane_password, hashed_password)


# def get_user(db, username):
#     if username in db:
#         user_dict = db[username]
#         return UserInDB(**user_dict)
#     return []


# def authentica_user(db, username, password):
#     user = get_user(db, username)
#     if not user:
#         return HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Could not validate credentials",
#             headers={"WWW-Authenticate": "Bearer"},
#         )
#     if not verify_password(password, user.hashed_password):
#         return HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Could not validate credentials",
#             headers={"WWW-Authenticate": "Bearer"},
#         )
#     return user
