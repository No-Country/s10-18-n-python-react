from config.database import (
    Base,
)  # Importamos la clase que hace la conexión a la BD
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column, relationship
import datetime


class ClinicalDocuments(Base):
    __tablename__ = "clinical_documents"

    id: Mapped[int] = mapped_column(
        Integer, primary_key=True, index=True, unique=True
    )
    document_type = Column(String)
    document_content = Column(Text)

    doctor = relationship("Doctors", back_populates="clinical_documents")
    patient = relationship("Patients", back_populates="clinical_documents")

    patient_id = mapped_column(Integer, ForeignKey("patients.id"))
    doctor_id = Column(Integer, ForeignKey("doctors.id"))
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)
