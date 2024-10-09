from typing import Annotated, Sequence
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession


from database import get_async_session
from notes.repository import NoteRepository
from notes.schemas import NoteOutput, NoteInput, Note


router = APIRouter(prefix='/notes', tags=["notes"])


@router.post("/", response_model=NoteOutput)
async def create_note(note: NoteInput,
                      session: AsyncSession = Depends(get_async_session)):
    _repository = NoteRepository(session=session)
    return await _repository.create_note(note)


@router.get("/", response_model=Sequence[NoteOutput])
async def get_all(session: AsyncSession = Depends(get_async_session)):
    _repository = NoteRepository(session=session)
    return await _repository.get_all()


@router.put("/")
async def update_note(note_id: int,
                      update_data: NoteInput,
                      session: AsyncSession = Depends(get_async_session)):
    _repository = NoteRepository(session=session)
    return await _repository.update_note(note_id, update_data)


@router.delete("/{note_id}")
async def delete_note_by_id(note_id: int,
                            session: AsyncSession = Depends(get_async_session)):
    _repository = NoteRepository(session=session)
    return await _repository.delete_note_by_id(note_id)
