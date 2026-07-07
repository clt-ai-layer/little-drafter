import { Template } from './index';

export const FLOWER_TEMPLATE: Template = {
  id: 'flower-1',
  name: 'Fleur Joyeuse',
  category: 'Nature',
  steps: [
    { index: 0, pathData: '<path d="M 200 220 L 200 380" />', instruction: 'D\'abord, dessine une longue ligne droite vers le bas pour la tige.' },
    { index: 1, pathData: '<path d="M 200 320 Q 140 300 120 340 Q 160 360 200 340 Z" />', instruction: 'Dessine une feuille pointue sur le côté gauche de la tige.' },
    { index: 2, pathData: '<path d="M 200 340 Q 260 320 280 360 Q 240 380 200 360 Z" />', instruction: 'Dessine une autre feuille pointue sur le côté droit de la tige.' },
    { index: 3, pathData: '<circle cx="200" cy="200" r="40" />', instruction: 'Dessine un grand cercle tout en haut de la tige pour le centre de la fleur.' },
    { index: 4, pathData: '<circle cx="200" cy="130" r="35" />', instruction: 'Dessine un cercle moyen juste au-dessus du grand pour le premier pétale.' },
    { index: 5, pathData: '<circle cx="250" cy="150" r="35" />', instruction: 'Dessine un autre pétale en haut à droite.' },
    { index: 6, pathData: '<circle cx="270" cy="200" r="35" />', instruction: 'Dessine un autre pétale tout à fait à droite.' },
    { index: 7, pathData: '<circle cx="250" cy="250" r="35" />', instruction: 'Dessine un pétale en bas à droite.' },
    { index: 8, pathData: '<circle cx="200" cy="270" r="35" />', instruction: 'Dessine un pétale en bas, près de la tige.' },
    { index: 9, pathData: '<circle cx="150" cy="250" r="35" />', instruction: 'Dessine un pétale en bas à gauche.' },
    { index: 10, pathData: '<circle cx="130" cy="200" r="35" />', instruction: 'Dessine un pétale tout à fait à gauche.' },
    { index: 11, pathData: '<circle cx="150" cy="150" r="35" />', instruction: 'Dessine le dernier pétale en haut à gauche.' },
    { index: 12, pathData: '<circle cx="185" cy="190" r="5" fill="#333" style="mix-blend-mode: multiply" />', instruction: 'Ajoute un point pour l\'œil gauche.' },
    { index: 13, pathData: '<circle cx="215" cy="190" r="5" fill="#333" style="mix-blend-mode: multiply" />', instruction: 'Ajoute un point pour l\'œil droit.' },
    { index: 14, pathData: '<path d="M 180 210 Q 200 230 220 210" fill="none" />', instruction: 'Enfin, dessine une courbe pour un beau sourire !' }
  ]
};
