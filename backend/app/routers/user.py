from fastapi import APIRouter, HTTPException
from utils.get_db import db_dependency
from services.user import user_dependency

user_router = APIRouter()


@user_router.get("/")
async def user(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication failed")
    return {"user": user}
