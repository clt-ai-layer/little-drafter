import { Template } from './index';

export const BUTTERFLY_TEMPLATE: Template = {
  id: 'butterfly-1',
  name: 'Joli Papillon',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<rect x="190" y="100" width="20" height="200" rx="10" ry="10" />', instruction: 'Dessine un long rectangle fin pour le corps du papillon.' },
    { index: 1, pathData: '<circle cx="200" cy="90" r="15" />', instruction: 'Dessine un petit cercle pour la tête.' },
    { index: 2, pathData: '<path d="M 195 75 Q 180 50 170 60 M 205 75 Q 220 50 230 60" fill="none" />', instruction: 'Dessine deux petites antennes courbées sur la tête.' },
    { index: 3, pathData: '<path d="M 190 150 Q 80 50 60 150 Q 40 220 190 210 Z" />', instruction: 'Dessine la grande aile supérieure gauche.' },
    { index: 4, pathData: '<path d="M 210 150 Q 320 50 340 150 Q 360 220 210 210 Z" />', instruction: 'Dessine la grande aile supérieure droite.' },
    { index: 5, pathData: '<path d="M 190 210 Q 80 250 100 320 Q 140 380 190 270 Z" />', instruction: 'Dessine la petite aile inférieure gauche.' },
    { index: 6, pathData: '<path d="M 210 210 Q 320 250 300 320 Q 260 380 210 270 Z" />', instruction: 'Dessine la petite aile inférieure droite.' },
    { index: 7, pathData: '<circle cx="120" cy="150" r="20" />', instruction: 'Ajoute un motif de cercle sur l\'aile en haut à gauche.' },
    { index: 8, pathData: '<circle cx="280" cy="150" r="20" />', instruction: 'Ajoute un motif de cercle sur l\'aile en haut à droite.' },
    { index: 9, pathData: '<circle cx="150" cy="280" r="15" />', instruction: 'Ajoute un motif de cercle sur l\'aile en bas à gauche.' },
    { index: 10, pathData: '<circle cx="250" cy="280" r="15" />', instruction: 'Enfin, ajoute le dernier motif de cercle sur l\'aile en bas à droite !' },
    { index: 11, pathData: '<rect x="190" y="100" width="20" height="200" rx="10" ry="10" fill="#8D6E63" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps du papillon en marron.' },
    { index: 12, pathData: '<path d="M 190 150 Q 80 50 60 150 Q 40 220 190 210 Z" fill="#BA68C8" style="mix-blend-mode: multiply" />', instruction: 'Colorie la grande aile gauche en violet.' },
    { index: 13, pathData: '<path d="M 210 150 Q 320 50 340 150 Q 360 220 210 210 Z" fill="#BA68C8" style="mix-blend-mode: multiply" />', instruction: 'Colorie la grande aile droite en violet.' }
  ]
};
