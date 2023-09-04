from sqlalchemy.orm import Session
from app.schemas.appointment_schemas import (
    AppointmentUpdate,
    AppointmentCreate,
    Appointment,
)
from app.utils.appointment_validation import (
    validate_doctor_exists,
    validate_patient_exists,
    validate_required_fields,
)


def create_appointment(db: Session, appointment: AppointmentCreate):
    validate_required_fields(appointment)
    validate_doctor_exists(db, appointment.doctor_id)
    validate_patient_exists(db, appointment.patient_id)

    db_appointment = Appointment(**appointment.dict())
    db.add(db_appointment)
    db.commit()
    db.refresh(db_appointment)

    return db_appointment


def get_appointment(db: Session, appointment_id: int):
    return (
        db.query(Appointment).filter(Appointment.id == appointment_id).first()
    )


def update_appointment(
    db: Session, db_appointment: Appointment, appointment: AppointmentUpdate
):
    validate_required_fields(appointment)
    validate_doctor_exists(db, appointment.doctor_id)
    validate_patient_exists(db, appointment.patient_id)

    for field, value in appointment.dict(exclude_unset=True).items():
        setattr(db_appointment, field, value)

    db.commit()
    db.refresh(db_appointment)

    return db_appointment


def delete_appointment(db: Session, appointment: Appointment):
    db.delete(appointment)
    db.commit()
    return appointment
