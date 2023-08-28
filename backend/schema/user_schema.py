from pydantic import BaseModel
from typing import Optional
import uuid

class UserSchema(BaseModel):
    id:Optional[uuid.UUID]
    fullname: str
    email:str
    password: str
    address:Optional[str]
    city:Optional[str]
    country:Optional[str]
    phone:Optional[str]