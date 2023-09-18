from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from routers.auth import auth_router
from routers.user import user_router
from config.database import engine, Base
from middlewares.error_handler import ErrorHandler

from templates.index import index

app = FastAPI()
app.title = "No country API - Medicine project"
app.version = "0.0.1"
app.description = "This is a medicine project for the No country API"
app.docs_url = "/docs"

origins = ["*"]

app.add_middleware(ErrorHandler)
app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(user_router, prefix="/user", tags=["user"])
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


@app.get("/", tags=["Home"])
def home_view() -> HTMLResponse:
    return HTMLResponse(content=index, status_code=200)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=5000)
