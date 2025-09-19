<script setup lang="ts">
defineProps<{ images: string[] }>()
const isOpen = ref(false)
</script>

<template>
  <aside
    class="sticker card"
    :class="{ open: isOpen }"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <header class="title">Консультация эксперта</header>

    <div class="avatars">
      <img v-for="(src, i) in images" :key="i" :src="src" alt="cat" />
    </div>

    <button class="button full">Получить консультацию</button>
  </aside>
</template>

<style scoped lang="scss">
.sticker {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) translateX(120px) rotate(-2deg);
  width: 280px;
  padding: 16px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s;
  will-change: transform;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .title {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .avatars {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .full {
    width: 100%;
    justify-content: center;
  }
}

.sticker::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12), 0 5px 10px rgba(15, 23, 42, 0.06);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.sticker.open,
.sticker:hover {
  transform: translateY(-50%) translateX(0) rotate(0);
}

.sticker.open::after,
.sticker:hover::after {
  opacity: 1;
}
</style>



