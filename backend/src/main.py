import uvicorn
from fastapi import FastAPI
from contextlib import asynccontextmanager

from utils.init_db import create_tables, delete_tables
from notes.router import router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # await delete_tables()
    # print("База очищена")
    await create_tables()
    print("База готова к работе")
    yield
    print("Выключение")

app = FastAPI(
    debug=True,
    title="NII test task",
    lifespan=lifespan
)


app.include_router(router)


if __name__ == '__main__':
    uvicorn.run("main:app", port=5000, log_level="info", reload=True)
