from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.appointment_schemas import (
    AppointmentCreate,
    AppointmentUpdate,
    Appointment as AppointmentSchema,
)
from app.utils.get_db import get_db

appointment_router = APIRouter()


@appointment_router.post("/appointments/", response_model=AppointmentSchema)
def create_appointment(
    appointment: AppointmentCreate, db: Session = Depends(get_db)
):
    created_appointment = AppointmentCreate.create_appointment(db, appointment)
    return created_appointment


@appointment_router.get(
    "/appointments/{appointment_id}", response_model=AppointmentSchema
)
def read_appointment(appointment_id: int, db: Session = Depends(get_db)):
    appointment = AppointmentCreate.get_appointment(db, appointment_id)
    if appointment is None:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return appointment


@appointment_router.put(
    "/appointments/{appointment_id}", response_model=AppointmentSchema
)
def update_appointment(
    appointment_id: int,
    appointment: AppointmentUpdate,
    db: Session = Depends(get_db),
):
    db_appointment = AppointmentCreate.get_appointment(db, appointment_id)
    if db_appointment is None:
        raise HTTPException(status_code=404, detail="Appointment not found")

    updated_appointment = AppointmentCreate.update_appointment(
        db, db_appointment, appointment
    )
    return updated_appointment


@appointment_router.delete(
    "/appointments/{appointment_id}", response_model=AppointmentSchema
)
def delete_appointment(appointment_id: int, db: Session = Depends(get_db)):
    appointment = AppointmentCreate.get_appointment(db, appointment_id)
    if appointment is None:
        raise HTTPException(status_code=404, detail="Appointment not found")

    deleted_appointment = AppointmentCreate.delete_appointment(db, appointment)
    return deleted_appointment
