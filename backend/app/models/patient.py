from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.config.database import (
    Base,
)


class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    phone = Column(String)
    email = Column(String)

    appointments = relationship("Appointment", back_populates="patient")
