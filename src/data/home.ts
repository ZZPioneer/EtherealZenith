import { Language, Category } from '../../types';

export interface HeroItem {
  text: string;
  annotation: string;
  category: Category | null;
}

export interface HomeContent {
  heroItems: HeroItem[];
  intro: string;
  selectedWorks: string;
  years: string;
}

export const HOME_DATA: Record<Language, HomeContent> = {
  zh: {
    heroItems: [
      { text: "摄影摄像", annotation: "(作品积累较多)", category: Category.VIDEO }, 
      { text: "平面交互", annotation: "(当前主攻，兴趣所在)", category: Category.DESIGN },
      { text: "应用开发", annotation: "(vibe builder)", category: Category.DEV },
      { text: "炒粉炒饭", annotation: "(还在学)", category: null }
    ],
    intro: "静默予世界，炽热予偏爱.",
    selectedWorks: "精选作品",
    years: "[ 2021 — 2026 ]"
  },
  en: {
    heroItems: [
      { text: "Photography & Videography", annotation: "(Extensive Portfolio)", category: Category.VIDEO },
      { text: "Graphic & UI", annotation: "(Main Focus & Passion)", category: Category.DESIGN },
      { text: "Development", annotation: "(Vibe Coder)", category: Category.DEV },
      { text: "Cooking", annotation: "(Still Learning)", category: null }
    ],
    intro: "Your personal catchphrase or introduction goes here.",
    selectedWorks: "Selected Works",
    years: "[ 20XX — 20XX ]"
  }
};
