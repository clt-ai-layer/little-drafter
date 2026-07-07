import { Template } from '../index';

const pieces = [
  '<line x1="200" y1="40" x2="240" y2="140" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="240" y1="140" x2="350" y2="150" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="350" y1="150" x2="260" y2="210" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="260" y1="210" x2="290" y2="310" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="290" y1="310" x2="200" y2="260" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="200" y1="260" x2="110" y2="310" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="110" y1="310" x2="140" y2="210" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="140" y1="210" x2="50" y2="150" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="50" y1="150" x2="160" y2="140" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<line x1="160" y1="140" x2="200" y2="40" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>',
  '<polygon points="200,40 240,140 350,150 260,210 290,310 200,260 110,310 140,210 50,150 160,140" fill="#FFEB3B" opacity="0.8"/>',
  '<circle cx="170" cy="180" r="10" fill="#333"/>',
  '<circle cx="230" cy="180" r="10" fill="#333"/>',
  '<path d="M 180 210 Q 200 230 220 210" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 180 210 Q 200 230 220 210" fill="#FF4081" style="mix-blend-mode: multiply" stroke="#333" stroke-width="6" stroke-linecap="round"/>',
  '<line x1="200" y1="40" x2="240" y2="140" fill="#FFF9C4" style="mix-blend-mode: multiply" stroke="#FBC02D" stroke-width="10" stroke-linecap="round"/>'
];

const instructions = [
  'Dessine une ligne penchée vers la droite',
  'Dessine une ligne droite vers la droite',
  'Descends vers le centre',
  'Descends vers le bas à droite',
  'Remonte vers le milieu en bas',
  'Descends vers le bas à gauche',
  'Remonte vers le centre',
  'Va vers la gauche',
  'Fais une ligne droite vers le centre',
  'Remonte pour fermer l\'étoile',
  'Colorie l\'étoile en jaune',
  'Dessine l\'œil gauche',
  'Dessine l\'œil droit',
  'Ajoute un beau sourire',
  'Colorie le sourire en rose',
  'Colorie le premier bord de l\'étoile en jaune pâle'
];

export const STAR_TEMPLATE: Template = {
  id: 'nature-star',
  name: 'Étoile',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
