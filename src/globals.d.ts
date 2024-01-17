declare interface ListInfo {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string[];
  liveUrl?: string;
}

declare interface LanguageInfo {
  id: number;
  title: string;
  grade: string;
  certificate?: string;
}

declare interface ProjectInfo {
  id: number;
  img: string;
  title: string;
  info: string;
  gitUrl?: string;
  liveUrl?: string;
}
