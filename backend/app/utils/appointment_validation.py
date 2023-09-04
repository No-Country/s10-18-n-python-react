from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.doctor import Doctor
from app.models.patient import Patient
from app.schemas.appointment_schemas import AppointmentCreate


def validate_doctor_exists(db: Session, doctor_id: int):
    doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()
    if doctor is None:
        raise HTTPException(status_code=404, detail="Doctor not found")


def validate_patient_exists(db: Session, patient_id: int):
    patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")


def validate_required_fields(appointment: AppointmentCreate):
    if (
        not appointment.start_datetime
        or not appointment.dni
        or not appointment.first_name
        or not appointment.last_name
        or not appointment.phone
        or not appointment.insurance
        or not appointment.doctor_id
        or not appointment.patient_id
    ):
        raise HTTPException(
            status_code=400, detail="Required fields are missing"
        )
