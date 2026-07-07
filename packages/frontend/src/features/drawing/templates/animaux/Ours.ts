import { Template } from '../index';

export const OURS_TEMPLATE: Template = {
  id: 'ours',
  name: 'Ours',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="120" r="60" fill="none" stroke="#5D4037" stroke-width="6"/>', instruction: 'Dessine un grand cercle pour la tête de l\'ours.' },
    { index: 1, pathData: '<circle cx="145" cy="75" r="20" fill="none" stroke="#5D4037" stroke-width="5"/>', instruction: 'Ajoute lui une belle oreille ronde à gauche.' },
    { index: 2, pathData: '<circle cx="255" cy="75" r="20" fill="none" stroke="#5D4037" stroke-width="5"/>', instruction: 'Ajoute lui une autre oreille ronde à droite.' },
    { index: 3, pathData: '<ellipse cx="200" cy="140" rx="30" ry="20" fill="#D7CCC8" stroke="#5D4037" stroke-width="3"/>', instruction: 'Dessine un ovale clair pour son nez et sa bouche.' },
    { index: 4, pathData: '<path d="M 190 130 L 210 130 L 200 145 Z" fill="#3E2723"/>', instruction: 'Dessine un triangle noir pour son petit nez au milieu du museau.' },
    { index: 5, pathData: '<circle cx="175" cy="105" r="5" fill="#3E2723"/>', instruction: 'Fais un œil à gauche.' },
    { index: 6, pathData: '<circle cx="225" cy="105" r="5" fill="#3E2723"/>', instruction: 'Fais un œil à droite.' },
    { index: 7, pathData: '<path d="M 190 150 Q 200 160 210 150" fill="none" stroke="#3E2723" stroke-width="3"/>', instruction: 'Fais lui un petit sourire.' },
    { index: 8, pathData: '<circle cx="200" cy="260" r="80" fill="none" stroke="#5D4037" stroke-width="6"/>', instruction: 'Dessine un énorme cercle sous sa tête pour son gros ventre gourmand !' },
    { index: 9, pathData: '<circle cx="200" cy="260" r="50" fill="#D7CCC8"/>', instruction: 'Colorie le milieu de son ventre avec une couleur plus claire.' },
    { index: 10, pathData: '<path d="M 130 200 Q 90 250 110 290 Z" fill="none" stroke="#5D4037" stroke-width="5"/>', instruction: 'Ajoute lui un gros bras gauche.' },
    { index: 11, pathData: '<path d="M 270 200 Q 310 250 290 290 Z" fill="none" stroke="#5D4037" stroke-width="5"/>', instruction: 'Ajoute lui un gros bras droit.' },
    { index: 12, pathData: '<ellipse cx="160" cy="340" rx="25" ry="15" fill="none" stroke="#5D4037" stroke-width="5"/>', instruction: 'Dessine une patte arrière gauche ronde.' },
    { index: 13, pathData: '<ellipse cx="240" cy="340" rx="25" ry="15" fill="none" stroke="#5D4037" stroke-width="5"/>', instruction: 'Dessine la deuxième patte arrière droite ronde.' },
    { index: 14, pathData: '<path d="M 275 270 Q 300 290 280 310 Z" fill="none" stroke="#5D4037" stroke-width="4"/>', instruction: 'Termine avec un tout petit bout de queue ronde sur le côté !' },
    { index: 15, pathData: '<circle cx="200" cy="120" r="60" fill="#795548" style="mix-blend-mode: multiply" stroke="#5D4037" stroke-width="6"/>', instruction: 'Colorie sa tête en marron.' },
    { index: 16, pathData: '<circle cx="200" cy="260" r="80" fill="#795548" style="mix-blend-mode: multiply" stroke="#5D4037" stroke-width="6"/>', instruction: 'Colorie son énorme ventre en marron.' }
  ]
};
