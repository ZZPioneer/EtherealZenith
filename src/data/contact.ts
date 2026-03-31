import { Language } from "../../types";

export interface SocialLinks {
  wechat: string;
  xiaohongshu: string;
  bilibili: string;
  px500: string;
  douyin: string;
}

export interface ContactContent {
  baseLabel: string;
  locationValue: string;
  contactLabel: string;
  emailMeLabel: string;
  email: string;
  hello: string;
  intro: string;
  socials: SocialLinks;
  tooltip?: string;
  githubLabel: string;
  footerDesign: string;
}

export const CONTACT_DATA: Record<Language, ContactContent> = {
  zh: {
    baseLabel: "BASE",
    locationValue: "杭州, 中国",
    contactLabel: "取得联系",
    emailMeLabel: "邮箱",
    email: "zzeesep_10@163.com",
    hello: "你好 ;-)",
    intro: "欢迎探讨与合作。",
    socials: {
      wechat: "BrightLight10",
      xiaohongshu: "9562322036",
      bilibili: "bili_4572744506",
      px500: "EtherealZenith",
      douyin: "25485289861",
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro",
  },
  en: {
    baseLabel: "BASE",
    locationValue: "Hangzhou, China",
    contactLabel: "Get in touch",
    emailMeLabel: "Email Me",
    email: "zzeesep_10@163.com",
    hello: "Hello ;-)",
    intro: "Welcome to discuss & cooperate.",
    socials: {
      wechat: "BrightLight10",
      xiaohongshu: "9562322036",
      bilibili: "bili_4572744506",
      px500: "EtherealZenith",
      douyin: "25485289861",
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro",
  },
};
