import { Template } from '../index';

const pieces = [
  '<path d="M 200 360 L 200 300" fill="none" stroke="#388E3C" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 200 300 Q 80 240 200 60" fill="none" stroke="#4CAF50" stroke-width="10" stroke-linecap="round"/>',
  '<path d="M 200 300 Q 320 240 200 60" fill="none" stroke="#4CAF50" stroke-width="10" stroke-linecap="round"/>',
  '<path d="M 200 300 Q 80 240 200 60 Q 320 240 200 300 Z" fill="#A5D6A7" opacity="0.8"/>',
  '<path d="M 200 300 L 200 100" fill="none" stroke="#388E3C" stroke-width="8" stroke-linecap="round"/>',
  '<path d="M 200 250 L 140 200" fill="none" stroke="#388E3C" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 200 250 L 260 200" fill="none" stroke="#388E3C" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 200 180 L 150 140" fill="none" stroke="#388E3C" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 200 180 L 250 140" fill="none" stroke="#388E3C" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 200 120 L 170 90" fill="none" stroke="#388E3C" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 200 120 L 230 90" fill="none" stroke="#388E3C" stroke-width="6" stroke-linecap="round"/>',
  '<path d="M 200 360 L 200 300" fill="#66BB6A" stroke="#388E3C" stroke-width="12" stroke-linecap="round" style="mix-blend-mode: multiply"/>',
  '<path d="M 200 300 Q 80 240 200 60" fill="#81C784" stroke="#4CAF50" stroke-width="10" stroke-linecap="round" style="mix-blend-mode: multiply"/>'
];

const instructions = [
  'Dessine la petite tige en bas',
  'Dessine le bord gauche de la feuille',
  'Dessine le bord droit de la feuille',
  'Colorie la feuille en vert clair',
  'Trace la grande nervure au centre',
  'Ajoute une nervure en bas à gauche',
  'Ajoute une nervure en bas à droite',
  'Ajoute une nervure au milieu à gauche',
  'Ajoute une nervure au milieu à droite',
  'Ajoute une petite nervure en haut à gauche',
  'Ajoute une petite nervure en haut à droite',
  'Colorie la tige en vert',
  'Colorie le bord gauche en vert clair'
];

export const LEAF_TEMPLATE: Template = {
  id: 'nature-leaf',
  name: 'Feuille',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
