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

@app.put("/users/{id}")
async def update_one(user: UserSchema, id:str):
    data=user.dict()
    data["id"] = id
    conn.update_one(data)
    return {'updated'}

@app.get("/users/{id}")
async def get_one(id: str):
     dictionary = {}
     data = conn.read_one(id)
     dictionary["id"] = data[0]
     dictionary["fullname"] = data[1]
     dictionary["email"] = data[2]
     dictionary["domicilio"] = data[3]
     return data

@app.delete("/users/{id}")
async def delete_one(id: str):
     conn.delete_one(id)