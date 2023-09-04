from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.config.database import (
    Base,
)


class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    specialty = Column(String)

    appointments = relationship("Appointment", back_populates="doctor")
