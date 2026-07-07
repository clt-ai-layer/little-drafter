import { Template } from './index';

export const SUN_TEMPLATE: Template = {
  id: 'sun-1',
  name: 'Soleil Brillant',
  category: 'Nature',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="200" r="60" />', instruction: 'Dessine un grand cercle au milieu pour le soleil.' },
    { index: 1, pathData: '<path d="M 200 120 L 200 60" fill="none" />', instruction: 'Dessine un rayon de soleil vers le haut.' },
    { index: 2, pathData: '<path d="M 200 280 L 200 340" fill="none" />', instruction: 'Dessine un rayon de soleil vers le bas.' },
    { index: 3, pathData: '<path d="M 280 200 L 340 200" fill="none" />', instruction: 'Dessine un rayon de soleil vers la droite.' },
    { index: 4, pathData: '<path d="M 120 200 L 60 200" fill="none" />', instruction: 'Dessine un rayon de soleil vers la gauche.' },
    { index: 5, pathData: '<path d="M 255 145 L 300 100" fill="none" />', instruction: 'Dessine un rayon en haut à droite.' },
    { index: 6, pathData: '<path d="M 145 255 L 100 300" fill="none" />', instruction: 'Dessine un rayon en bas à gauche.' },
    { index: 7, pathData: '<path d="M 145 145 L 100 100" fill="none" />', instruction: 'Dessine un rayon en haut à gauche.' },
    { index: 8, pathData: '<path d="M 255 255 L 300 300" fill="none" />', instruction: 'Dessine un rayon en bas à droite.' },
    { index: 9, pathData: '<path d="M 160 190 Q 180 210 200 190 Q 220 210 240 190 L 250 190 L 250 200 Q 220 230 200 200 Q 180 230 150 200 L 150 190 Z" fill="#333" style="mix-blend-mode: multiply" />', instruction: 'Dessine des lunettes de soleil cool pour notre soleil !' },
    { index: 10, pathData: '<path d="M 195 195 L 205 195" fill="none" stroke="#fff" />', instruction: 'Ajoute le pont des lunettes entre les deux verres.' },
    { index: 11, pathData: '<path d="M 170 220 Q 200 250 230 220" fill="none" />', instruction: 'Enfin, dessine un grand sourire !' }
  ]
};
