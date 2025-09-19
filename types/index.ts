// Global type definitions for the project
import type { Ref } from 'vue'

export interface CatImage {
  src: string
  alt: string
}

export interface CatExpert {
  id: string
  name: string
  description: string
  specialties: string[]
}

export interface CatTip {
  id: string
  title: string
  content: string
  category: string
}

export interface StickerCardProps {
  images: string[]
}

export interface RouteParams {
  id?: string
}

export interface SeededRandom {
  (seed: string): number
}

export type PickFunction = <T>(arr: T[], r: number) => T

export interface TipForFunction {
  (index: number): string
}

// Nuxt specific types
export interface NuxtRoute {
  params: RouteParams
}

export type NuxtAsyncData<T> = {
  data: Ref<T | null>
  pending: Ref<boolean>
  error: Ref<Error | null>
  refresh: () => Promise<void>
}

// Component prop types
export interface StickerCardComponent {
  images: string[]
}

export interface DynamicPageProps {
  id: string
}

// API response types
export interface CataasResponse {
  url: string
  timestamp: number
}

// Theme and styling types
export interface ThemeColors {
  bg: string
  text: string
  muted: string
  brand: string
  card: string
  border: string
}

export interface ThemeSpacing {
  radiusLg: string
  radiusMd: string
  radiusSm: string
}

export interface ThemeShadows {
  shadow1: string
}

// Utility types
export type CatTopic = 
  | 'Как вкусно кушать'
  | 'Как сладко спать'
  | 'Как урчать'
  | 'Как играть'
  | 'Как выпрашивать еду'
  | 'Ночные гонки'
  | 'Как прикалываться'

export type CatAdjective = 
  | 'мудрый'
  | 'харизматичный'
  | 'ласковый'
  | 'величественный'
  | 'озорной'

export type CatRole = 
  | 'советник'
  | 'коуч'
  | 'наставник'
  | 'гуру'
  | 'эксперт'
