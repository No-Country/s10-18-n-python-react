from jwt import encode, decode, exceptions
from datetime import datetime, timedelta
from fastapi.responses import JSONResponse


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


def expire_date(days: int) -> datetime:
    return datetime.now() + timedelta(days=days)
