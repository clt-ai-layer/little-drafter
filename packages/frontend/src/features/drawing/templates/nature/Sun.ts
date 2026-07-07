import { Template } from '../index';

const pieces = [
  '<circle cx="200" cy="200" r="80" fill="#FFF59D" stroke="#FBC02D" stroke-width="10"/>',
  '<line x1="200" y1="40" x2="200" y2="90" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<line x1="200" y1="360" x2="200" y2="310" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<line x1="40" y1="200" x2="90" y2="200" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<line x1="360" y1="200" x2="310" y2="200" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<line x1="85" y1="85" x2="120" y2="120" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<line x1="315" y1="315" x2="280" y2="280" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<line x1="315" y1="85" x2="280" y2="120" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<line x1="85" y1="315" x2="120" y2="280" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>',
  '<circle cx="170" cy="180" r="10" fill="#333"/>',
  '<circle cx="230" cy="180" r="10" fill="#333"/>',
  '<path d="M 170 220 Q 200 250 230 220" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round"/>',
  '<path d="M 170 220 Q 200 250 230 220" fill="#FF5252" style="mix-blend-mode: multiply" stroke="#333" stroke-width="8" stroke-linecap="round"/>',
  '<line x1="200" y1="40" x2="200" y2="90" fill="#FFE082" style="mix-blend-mode: multiply" stroke="#FF9800" stroke-width="12" stroke-linecap="round"/>'
];

const instructions = [
  'Dessine un grand cercle jaune au centre',
  'Ajoute un grand rayon en haut',
  'Ajoute un grand rayon en bas',
  'Ajoute un grand rayon à gauche',
  'Ajoute un grand rayon à droite',
  'Dessine un petit rayon en haut à gauche',
  'Dessine un petit rayon en bas à droite',
  'Dessine un petit rayon en haut à droite',
  'Dessine un petit rayon en bas à gauche',
  'Dessine l\'œil gauche',
  'Dessine l\'œil droit',
  'Ajoute un grand sourire chaleureux',
  'Colorie le sourire en rouge',
  'Colorie le grand rayon en haut en orange clair'
];

export const SUN_TEMPLATE: Template = {
  id: 'nature-sun',
  name: 'Soleil',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
