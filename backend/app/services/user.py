from fastapi import HTTPException, Depends
from config.database import SessionLocal
from models.user import Users as UserModel
from schemas.user import User
from routers.auth import get_current_user

from typing import List, Union, Annotated

user_dependency = Annotated[dict, Depends(get_current_user)]


class UserService:
    def __init__(self, db: SessionLocal) -> None:
        self.db: SessionLocal = db

    def get_user(self, user_id: int) -> UserModel:
        result = self.db.query(UserModel).filter(User.id == user_id).first()
        if not result:
            raise HTTPException(status_code=404, detail="User not found")
        return result

    def get_users(self) -> List[User]:
        users: Union(List[User], None) = self.db.query(User).all()
        if not users:
            raise HTTPException(
                status_code=404, detail="There are no users in the database"
            )
        return users

    def create_user(self, user: User) -> User:
        db_user = UserModel(
            username=user.username,
            email=user.email,
            full_name=user.full_name,
            disabled=user.disabled,
        )
        self.db.add(db_user)
        self.db.commit()
        self.db.refresh(db_user)
        return db_user


class UserAuthService:
    def __init__(self, db: SessionLocal) -> None:
        self.db: SessionLocal = db

    def authenticate_user(self, username: str, password: str) -> UserModel:
        user = (
            self.db.query(UserModel)
            .filter(UserModel.username == username)
            .first()
        )
        if not user:
            raise HTTPException(
                status_code=404,
                detail="User with this username does not exist",
            )
        if not user.check_password(password):
            raise HTTPException(status_code=404, detail="Incorrect password")
        return user
