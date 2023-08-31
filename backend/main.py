from fastapi import FastAPI
from routers.auth import auth_router

app = FastAPI()
app.include_router(auth_router, prefix="/auth", tags=["auth"])


@app.get("/")
async def welcome():
    return {"hello": "world"}
