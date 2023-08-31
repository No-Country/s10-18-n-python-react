from fastapi import HTTPException
from config.database import SessionLocal
from models.user import User as UserModel
from schemas.user import User

from typing import List, Union


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
