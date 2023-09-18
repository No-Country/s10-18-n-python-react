from config.database import (
    Base,
)  # Importamos la clase que hace la conexión a la BD
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from models.clinical_document import ClinicalDocuments

from typing import List
import datetime


class Offices(Base):
    __tablename__ = "offices"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name = Column(String)
    address = Column(String)
    phone = Column(String)

    clinical_documents: Mapped[List["ClinicalDocuments"]] = relationship(
        "ClinicalDocuements", back_populates="doctor"
    )

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)
