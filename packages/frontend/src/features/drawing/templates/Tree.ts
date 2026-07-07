import { Template } from './index';

export const TREE_TEMPLATE: Template = {
  id: 'tree-1',
  name: 'Grand Arbre',
  category: 'Nature',
  steps: [
    { index: 0, pathData: '<path d="M 180 380 L 190 200 L 210 200 L 220 380 Z" />', instruction: 'Dessine le tronc de l\'arbre en partant du bas.' },
    { index: 1, pathData: '<path d="M 180 380 Q 150 400 140 380 M 220 380 Q 250 400 260 380" fill="none" />', instruction: 'Ajoute des racines qui sortent de la terre en bas.' },
    { index: 2, pathData: '<path d="M 195 250 Q 150 230 130 200" fill="none" />', instruction: 'Dessine une branche qui part vers la gauche.' },
    { index: 3, pathData: '<path d="M 205 230 Q 250 200 280 180" fill="none" />', instruction: 'Dessine une branche qui part vers la droite.' },
    { index: 4, pathData: '<path d="M 150 200 A 40 40 0 1 1 180 140 A 50 50 0 1 1 250 140 A 40 40 0 1 1 280 200 A 40 40 0 1 1 230 240 A 40 40 0 1 1 150 200 Z" />', instruction: 'Dessine un grand nuage tout autour des branches pour faire les feuilles.' },
    { index: 5, pathData: '<circle cx="160" cy="180" r="10" fill="#ff4d4d" style="mix-blend-mode: multiply" />', instruction: 'Ajoute une pomme rouge sur l\'arbre.' },
    { index: 6, pathData: '<circle cx="210" cy="130" r="10" fill="#ff4d4d" style="mix-blend-mode: multiply" />', instruction: 'Ajoute une autre pomme rouge en haut.' },
    { index: 7, pathData: '<circle cx="260" cy="170" r="10" fill="#ff4d4d" style="mix-blend-mode: multiply" />', instruction: 'Ajoute une pomme rouge à droite.' },
    { index: 8, pathData: '<circle cx="200" cy="200" r="10" fill="#ff4d4d" style="mix-blend-mode: multiply" />', instruction: 'Ajoute une pomme rouge au milieu.' },
    { index: 9, pathData: '<circle cx="240" cy="210" r="10" fill="#ff4d4d" style="mix-blend-mode: multiply" />', instruction: 'Enfin, ajoute une dernière pomme rouge !' }
  ]
};
