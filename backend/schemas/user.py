from pydantic import BaseModel, EmailStr, Field

from typing import Union


class User(BaseModel):
    username: str
    email: Union[EmailStr, None] = None
    full_name: Union[str, None] = None
    disabled: Union[bool, None] = None


class CreateuserRequest(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class UserInDB(User):
    hashed_password: str = Field(
        ...,
        description="The hashed password of the user",
        min_length=8,
        max_length=128,
    )


class UserToken(User):
    token: str
