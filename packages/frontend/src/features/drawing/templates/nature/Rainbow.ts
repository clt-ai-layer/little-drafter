import { Template } from '../index';

const pieces = [
  '<path d="M 60 260 A 140 140 0 0 1 340 260" fill="none" stroke="#FF5252" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 80 260 A 120 120 0 0 1 320 260" fill="none" stroke="#FF9800" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 100 260 A 100 100 0 0 1 300 260" fill="none" stroke="#FFEB3B" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 120 260 A 80 80 0 0 1 280 260" fill="none" stroke="#4CAF50" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 140 260 A 60 60 0 0 1 260 260" fill="none" stroke="#2196F3" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 160 260 A 40 40 0 0 1 240 260" fill="none" stroke="#9C27B0" stroke-width="16" stroke-linecap="round"/>',
  '<circle cx="80" cy="260" r="30" fill="#FFF" stroke="#E0E0E0" stroke-width="6"/>',
  '<circle cx="50" cy="270" r="20" fill="#FFF" stroke="#E0E0E0" stroke-width="6"/>',
  '<circle cx="110" cy="270" r="25" fill="#FFF" stroke="#E0E0E0" stroke-width="6"/>',
  '<circle cx="320" cy="260" r="30" fill="#FFF" stroke="#E0E0E0" stroke-width="6"/>',
  '<circle cx="290" cy="270" r="25" fill="#FFF" stroke="#E0E0E0" stroke-width="6"/>',
  '<circle cx="350" cy="270" r="20" fill="#FFF" stroke="#E0E0E0" stroke-width="6"/>',
  '<path d="M 60 260 A 140 140 0 0 1 340 260" fill="#FFCDD2" style="mix-blend-mode: multiply" stroke="#FF5252" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 80 260 A 120 120 0 0 1 320 260" fill="#FFE0B2" style="mix-blend-mode: multiply" stroke="#FF9800" stroke-width="16" stroke-linecap="round"/>'
];

const instructions = [
  'Dessine un grand arc rouge',
  'Ajoute un arc orange en dessous',
  'Ajoute un arc jaune',
  'Ajoute un arc vert',
  'Ajoute un arc bleu',
  'Ajoute un petit arc violet',
  'Dessine le centre d\'un nuage à gauche',
  'Ajoute une bosse au nuage gauche',
  'Ferme le nuage gauche',
  'Dessine le centre d\'un nuage à droite',
  'Ajoute une bosse au nuage droit',
  'Ferme le nuage droit',
  'Colorie le premier arc en rouge clair',
  'Colorie le deuxième arc en orange clair'
];

export const RAINBOW_TEMPLATE: Template = {
  id: 'nature-rainbow',
  name: 'Arc-en-ciel',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
