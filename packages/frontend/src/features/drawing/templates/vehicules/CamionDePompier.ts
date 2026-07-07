import { Template } from '../index';

export const CAMION_DE_POMPIER_TEMPLATE: Template = {
  id: 'camion-pompier-1',
  name: 'Camion de pompier',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<rect x="50" y="150" width="200" height="120" />', instruction: 'Dessine un grand rectangle pour l\'arrière du camion.' },
    { index: 1, pathData: '<rect x="260" y="180" width="90" height="90" />', instruction: 'Dessine un rectangle carré à l\'avant pour la cabine du conducteur.' },
    { index: 2, pathData: '<path d="M 260 180 L 290 150 L 350 150 L 350 180 Z" />', instruction: 'Dessine le toit de la cabine avec un trapèze.' },
    { index: 3, pathData: '<circle cx="100" cy="270" r="25" />', instruction: 'Dessine la première grande roue à l\'arrière.' },
    { index: 4, pathData: '<circle cx="160" cy="270" r="25" />', instruction: 'Dessine la deuxième grande roue à l\'arrière.' },
    { index: 5, pathData: '<circle cx="310" cy="270" r="25" />', instruction: 'Dessine la grande roue de la cabine à l\'avant.' },
    { index: 6, pathData: '<circle cx="100" cy="270" r="10" />', instruction: 'Fais un petit rond au centre de la première roue.' },
    { index: 7, pathData: '<circle cx="160" cy="270" r="10" />', instruction: 'Fais un petit rond au centre de la deuxième roue.' },
    { index: 8, pathData: '<circle cx="310" cy="270" r="10" />', instruction: 'Fais un petit rond au centre de la troisième roue.' },
    { index: 9, pathData: '<rect x="280" y="190" width="40" height="30" />', instruction: 'Dessine une fenêtre sur la cabine.' },
    { index: 10, pathData: '<path d="M 350 230 L 360 230 L 360 250 L 350 250 Z" />', instruction: 'Ajoute le phare à l\'avant.' },
    { index: 11, pathData: '<path d="M 250 250 L 260 250" fill="none" stroke-width="4" />', instruction: 'Relie l\'arrière et la cabine.' },
    { index: 12, pathData: '<rect x="300" y="130" width="20" height="20" />', instruction: 'Dessine le gyrophare carré sur le toit.' },
    { index: 13, pathData: '<path d="M 60 180 L 230 180 L 230 190 L 60 190 Z" />', instruction: 'Dessine la longue échelle rangée sur le côté du camion !' },
    { index: 14, pathData: '<rect x="50" y="150" width="200" height="120" fill="red" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'arrière du camion en rouge.' },
    { index: 15, pathData: '<rect x="260" y="180" width="90" height="90" fill="red" style="mix-blend-mode: multiply" />', instruction: 'Colorie la cabine en rouge.' },
    { index: 16, pathData: '<circle cx="100" cy="270" r="25" fill="black" style="mix-blend-mode: multiply" />', instruction: 'Colorie la première roue en noir.' }
  ]
};
