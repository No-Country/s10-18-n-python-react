# ¿Cómo arrancar el proyecto?
Primero instalar Python versión 3.10 o una superior, se puede instalar desde [hacer click acá](https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe)

Luego de tenerlo instalado, procedemos a movernos al directorio donde se encuentra nuestro proyecto, en la subcarpeta de `s10-18-n-python-react/backend`

```
# Se van al directorio del proyecto, luego ejecutan los siguientes comandos:
python -m venv venv
source venv/Scripts/activate # Windows
source venv/bin/activate # Linux

# Luego seria instalar las dependencias y librerías necesarias para arrancar el proyecto, con este comando:
pip install -r requirements.txt

# Para arrancar el servidor despues de haber instalado todo, simplemente escribir el siguiente comando:
uvicorn main:app --reload --port 5000 --host 0.0.0.0
```
# ¿Cómo configurar el entorno de desarrollo?

Instalar las siguientes dependencias y hacer el siguiente paso a paso:
```
# Ya teniendo instalado el proyecto, nos moveremos al directorio del proyecto. 
# Instalaremos Poetry, que es un manejador de paquetes.
pip install poetry

# Con esto descagarán el entorno virtual dentro de la carpeta donde se encuentran parados
poetry config virtualenvs.in-project true 

# Con esto instalarán las dependecias que están dentro del archivo pyproject.toml
poetry install 
```

Después de haber instalado todas las dependencias, se nos creará una carpeta llamada `.venv`, 
esta carpeta es el entorno virtual la cual activaremos con el siguiente comando: `poetry shell`.

Después de tener el entorno activado, le agregaremos los cambios de `pre-commit`, usando el siguiente comando:

```sh
pre-commit install 
```

Pre-commit nos sirve para validar que todos los archivos esten correctamente validados por el linter y el formatter de código.

# Docker configuration

Solo tener instalado Docker en nuestra máquina y que todo este funcionando perfecto, y arrancar los siguientes comandos:

```sh
cd backend/
docker-compose build
docker-compose up -d
```
> Ojo, tienes que tener configurado tu archivo `.env` con todas las variables de entornos, para la base de datos y el JWT.
> Debes crear el siguiente fichero y usar esto como referencia: 
```sh
# JWT configuration
SECRET_KEY = 'my_secret_key'

# Database configuration
POSTGRES_USER = 'UserPower'
POSTGRES_PASSWORD = 'my_super_secret_key'
POSTGRES_DB = 'medicine-project'

# Pgadmin4 configuration
PGADMIN_DEFAULT_EMAIL = 'userpower@mail.com
PGADMIN_DEFAULT_PASSWORD = 'secret_password'
```


Ya con eso debería arrancar los conteneros y tener funcionando, parecido acá:

![Docker](/assets/docker-image-example.png)