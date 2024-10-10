from database import engine
from notes.models import Note
from sqlalchemy.ext.asyncio import AsyncSession


async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Note.metadata.create_all)


async def delete_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Note.metadata.drop_all)
