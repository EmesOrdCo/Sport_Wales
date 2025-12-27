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
  'News': 'bg-[#B91C3C]/10 text-[#B91C3C]',
  'Feature': 'bg-[#B91C3C]/10 text-[#B91C3C]',
  'Impact Story': 'bg-[#F59E0B]/10 text-[#F59E0B]',
  'Resources': 'bg-[#F59E0B]/10 text-[#F59E0B]',
  'Funding': 'bg-[#B91C3C]/10 text-[#B91C3C]',
  'Research': 'bg-[#F59E0B]/10 text-[#F59E0B]',
};

export function getCategoryDisplay(category: string, locale: 'en' | 'cy'): string {
  return categoryTranslations[category]?.[locale] || category;
}

export function getCategoryColor(category: string): string {
  return categoryColors[category] || 'bg-[#64748B]/10 text-[#64748B]';
}

