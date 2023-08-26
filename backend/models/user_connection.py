import psycopg2

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

    def write (self, data):
        with self.conn.cursor() as cur:
            cur.execute("""
                        INSERT INTO "users"(fullname, email, domicilio) VALUES(%(fullname)s, %(email)s, %(domicilio)s)
                        """,data)
            self.conn.commit()
    
    def __def__(self):
        self.conn.close()