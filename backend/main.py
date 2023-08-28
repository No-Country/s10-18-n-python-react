from fastapi import FastAPI, Response
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT
from models.user_connection import UserConnection
from schema.user_schema import UserSchema

app = FastAPI()
conn = UserConnection()

@app.get('/users', status_code=HTTP_200_OK)
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

@app.post("/users/", status_code=HTTP_201_CREATED)
async def create_user(user: UserSchema):
    data=user.dict()
    data.pop("id")
    print(data)
    conn.write(data)
    return Response(status_code=HTTP_201_CREATED)


@app.get("/users/{id}", status_code=HTTP_200_OK)
async def get_one(id: str):
     dictionary = {}
     data = conn.read_one(id)
     dictionary["id"] = data[0]
     dictionary["fullname"] = data[1]
     dictionary["email"] = data[2]
     dictionary["domicilio"] = data[3]
     return data

@app.put("/users/{id}", status_code=HTTP_204_NO_CONTENT)
async def update_one(user: UserSchema, id:str):
    data=user.dict()
    data["id"] = id
    conn.update_one(data)
    return Response(status_code=HTTP_204_NO_CONTENT)

@app.delete("/users/{id}", status_code=HTTP_204_NO_CONTENT)
async def delete_one(id: str):
     conn.delete_one(id)
     return Response(status_code=HTTP_204_NO_CONTENT)
