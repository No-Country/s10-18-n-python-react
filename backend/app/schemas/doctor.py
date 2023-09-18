from pydantic import BaseModel, Field


class Doctor(BaseModel):
    first_name: str
    last_name: str
    specialy: str = Field(
        ...,
        description="The specialy of the doctor",
        min_length=3,
        max_length=50,
    )
