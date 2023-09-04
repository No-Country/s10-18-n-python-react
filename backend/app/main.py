from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.auth import auth_router
from app.routers.user import user_router
from app.routers.appointments_routers import appointment_router
from app.config.database import engine, Base

app = FastAPI()
app.title = "No country API - Medicine project"
app.version = "0.0.1"
app.description = "This is a medicine project for the No country API"
app.docs_url = "/docs"

origins = ["localhost:3000"]

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(user_router, prefix="/user", tags=["user"])
app.include_router(
    appointment_router, prefix="/appointment", tags=["appointment"]
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


@app.get("/")
async def welcome():
    return {"hello": "world"}
