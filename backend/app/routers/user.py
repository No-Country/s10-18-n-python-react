from fastapi import APIRouter, HTTPException
from services.user import user_dependency

user_router = APIRouter()


@user_router.get("/")
async def user(user: user_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication failed")
    return {"user": user}
