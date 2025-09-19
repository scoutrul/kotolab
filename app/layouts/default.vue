<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="container row">
        <NuxtLink to="/" class="brand">Котолаб 🐾</NuxtLink>
        <nav class="row nav">
          <NuxtLink to="/sticker">Стикер</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>С любовью и урчанием · © Котолаб</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app-shell { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; }
.site-header { position: sticky; top: 0; background: var(--color-surface); box-shadow: 0 1px 0 rgba(0,0,0,0.06); }
.site-footer { padding: 24px 0; color: var(--color-muted); }
.row { display: flex; align-items: center; gap: 16px; }
.brand { font-weight: 700; color: var(--color-text); text-decoration: none; }
.nav a { color: var(--color-text); opacity: 0.8; }
.nav a:hover { opacity: 1; }
</style>
