from datetime import datetime, timedelta
from fastapi.responses import JSONResponse
from jose.jwt import decode
from jwt import exceptions, encode


def create_token(data: dict, secret: str) -> str:
    token: str = encode(
        payload={**data, "exp": expire_date(2)},
        key=secret,
        algorithm="HS256",
    )

    return token


def validate_token(token: str, secret: str = None) -> dict:
    try:
        return decode(token, key=secret, algorithms=["HS256"])
    except exceptions.DecodeError as e:
        return JSONResponse(content={"Message": str(e)}, status_code=401)
    except exceptions.ExpiredSignatureError:
        return JSONResponse(
            content={"Message": "Token Expired"}, status_code=401
        )


def expire_date(minutes: int) -> datetime:
    return datetime.now() + timedelta(minutes=minutes)


def create_access_token(username: str, user_id: int, secret: str) -> str:
    expires = expire_date(minutes=2)
    payload = {"sub": username, "id": user_id, "exp": expires}
    return encode(payload=payload, key=secret, algorithm="HS256")
