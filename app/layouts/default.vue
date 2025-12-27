<template>
  <div class="layout">
    <OHeader />
    <main class="layout__main">
      <slot />
    </main>
    <OFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__main {
  flex: 1;
}
</style>

