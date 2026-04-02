from fastapi import FastAPI
from database import engine, Base
from routes import task_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
    "https://task-manager-yn0x.onrender.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(task_routes.router)

@app.get("/")
def root():
    return {"message": "Task Manager API Running"}
