from fastapi import APIRouter, Depends
from typing import List
from utils.get_db import db_dependency
from schemas.doctor import Doctor as DoctorSchema

doctor_router = APIRouter()


@doctor_router.get("/", tags=["doctor"], response_model=List[DoctorSchema])
def get_doctors(db: db_dependency = Depends(db_dependency)):
    return db.query(DoctorSchema).all()
