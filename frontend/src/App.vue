<template>
  <header class="row">
    <div class="container header2">
      <h1 class="title">Заметки</h1>
      <nav class="nav">
        <div class="border">
          <RouterLink class="link" :to="{ name: 'home' }">К заметкам</RouterLink>
        </div>
        <div class="border">
          <RouterLink class="link" :to="{ name: 'add' }">Добавить заметку</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default{}
</script>

<style scoped>
.row {
  background-color: #1b1b1e;
}

.title {
  text-align: center;
  color: white;
}

.nav {
  margin-top: 3px;
  display: flex;
  gap: 20px;
}

.header2 {
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 5px 30px;
}

.border {
  padding: 5px;
  border: 3px solid white;
  border-radius: 15px;
}

.link {
  text-decoration: none;
  font-size: 16px;
  color: white;
}
</style>
