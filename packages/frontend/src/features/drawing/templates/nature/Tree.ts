import { Template } from '../index';

const pieces = [
  '<path d="M 180 320 L 180 180" fill="none" stroke="#795548" stroke-width="20" stroke-linecap="round"/>',
  '<path d="M 220 320 L 220 180" fill="none" stroke="#795548" stroke-width="20" stroke-linecap="round"/>',
  '<path d="M 180 180 L 140 120" fill="none" stroke="#795548" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 220 180 L 260 120" fill="none" stroke="#795548" stroke-width="16" stroke-linecap="round"/>',
  '<path d="M 170 320 L 230 320 Z" fill="none" stroke="#795548" stroke-width="20" stroke-linecap="round"/>',
  '<circle cx="200" cy="120" r="90" fill="#81C784" stroke="#388E3C" stroke-width="8"/>',
  '<circle cx="130" cy="150" r="60" fill="#81C784" stroke="#388E3C" stroke-width="8"/>',
  '<circle cx="270" cy="150" r="60" fill="#81C784" stroke="#388E3C" stroke-width="8"/>',
  '<circle cx="160" cy="80" r="60" fill="#81C784" stroke="#388E3C" stroke-width="8"/>',
  '<circle cx="240" cy="80" r="60" fill="#81C784" stroke="#388E3C" stroke-width="8"/>',
  '<circle cx="150" cy="150" r="15" fill="#E53935"/>',
  '<circle cx="250" cy="110" r="15" fill="#E53935"/>',
  '<circle cx="200" cy="180" r="15" fill="#E53935"/>',
  '<path d="M 100 340 L 300 340" fill="none" stroke="#4CAF50" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 180 320 L 180 180" fill="#D7CCC8" style="mix-blend-mode: multiply" stroke="#795548" stroke-width="20" stroke-linecap="round"/>',
  '<path d="M 220 320 L 220 180" fill="#D7CCC8" style="mix-blend-mode: multiply" stroke="#795548" stroke-width="20" stroke-linecap="round"/>'
];

const instructions = [
  'Dessine la ligne gauche du tronc',
  'Dessine la ligne droite du tronc',
  'Ajoute une branche vers la gauche',
  'Ajoute une branche vers la droite',
  'Ferme le bas du tronc',
  'Dessine un grand cercle vert au centre',
  'Ajoute un cercle vert à gauche',
  'Ajoute un cercle vert à droite',
  'Ajoute un cercle vert en haut à gauche',
  'Ajoute un cercle vert en haut à droite',
  'Dessine une pomme rouge à gauche',
  'Dessine une pomme rouge à droite',
  'Dessine une pomme rouge au milieu',
  "Trace une ligne verte pour l'herbe au sol",
  'Colorie le côté gauche du tronc',
  'Colorie le côté droit du tronc'
];

export const TREE_TEMPLATE: Template = {
  id: 'nature-tree',
  name: 'Arbre',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
