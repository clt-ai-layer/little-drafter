import { Template } from '../index';

const pieces = [
  '<circle cx="200" cy="150" r="40" fill="#FFCA28" stroke="#FF8F00" stroke-width="8"/>',
  '<path d="M 200 110 Q 220 30 200 30 Q 180 30 200 110" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 200 190 Q 220 270 200 270 Q 180 270 200 190" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 160 150 Q 80 130 80 150 Q 80 170 160 150" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 240 150 Q 320 130 320 150 Q 320 170 240 150" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 170 120 Q 110 60 130 50 Q 140 70 170 120" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 230 180 Q 290 240 270 250 Q 260 230 230 180" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 230 120 Q 290 60 270 50 Q 260 70 230 120" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 170 180 Q 110 240 130 250 Q 140 230 170 180" fill="#FFF" stroke="#FFCA28" stroke-width="8"/>',
  '<path d="M 200 220 L 200 380" fill="none" stroke="#66BB6A" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 200 300 Q 250 280 260 320 Q 220 330 200 300" fill="#81C784" stroke="#66BB6A" stroke-width="6"/>',
  '<path d="M 200 220 L 200 380" fill="#81C784" stroke="#66BB6A" stroke-width="12" stroke-linecap="round" style="mix-blend-mode: multiply"/>',
  '<path d="M 200 110 Q 220 30 200 30 Q 180 30 200 110" fill="#FFECB3" stroke="#FFCA28" stroke-width="8" style="mix-blend-mode: multiply"/>'
];

const instructions = [
  'Dessine un gros cercle jaune pour le cœur',
  'Dessine un pétale vers le haut',
  'Dessine un pétale vers le bas',
  'Dessine un pétale vers la gauche',
  'Dessine un pétale vers la droite',
  'Ajoute un pétale en haut à gauche',
  'Ajoute un pétale en bas à droite',
  'Ajoute un pétale en haut à droite',
  'Ajoute un pétale en bas à gauche',
  'Trace une longue ligne verte pour la tige',
  'Dessine une petite feuille sur la tige',
  'Colorie la tige en vert',
  'Colorie le pétale du haut en jaune clair'
];

export const FLOWER_TEMPLATE: Template = {
  id: 'nature-flower',
  name: 'Fleur',
  category: 'Nature',
  steps: pieces.map((_, i) => {
    const currentPieces = pieces.slice(0, i + 1);
    const center = currentPieces[0];
    const others = currentPieces.slice(1);
    const svgContent = [...others, center].join('');
    
    return {
      instruction: instructions[i],
      svg: `<svg viewBox="0 0 400 400">${svgContent}</svg>`
    };
  })
};
