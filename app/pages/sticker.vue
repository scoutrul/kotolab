<script setup lang="ts">
// Nuxt 4: useAsyncData with deep: true for proper reactivity
const { data: images } = await useAsyncData('cats', async (): Promise<string[]> => {
  // 3 independent fetches to cataas.com (no CORS json, return images)
  const endpoints: string[] = [
    'https://cataas.com/cat/says/M?type=square&fontColor=yellow',
    'https://cataas.com/cat/says/E?type=square&fontColor=red',
    'https://cataas.com/cat/says/O?type=square&fontColor=white',
    'https://cataas.com/cat/says/W?type=square&fontColor=black',
  ]
  // To avoid caching, add timestamp
  const urls: string[] = endpoints.map((u: string) => `${u}&t=${Date.now()}-${Math.random()}`)
  return urls
}, {
  deep: true // Nuxt 4: ensure deep reactivity
})

const route = useRoute()
</script>

<template>
  <main class="container">
    <template v-if="!route.params.id">
      <section class="stack sticker-page-section">
        <h1 class="page-title">Страница со стикером</h1>
        <p class="muted">Прокрутите страницу; стикер закреплён справа по центру, раскрывается при hover.</p>

        <div class="stack cards-gap">
          <div v-for="i in 12" :key="i" class="card card-padded">
            <div class="row gapped">
              <div class="avatar-skeleton"></div>
              <div class="stack flex-fill lines-gap">
                <div class="line-skeleton line-lg"></div>
                <div class="line-skeleton line-md w-90"></div>
                <div class="line-skeleton line-md w-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickerCard v-if="images" :images="images" />
    </template>

    <template v-else>
      <NuxtPage />
    </template>
  </main>
</template>

<style scoped lang="scss">
.sticker-page-section {
  padding: 32px 0 120px;
}

.page-title {
  margin: 0;
}

.card-padded {
  padding: 16px;
}

.avatar-skeleton {
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background: #eef2ff;
}

.line-skeleton {
  background: #e5e7eb;
  border-radius: 6px;
}

.line-lg {
  height: 16px;
  border-radius: 8px;
  width: 60%;
}

.line-md {
  height: 12px;
}

.w-90 {
  width: 90%;
}

.w-70 {
  width: 70%;
}

.flex-fill {
  flex: 1;
}

.cards-gap {
  display: grid;
  gap: 16px;
}

.gapped {
  display: flex;
  gap: 12px;
}

.lines-gap {
  display: grid;
  gap: 8px;
}
</style>


