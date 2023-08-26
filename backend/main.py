from fastapi import FastAPI, HTTPException
from models.user_connection import UserConnection
from schema.user_schema import UserSchema

app = FastAPI()
conn = UserConnection()

@app.get('/users')
async def raiz():
     items=[]
     for data in conn.read_all():
          dictionary = {}
          dictionary["id"] = data[0]
          dictionary["fullname"] = data[1]
          dictionary["email"] = data[2]
          dictionary["domicilio"] = data[3]
          items.append(dictionary)
     return items

@app.post("/users/")
async def create_user(user: UserSchema):
    data=user.dict()
    data.pop("id")
    print(data)
    conn.write(data)
    return {'nuevo'}