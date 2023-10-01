from config.database import (
    Base,
)  # Importamos la clase que hace la conexión a la BD
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column, relationship
import datetime


class Appointments(Base):
    __tablename__ = "appointments"

    id: Mapped[int] = mapped_column(
        Integer, primary_key=True, index=True, unique=True, nullable=False
    )
    date_appointment = Column(String)

    doctor_id: Mapped[int] = mapped_column(Integer, ForeignKey("doctors.id"))
    patient_id: Mapped[int] = mapped_column(Integer, ForeignKey("patients.id"))
    office_id: Mapped[int] = mapped_column(Integer, ForeignKey("offices.id"))

    doctor = relationship("Doctors", back_populates="appointments")
    patient = relationship("Patients", back_populates="appointments")
    office = relationship("Offices", back_populates="appointments")

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)
