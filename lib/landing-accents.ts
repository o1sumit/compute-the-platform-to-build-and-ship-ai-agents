export type PopAccent = "blue" | "violet" | "coral" | "cyan";

export const featureAccents: PopAccent[] = ["blue", "violet", "coral", "cyan"];
export const stepAccents: PopAccent[] = ["coral", "blue", "violet", "cyan"];
export const heroStatAccents: PopAccent[] = ["coral", "blue", "cyan"];
export const faqAccents: PopAccent[] = ["violet", "coral", "blue", "cyan"];
export const compoundAccents: PopAccent[] = ["blue", "violet", "coral", "cyan", "violet"];
export const mythAccents: PopAccent[] = ["violet", "coral", "blue"];
export const pricingAccents: PopAccent[] = ["blue", "coral", "cyan"];

export function accentAt(accents: PopAccent[], index: number): PopAccent {
  return accents[index % accents.length];
}
