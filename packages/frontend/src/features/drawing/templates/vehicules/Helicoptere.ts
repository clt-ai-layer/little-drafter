import { Template } from '../index';

export const HELICOPTERE_TEMPLATE: Template = {
  id: 'helicoptere-1',
  name: 'Hélicoptère',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="200" r="60" />', instruction: 'Dessine un grand cercle pour la cabine de l\'hélicoptère.' },
    { index: 1, pathData: '<path d="M 140 200 L 40 180 L 40 220 Z" />', instruction: 'Dessine un grand triangle allongé pour faire la queue.' },
    { index: 2, pathData: '<circle cx="40" cy="200" r="20" fill="none" stroke-width="2" />', instruction: 'Dessine un cercle fin au bout de la queue.' },
    { index: 3, pathData: '<path d="M 40 180 L 40 220 M 20 200 L 60 200" fill="none" stroke-width="4" />', instruction: 'Dessine une croix dans ce cercle pour l\'hélice arrière.' },
    { index: 4, pathData: '<rect x="190" y="120" width="20" height="20" />', instruction: 'Place un petit carré sur le dessus de la cabine.' },
    { index: 5, pathData: '<path d="M 80 120 L 320 120 L 320 110 L 80 110 Z" />', instruction: 'Dessine une très longue ligne épaisse pour la grande hélice.' },
    { index: 6, pathData: '<path d="M 180 260 L 180 290 M 220 260 L 220 290" fill="none" stroke-width="4" />', instruction: 'Dessine deux petits traits en bas pour tenir les patins.' },
    { index: 7, pathData: '<path d="M 130 290 L 270 290" fill="none" stroke-width="6" />', instruction: 'Dessine une longue ligne horizontale pour le patin d\'atterrissage.' },
    { index: 8, pathData: '<path d="M 200 140 A 60 60 0 0 1 260 200 L 200 200 Z" />', instruction: 'Dessine un quart de cercle à l\'avant pour faire une grande vitre.' },
    { index: 9, pathData: '<circle cx="250" cy="240" r="10" />', instruction: 'Ajoute un petit rond pour le phare.' },
    { index: 10, pathData: '<path d="M 255 245 L 290 290 L 310 270 Z" opacity="0.3" />', instruction: 'Fais un triangle transparent pour la lumière du phare qui éclaire le sol.' },
    { index: 11, pathData: '<circle cx="200" cy="200" r="60" fill="yellow" style="mix-blend-mode: multiply" />', instruction: 'Colorie la cabine en jaune.' },
    { index: 12, pathData: '<path d="M 140 200 L 40 180 L 40 220 Z" fill="yellow" style="mix-blend-mode: multiply" />', instruction: 'Colorie la queue en jaune.' },
    { index: 13, pathData: '<path d="M 200 140 A 60 60 0 0 1 260 200 L 200 200 Z" fill="lightblue" style="mix-blend-mode: multiply" />', instruction: 'Colorie la grande vitre en bleu clair.' }
  ]
};
