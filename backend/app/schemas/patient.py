from pydantic import BaseModel


class PatientBase(BaseModel):
    first_name: str
    last_name: str
    phone: str
    email: str


class PatientCreate(PatientBase):
    pass


class PatientUpdate(PatientBase):
    pass


class Patient(PatientBase):
    id: int

    class Config:
        orm_mode = True
