import { Template } from '../index';

export const MOTO_TEMPLATE: Template = {
  id: 'moto-1',
  name: 'Moto',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<circle cx="100" cy="250" r="40" fill="none" stroke-width="8" />', instruction: 'Dessine un grand cercle à gauche pour la roue arrière.' },
    { index: 1, pathData: '<circle cx="300" cy="250" r="40" fill="none" stroke-width="8" />', instruction: 'Dessine un grand cercle à droite pour la roue avant.' },
    { index: 2, pathData: '<circle cx="100" cy="250" r="15" />', instruction: 'Dessine le centre (la jante) de la roue arrière.' },
    { index: 3, pathData: '<circle cx="300" cy="250" r="15" />', instruction: 'Dessine le centre (la jante) de la roue avant.' },
    { index: 4, pathData: '<path d="M 100 250 L 160 250 L 220 180 L 140 180 Z" />', instruction: 'Dessine le corps de la moto au centre.' },
    { index: 5, pathData: '<path d="M 300 250 L 250 150 L 230 150 L 280 250 Z" />', instruction: 'Ajoute la longue fourche pour tenir la roue avant.' },
    { index: 6, pathData: '<path d="M 160 250 L 120 150 L 140 150 L 180 250 Z" />', instruction: 'Dessine la barre qui monte depuis la roue arrière.' },
    { index: 7, pathData: '<path d="M 230 150 L 200 130 L 220 120 L 250 140 Z" />', instruction: 'Dessine le guidon en haut de la fourche avant.' },
    { index: 8, pathData: '<path d="M 120 160 Q 140 140 160 160 Z" />', instruction: 'Dessine la selle courbée pour s\'asseoir.' },
    { index: 9, pathData: '<path d="M 160 180 C 180 150, 220 150, 230 180 Z" />', instruction: 'Ajoute un gros réservoir arrondi devant la selle.' },
    { index: 10, pathData: '<path d="M 100 250 L 60 220 L 70 210 L 100 240 Z" />', instruction: 'Dessine le pot d\'échappement pointé vers le haut à l\'arrière.' },
    { index: 11, pathData: '<circle cx="260" cy="140" r="10" />', instruction: 'N\'oublie pas le phare rond à l\'avant pour voir la nuit !' },
    { index: 12, pathData: '<path d="M 100 250 L 160 250 L 220 180 L 140 180 Z" fill="green" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps de la moto en vert.' },
    { index: 13, pathData: '<path d="M 160 180 C 180 150, 220 150, 230 180 Z" fill="green" style="mix-blend-mode: multiply" />', instruction: 'Colorie le réservoir en vert.' }
  ]
};
