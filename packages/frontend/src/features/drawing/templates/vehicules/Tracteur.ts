import { Template } from '../index';

export const TRACTEUR_TEMPLATE: Template = {
  id: 'tracteur-1',
  name: 'Tracteur',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<rect x="60" y="200" width="120" height="80" />', instruction: 'Dessine un rectangle long pour l\'avant du tracteur (le moteur).' },
    { index: 1, pathData: '<rect x="180" y="140" width="100" height="140" />', instruction: 'Dessine une grande cabine carrée derrière le moteur.' },
    { index: 2, pathData: '<circle cx="100" cy="280" r="30" />', instruction: 'Dessine une petite roue à l\'avant.' },
    { index: 3, pathData: '<circle cx="230" cy="280" r="50" />', instruction: 'Dessine une très grosse roue à l\'arrière !' },
    { index: 4, pathData: '<circle cx="100" cy="280" r="10" />', instruction: 'Ajoute la jante de la petite roue.' },
    { index: 5, pathData: '<circle cx="230" cy="280" r="15" />', instruction: 'Ajoute la jante de la grosse roue.' },
    { index: 6, pathData: '<rect x="190" y="150" width="80" height="60" />', instruction: 'Dessine une grande vitre dans la cabine pour que le fermier puisse voir.' },
    { index: 7, pathData: '<path d="M 80 200 L 80 140 L 90 140 L 90 200 Z" />', instruction: 'Dessine le grand pot d\'échappement pointé vers le ciel.' },
    { index: 8, pathData: '<path d="M 85 140 L 100 120 M 85 140 L 70 120" fill="none" stroke-width="3" />', instruction: 'Fais deux petits traits pour montrer la fumée.' },
    { index: 9, pathData: '<rect x="280" y="240" width="20" height="10" />', instruction: 'Ajoute l\'attelage derrière pour tirer la remorque.' },
    { index: 10, pathData: '<path d="M 170 140 L 290 140 L 290 130 L 170 130 Z" />', instruction: 'Mets un petit toit qui dépasse au-dessus de la cabine.' },
    { index: 11, pathData: '<path d="M 60 220 L 40 220 L 40 240 L 60 240 Z" />', instruction: 'Ajoute un phare devant pour rouler dans les champs la nuit !' },
    { index: 12, pathData: '<rect x="60" y="200" width="120" height="80" fill="green" style="mix-blend-mode: multiply" />', instruction: 'Colorie le moteur du tracteur en vert.' },
    { index: 13, pathData: '<rect x="180" y="140" width="100" height="140" fill="green" style="mix-blend-mode: multiply" />', instruction: 'Colorie la cabine en vert.' },
    { index: 14, pathData: '<circle cx="230" cy="280" r="50" fill="black" style="mix-blend-mode: multiply" />', instruction: 'Colorie la très grosse roue arrière en noir.' }
  ]
};
