import { Template } from './index';

export const DOG_TEMPLATE: Template = {
  id: 'dog-1',
  name: 'Chien Fidèle',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="160" r="50" />', instruction: 'Dessine un grand cercle pour la tête du chien.' },
    { index: 1, pathData: '<path d="M 160 140 Q 100 100 110 200 Q 120 250 160 180 Z" />', instruction: 'Dessine une grande oreille tombante à gauche.' },
    { index: 2, pathData: '<path d="M 240 140 Q 300 100 290 200 Q 280 250 240 180 Z" />', instruction: 'Dessine une autre grande oreille tombante à droite.' },
    { index: 3, pathData: '<circle cx="180" cy="150" r="6" fill="#333" />', instruction: 'Ajoute un point pour l\'œil gauche.' },
    { index: 4, pathData: '<circle cx="220" cy="150" r="6" fill="#333" />', instruction: 'Ajoute un point pour l\'œil droit.' },
    { index: 5, pathData: '<circle cx="200" cy="180" r="15" fill="none" />', instruction: 'Dessine un museau rond en bas de la tête.' },
    { index: 6, pathData: '<circle cx="200" cy="175" r="6" fill="#333" />', instruction: 'Ajoute un petit nez noir sur le museau.' },
    { index: 7, pathData: '<path d="M 200 181 L 200 190 Q 210 200 220 190 M 200 190 Q 190 200 180 190" fill="none" />', instruction: 'Dessine une bouche souriante en dessous du nez.' },
    { index: 8, pathData: '<path d="M 170 205 Q 150 250 160 320 L 240 320 Q 250 250 230 205 Z" />', instruction: 'Dessine le corps du chien sous la tête.' },
    { index: 9, pathData: '<path d="M 240 280 Q 280 250 320 230 Q 330 260 240 290 Z" />', instruction: 'Dessine une petite queue qui remue à droite.' },
    { index: 10, pathData: '<path d="M 170 320 L 170 360 M 190 320 L 190 360 M 210 320 L 210 360 M 230 320 L 230 360" />', instruction: 'Enfin, dessine quatre pattes en bas !' },
    { index: 11, pathData: '<circle cx="200" cy="160" r="50" fill="#D7CCC8" style="mix-blend-mode: multiply" />', instruction: 'Colorie la tête du chien en beige.' },
    { index: 12, pathData: '<path d="M 160 140 Q 100 100 110 200 Q 120 250 160 180 Z" fill="#8D6E63" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'oreille gauche en marron.' },
    { index: 13, pathData: '<path d="M 240 140 Q 300 100 290 200 Q 280 250 240 180 Z" fill="#8D6E63" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'oreille droite en marron.' },
    { index: 14, pathData: '<path d="M 170 205 Q 150 250 160 320 L 240 320 Q 250 250 230 205 Z" fill="#D7CCC8" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps du chien en beige.' }
  ]
};
