import { Template } from '../index';

const pieces = [
  '<path d="M 200 60 Q 120 200 120 260 A 80 80 0 0 0 200 340" fill="none" stroke="#29B6F6" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 200 60 Q 280 200 280 260 A 80 80 0 0 1 200 340" fill="none" stroke="#29B6F6" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 200 60 Q 120 200 120 260 A 80 80 0 0 0 280 260 Q 280 200 200 60 Z" fill="#81D4FA" opacity="0.8"/>',
  '<path d="M 140 260 A 40 40 0 0 1 170 210" fill="none" stroke="#FFF" stroke-width="8" stroke-linecap="round"/>',
  '<path d="M 260 260 A 40 40 0 0 0 230 210" fill="none" stroke="#FFF" stroke-width="8" stroke-linecap="round"/>',
  '<circle cx="100" cy="280" r="10" fill="#29B6F6"/>',
  '<circle cx="300" cy="280" r="10" fill="#29B6F6"/>',
  '<circle cx="200" cy="370" r="10" fill="#29B6F6"/>',
  '<circle cx="170" cy="240" r="8" fill="#333"/>',
  '<circle cx="230" cy="240" r="8" fill="#333"/>',
  '<path d="M 180 270 Q 200 290 220 270" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 200 60 Q 120 200 120 260 A 80 80 0 0 0 200 340" fill="#B3E5FC" style="mix-blend-mode: multiply" stroke="#29B6F6" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 200 60 Q 280 200 280 260 A 80 80 0 0 1 200 340" fill="#81D4FA" style="mix-blend-mode: multiply" stroke="#29B6F6" stroke-width="12" stroke-linecap="round"/>'
];

const instructions = [
  'Dessine le côté gauche de la goutte',
  'Dessine le côté droit pour la fermer',
  'Colorie la goutte en bleu clair',
  'Ajoute un reflet blanc à gauche',
  'Ajoute un reflet blanc à droite',
  'Dessine une petite goutte qui éclabousse à gauche',
  'Dessine une petite goutte à droite',
  'Dessine une petite goutte en bas',
  "Dessine l'œil gauche",
  "Dessine l'œil droit",
  'Ajoute un petit sourire',
  'Colorie le bord gauche de la goutte',
  'Colorie le bord droit de la goutte'
];

export const WATER_DROP_TEMPLATE: Template = {
  id: 'nature-waterdrop',
  name: "Goutte d'eau",
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
