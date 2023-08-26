
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import databases
import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

app = FastAPI()

DATABASE_URL = "postgres://fdpkijde:BSaXT5TQ8uOvLYRRTQnCCqrH8c8-bDzQ@rosie.db.elephantsql.com/fdpkijde"

database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    email = Column(String, unique=True, index=True)

app = FastAPI()

class UserCreate(BaseModel):
    username: str
    email: str

@app.get('/')
async def raiz():
    return {'message: Inicio de Back'}

@app.post("/users/", response_model=User)
async def create_user(user: UserCreate):
    query = User.__table__.insert().values(**user.dict())
    last_record_id = await database.execute(query)
    return {**user.dict(), "id": last_record_id}

@app.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int):
    query = User.__table__.select().where(User.id == user_id)
    user = await database.fetch_one(query)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
