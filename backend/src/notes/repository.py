from typing import Sequence
from sqlalchemy import select, update, delete
from sqlalchemy.ext.asyncio import AsyncSession
from notes.models import Note
from notes.schemas import NoteInput, NoteOutput


class NoteRepository:

    def __init__(self, session: AsyncSession):
        self.session = session

    async def create_note(self, note: NoteInput) -> NoteOutput:
        new_note = Note()
        for key, value in note.model_dump(exclude_none=True).items():
            setattr(new_note, key, value)
        self.session.add(new_note)
        await self.session.commit()
        await self.session.refresh(new_note)
        return NoteOutput(id=new_note.id, title=new_note.title,
                          body=new_note.body)

    async def get_all(self) -> Sequence[NoteOutput]:
        result = await self.session.execute(select(Note).order_by(Note.id))
        return result.scalars().all()

    async def update_note(self, note_id: int, update_data: NoteInput):
        stmt = (update(Note)
                .where(Note.id == note_id)
                .values(update_data.model_dump()))
        await self.session.execute(stmt)
        await self.session.commit()
        return True

    async def delete_note_by_id(self, note_id: int):
        stmt = delete(Note).where(Note.id == note_id)
        await self.session.execute(stmt)
        await self.session.commit()
        return {"status": "success"}
