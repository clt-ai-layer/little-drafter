import { Template } from '../index';

export const TRAIN_TEMPLATE: Template = {
  id: 'train-1',
  name: 'Train',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<rect x="50" y="200" width="120" height="80" />', instruction: 'Dessine un rectangle pour le wagon arrière.' },
    { index: 1, pathData: '<rect x="180" y="150" width="100" height="130" />', instruction: 'Dessine un grand rectangle vertical pour la cabine du train.' },
    { index: 2, pathData: '<rect x="280" y="220" width="80" height="60" />', instruction: 'Dessine un plus petit rectangle à l\'avant pour le moteur.' },
    { index: 3, pathData: '<path d="M 310 220 L 310 160 L 340 160 L 340 220 Z" />', instruction: 'Ajoute la cheminée sur le moteur à l\'avant.' },
    { index: 4, pathData: '<path d="M 360 280 L 390 280 L 360 220 Z" />', instruction: 'Dessine un triangle à l\'avant pour le chasse-pierres.' },
    { index: 5, pathData: '<circle cx="90" cy="280" r="20" />', instruction: 'Dessine la première roue sous le wagon.' },
    { index: 6, pathData: '<circle cx="130" cy="280" r="20" />', instruction: 'Dessine la deuxième roue sous le wagon.' },
    { index: 7, pathData: '<circle cx="210" cy="280" r="25" />', instruction: 'Dessine une grande roue sous la cabine.' },
    { index: 8, pathData: '<circle cx="260" cy="280" r="25" />', instruction: 'Dessine une deuxième grande roue sous la cabine.' },
    { index: 9, pathData: '<circle cx="310" cy="280" r="15" />', instruction: 'Dessine une petite roue sous le moteur.' },
    { index: 10, pathData: '<circle cx="350" cy="280" r="15" />', instruction: 'Dessine la dernière petite roue à l\'avant.' },
    { index: 11, pathData: '<rect x="200" y="170" width="40" height="40" />', instruction: 'Ajoute une fenêtre carrée sur la cabine.' },
    { index: 12, pathData: '<path d="M 170 260 L 180 260" stroke-width="4" />', instruction: 'Relie le wagon et la cabine avec un trait pour l\'attelage.' },
    { index: 13, pathData: '<circle cx="325" cy="130" r="10" fill="none" />', instruction: 'Dessine un petit rond de fumée au-dessus de la cheminée.' },
    { index: 14, pathData: '<circle cx="340" cy="90" r="15" fill="none" />', instruction: 'Ajoute un nuage de fumée plus grand qui s\'envole.' },
    { index: 15, pathData: '<rect x="50" y="200" width="120" height="80" fill="blue" style="mix-blend-mode: multiply" />', instruction: 'Colorie le wagon arrière en bleu.' },
    { index: 16, pathData: '<rect x="180" y="150" width="100" height="130" fill="red" style="mix-blend-mode: multiply" />', instruction: 'Colorie la cabine en rouge.' },
    { index: 17, pathData: '<rect x="280" y="220" width="80" height="60" fill="blue" style="mix-blend-mode: multiply" />', instruction: 'Colorie le moteur à l\'avant en bleu.' }
  ]
};
