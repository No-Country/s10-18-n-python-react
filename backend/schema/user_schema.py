from pydantic import BaseModel
from typing import Optional

class UserSchema(BaseModel):
    id:Optional[int]
    fullname: str
    email:str
    domicilio:Optional[str]