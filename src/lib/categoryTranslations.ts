/**
 * Category translations for English/Welsh
 */

export const categoryTranslations: Record<string, { en: string; cy: string }> = {
  'News': { en: 'News', cy: 'Newyddion' },
  'Feature': { en: 'Feature', cy: 'Nodwedd' },
  'Impact Story': { en: 'Impact Story', cy: 'Stori Effaith' },
  'Resources': { en: 'Resources', cy: 'Adnoddau' },
  'Funding': { en: 'Funding', cy: 'Cyllid' },
  'Research': { en: 'Research', cy: 'Ymchwil' },
};

export const categoryColors: Record<string, string> = {
  'News': 'bg-[#E11D2E]/10 text-[#E11D2E]',
  'Feature': 'bg-[#E11D2E]/10 text-[#E11D2E]',
  'Impact Story': 'bg-[#F4B400]/10 text-[#F4B400]',
  'Resources': 'bg-[#F4B400]/10 text-[#F4B400]',
  'Funding': 'bg-[#E11D2E]/10 text-[#E11D2E]',
  'Research': 'bg-[#F4B400]/10 text-[#F4B400]',
};

export function getCategoryDisplay(category: string, locale: 'en' | 'cy'): string {
  return categoryTranslations[category]?.[locale] || category;
}

export function getCategoryColor(category: string): string {
  return categoryColors[category] || 'bg-[#64748B]/10 text-[#64748B]';
}


