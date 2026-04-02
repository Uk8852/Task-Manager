from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import crud, schemas

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/tasks", response_model=schemas.TaskResponse)
def create(task: schemas.TaskCreate, db: Session = Depends(get_db)):
    return crud.create_task(db, task.title, task.description)

@router.get("/tasks")
def read_all(db: Session = Depends(get_db)):
    return crud.get_tasks(db)

@router.put("/tasks/{task_id}")
def complete(task_id: int, db: Session = Depends(get_db)):
    task = crud.complete_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@router.delete("/tasks/{task_id}")
def delete(task_id: int, db: Session = Depends(get_db)):
    task = crud.delete_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Deleted successfully"}