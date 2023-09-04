from pydantic import BaseModel
from datetime import datetime


class AppointmentBase(BaseModel):
    start_datetime: datetime
    end_datetime: datetime
    dni: str
    first_name: str
    last_name: str
    phone: str
    insurance: str
    status: str
    doctor_id: int
    patient_id: int


class AppointmentCreate(AppointmentBase):
    pass


class AppointmentUpdate(AppointmentBase):
    pass


class Appointment(AppointmentBase):
    id: int

    class Config:
        orm_mode = True
