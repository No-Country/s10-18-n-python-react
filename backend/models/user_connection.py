import psycopg2
#Clase que maneja CRUD de la tabla de usuarios en la base de datos PostgreSQL en ElephantSQL
class UserConnection():
    conn = None

    def __init__(self):
        try:
            self.conn = psycopg2.connect("dbname=fdpkijde user=fdpkijde password=BSaXT5TQ8uOvLYRRTQnCCqrH8c8-bDzQ host=rosie.db.elephantsql.com")
        except psycopg2.OperationalError as err:
            print(err)
            self.conn.close()

    def read_all(self):
        with self.conn.cursor() as cur:
            cur.execute(""" 
                        SELECT * FROM users; 
                        """)
            data =cur.fetchall()
            return data

    def read_one(self, id):
        with self.conn.cursor() as cur:
            cur.execute(""" 
                            SELECT * FROM users WHERE id = %s; 
                            """, (id,))
            data = cur.fetchone()
            return data

    def write (self, data):
        with self.conn.cursor() as cur:
            cur.execute("""
                        INSERT INTO "users"(fullname, email, password, address, city, country,phone) 
                        VALUES(%(fullname)s, %(email)s, %(password)s, %(address)s, %(city)s, %(country)s, %(phone)s)
                        """,data)
            self.conn.commit()

    def delete_one(self, id):
        with self.conn.cursor() as cur:
            cur.execute(""" 
                            DELETE FROM "users" WHERE id = %s; 
                            """, (id,))
            self.conn.commit()
    
    def update_one(self, data):
        with self.conn.cursor() as cur:
            cur.execute(""" 
                        UPDATE "users" SET fullname = %(fullname)s, email = %(email)s, password = %(password)s
                        address = %(address)s, city = %(city)s, country = %(country)s, phone = %(phone)s 
                        WHERE id = %(id)s; 
                        """, data)
            self.conn.commit()

    def __def__(self):
        self.conn.close()