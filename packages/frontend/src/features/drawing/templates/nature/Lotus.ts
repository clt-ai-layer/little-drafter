import { Template } from '../index';

const pieces = [
  '<ellipse cx="200" cy="270" rx="140" ry="40" fill="#81C784" stroke="#388E3C" stroke-width="8"/>',
  '<path d="M 200 270 L 170 310 L 230 310 Z" fill="#4CAF50"/>',
  '<path d="M 200 100 Q 250 200 200 270 Q 150 200 200 100" fill="#F48FB1" stroke="#D81B60" stroke-width="8"/>',
  '<path d="M 200 270 Q 280 220 280 140 Q 240 180 200 270" fill="#F8BBD0" stroke="#D81B60" stroke-width="8"/>',
  '<path d="M 200 270 Q 120 220 120 140 Q 160 180 200 270" fill="#F8BBD0" stroke="#D81B60" stroke-width="8"/>',
  '<path d="M 200 270 Q 320 240 320 180 Q 260 210 200 270" fill="#FCE4EC" stroke="#D81B60" stroke-width="8"/>',
  '<path d="M 200 270 Q 80 240 80 180 Q 140 210 200 270" fill="#FCE4EC" stroke="#D81B60" stroke-width="8"/>',
  '<path d="M 120 330 Q 200 360 280 330" fill="none" stroke="#29B6F6" stroke-width="8" stroke-linecap="round"/>',
  '<path d="M 150 360 Q 200 380 250 360" fill="none" stroke="#29B6F6" stroke-width="8" stroke-linecap="round"/>',
  '<circle cx="200" cy="270" r="15" fill="#FFEB3B"/>',
  '<path d="M 120 330 Q 200 360 280 330" fill="#03A9F4" stroke="#29B6F6" stroke-width="8" stroke-linecap="round" style="mix-blend-mode: multiply"/>',
  '<path d="M 150 360 Q 200 380 250 360" fill="#4FC3F7" stroke="#29B6F6" stroke-width="8" stroke-linecap="round" style="mix-blend-mode: multiply"/>'
];

const instructions = [
  'Dessine une grande feuille verte ovale',
  'Fais un petit triangle vert pour la feuille',
  'Dessine le grand pétale central en rose',
  'Ajoute un pétale à droite',
  'Ajoute un pétale à gauche',
  'Ajoute un petit pétale tout à droite',
  'Ajoute un petit pétale tout à gauche',
  'Dessine une vague d\'eau bleue',
  'Dessine une deuxième vague d\'eau',
  'Ajoute un cœur jaune au centre du lotus',
  'Colorie la première vague en bleu',
  'Colorie la deuxième vague en bleu clair'
];

export const LOTUS_TEMPLATE: Template = {
  id: 'nature-lotus',
  name: 'Fleur de Lotus',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
