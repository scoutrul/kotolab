<script setup lang="ts">
import type { 
  SeededRandom, 
  PickFunction, 
  TipForFunction, 
  CatTopic, 
  CatAdjective, 
  CatRole 
} from '../../../types'

const route = useRoute()

// Seeded pseudo-random based on id for stable but varied content
const seededRandom: SeededRandom = (seed: string): number => {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  h ^= h >>> 16
  h = Math.imul(h, 2246822507)
  h ^= h >>> 13
  h = Math.imul(h, 3266489909)
  h ^= h >>> 16
  return (h >>> 0) / 4294967295
}

const id = computed<string>(() => String(route.params.id || 'expert'))
const rnd = computed<number>(() => seededRandom(id.value))

const topics: CatTopic[] = [
  'Как вкусно кушать',
  'Как сладко спать',
  'Как урчать',
  'Как играть',
  'Как выпрашивать еду',
  'Ночные гонки',
  'Как прикалываться'
]

const pick: PickFunction = <T>(arr: T[], r: number): T => {
  const idx = Math.floor(r * arr.length) % arr.length
  return arr[idx]!
}

const hero = computed<string>(() => {
  const adjectives: CatAdjective[] = ['мудрый', 'харизматичный', 'ласковый', 'величественный', 'озорной']
  const roles: CatRole[] = ['советник', 'коуч', 'наставник', 'гуру', 'эксперт']
  const a = pick(adjectives, rnd.value)
  const r = pick(roles, rnd.value * 1.37)
  return `Кот-${id.value}: ${a} ${r}`
})

const sections = computed<CatTopic[]>(() => {
  const base = [...topics]
  // rotate by random offset
  const offset = Math.floor(rnd.value * base.length)
  const rotated = base.slice(offset).concat(base.slice(0, offset))
  // take 4-6 sections
  const count = 4 + (Math.floor(rnd.value * 3))
  return rotated.slice(0, count)
})

const tips: string[] = [
  'Сначала понюхай, потом муркни — и только затем дегустируй.',
  'Главное — занять тёплое место. Если это клавиатура, ну что ж…',
  'Урчать лучше на вдохе-выдохе, сохраняя ритм серенад.',
  'Коробка — универсальный тренажёр: и дом, и спортзал, и сцена.',
  'Смотри прямо в глаза. Добавь «мря?» — и миска наполнится сама.',
  'Гонки по коридору эффективнее после 3:47. Проверено.',
  'Лёгкий пинок ручке — и ты уже король вечера.'
]

const tipFor: TipForFunction = (i: number): string => {
  const r = seededRandom(id.value + ':' + i)
  return tips[Math.floor(r * tips.length) % tips.length]!
}
</script>

<template>
  <main class="container stack" style="padding: 32px 0 64px;">
    <header class="stack" style="gap: 8px;">
      <NuxtLink to="/sticker" class="muted">← Назад к стикеру</NuxtLink>
      <h1 style="margin:0">{{ hero }}</h1>
      <p class="muted">Персональная страница кота с эксклюзивными «мяу-советами».</p>
      <p class="muted"><strong>ID:</strong> {{ id }}</p>
    </header>

    <section class="stack" style="gap: 16px;">
      <article v-for="(title, i) in sections" :key="i" class="card" style="padding:16px;">
        <h2>{{ title }}</h2>
        <p>{{ tipFor(i) }}</p>
      </article>
    </section>
  </main>
</template>
