from pydantic import BaseModel, ConfigDict


class Note(BaseModel):
    id: int
    title: str
    body: str

    model_config = ConfigDict(from_attributes=True)


class NoteOutput(BaseModel):
    id: int
    title: str
    body: str


class NoteInput(BaseModel):
    title: str
    body: str

    model_config = ConfigDict(from_attributes=True)
