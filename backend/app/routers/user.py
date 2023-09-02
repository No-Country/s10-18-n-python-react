from fastapi import APIRouter, HTTPException
from schemas.user import User

user_router = APIRouter()


@user_router.get("/")
async def user(user: User):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication failed")
    return {"user": user}
