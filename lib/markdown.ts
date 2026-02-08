import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface HighlightedWord {
  text: string;
  color: 'blue' | 'green';
}

export interface HeroData {
  title: string;
  highlightedWords?: HighlightedWord[];
  buttonText?: string;
  youtubeUrl?: string;
  imagePlaceholder?: boolean;
}

export function getHeroData(): HeroData | undefined {
  const filePath = path.join(process.cwd(), "contents", "hero.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as HeroData;
}

export interface AboutData {
  title: string;
  description: string;
  imageUrl?: string;
  imagePlaceholder?: boolean;
}

export function getAboutData(): AboutData | undefined {
  const filePath = path.join(process.cwd(), "contents", "about.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as AboutData;
}

export interface ChecklistItem {
  text: string;
}

export interface AudienceData {
  title: string;
  cocoklist: ChecklistItem[];
  notCocoklist: ChecklistItem[];
}

export function getAudienceData(): AudienceData | undefined {
  const filePath = path.join(process.cwd(), "contents", "audience.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as AudienceData;
}

export interface Testimonial {
  name: string;
  title: string;
  image?: string;
  text: string;
}

export interface TestimoniData {
  title: string;
  buttonText: string;
  highlightedWords?: HighlightedWord[];
  testimonials: Testimonial[];
}

export function getTestimoniData(): TestimoniData | undefined {
  const filePath = path.join(process.cwd(), "contents", "testimoni.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as TestimoniData;
}

export interface ModulItem {
  title: string;
  subtitle: string;
  bullet: string;
  description: string;
  image?: string;
}

export interface ModulData {
  title: string;
  highlightedWords?: HighlightedWord[];
  items: ModulItem[];
}

export function getModulData(): ModulData | undefined {
  const filePath = path.join(process.cwd(), "contents", "modul.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as ModulData;
}

export interface Facility {
  title: string;
  price: string;
  period: string;
  description: string;
  image?: string;
}

export interface FasilitasData {
  title: string;
  totalPrice: string;
  totalPeriod: string;
  facilities: Facility[];
}

export function getFasilitasData(): FasilitasData | undefined {
  const filePath = path.join(process.cwd(), "contents", "fasilitas.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as FasilitasData;
}

export interface Package {
  name: string;
  description: string;
  price: string;
  period: string;
  isBestValue?: boolean;
  benefits: { title: string; isIncluded: boolean }[];
}

export interface PricingData {
  title: string;
  description: string;
  packages: Package[];
}

export function getPricingData(): PricingData | undefined {
  const filePath = path.join(process.cwd(), "contents", "pricing.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as PricingData;
}

export interface FooterData {
  description: string;
}

export function getFooterData(): FooterData | undefined {
  const filePath = path.join(process.cwd(), "contents", "footer.md");

  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return data as FooterData;
}
