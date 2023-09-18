from pydantic import BaseModel, Field
from typing import Union, Optional
from datetime import datetime


class Appointment(BaseModel):
    start_date: datetime
    end_date: datetime
    diagnosis: Union[Optional[str], None] = Field(
        ..., description="The diagnosis of the patient"
    )
