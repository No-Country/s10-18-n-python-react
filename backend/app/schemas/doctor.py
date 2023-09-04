from pydantic import BaseModel


class DoctorBase(BaseModel):
    first_name: str
    last_name: str
    specialty: str


class DoctorCreate(DoctorBase):
    pass


class DoctorUpdate(DoctorBase):
    pass


class Doctor(DoctorBase):
    id: int

    class Config:
        orm_mode = True
