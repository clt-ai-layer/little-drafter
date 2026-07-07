import { Template } from '../index';

export const HIPPOPOTAME_TEMPLATE: Template = {
  id: 'hippopotame',
  name: 'Hippopotame',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<rect x="140" y="140" width="120" height="80" rx="30" fill="none" stroke="#78909C" stroke-width="6"/>', instruction: 'Dessine un gros rectangle avec les bords arrondis pour l\'énorme museau.' },
    { index: 1, pathData: '<circle cx="170" cy="170" r="10" fill="#333"/>', instruction: 'Fais un premier trou noir pour sa grande narine gauche.' },
    { index: 2, pathData: '<circle cx="230" cy="170" r="10" fill="#333"/>', instruction: 'Fais le deuxième trou noir pour sa grande narine droite.' },
    { index: 3, pathData: '<path d="M 150 145 Q 200 90 250 145" fill="none" stroke="#78909C" stroke-width="5"/>', instruction: 'Dessine le haut de sa tête comme un pont au-dessus de son nez.' },
    { index: 4, pathData: '<path d="M 160 105 Q 150 80 140 100 Z" fill="none" stroke="#78909C" stroke-width="4"/>', instruction: 'Fais une petite oreille toute ronde à gauche.' },
    { index: 5, pathData: '<path d="M 240 105 Q 250 80 260 100 Z" fill="none" stroke="#78909C" stroke-width="4"/>', instruction: 'Fais une autre petite oreille toute ronde à droite.' },
    { index: 6, pathData: '<circle cx="180" cy="125" r="4" fill="#333"/>', instruction: 'Ajoute un tout petit œil.' },
    { index: 7, pathData: '<circle cx="220" cy="125" r="4" fill="#333"/>', instruction: 'Ajoute l\'autre tout petit œil.' },
    { index: 8, pathData: '<path d="M 160 215 L 160 230 L 175 230 L 175 218 M 225 218 L 225 230 L 240 230 L 240 215" fill="white" stroke="#78909C" stroke-width="3"/>', instruction: 'Dessine lui deux grandes dents carrées qui dépassent du museau !' },
    { index: 9, pathData: '<rect x="100" y="220" width="200" height="110" rx="55" fill="none" stroke="#78909C" stroke-width="6"/>', instruction: 'Fais lui un gigantesque corps rond sous la tête.' },
    { index: 10, pathData: '<rect x="130" y="320" width="30" height="40" rx="5" fill="none" stroke="#78909C" stroke-width="5"/>', instruction: 'Une grosse patte courte devant à gauche.' },
    { index: 11, pathData: '<rect x="240" y="320" width="30" height="40" rx="5" fill="none" stroke="#78909C" stroke-width="5"/>', instruction: 'Une grosse patte courte devant à droite.' },
    { index: 12, pathData: '<rect x="100" y="300" width="30" height="40" rx="5" fill="none" stroke="#78909C" stroke-width="5"/>', instruction: 'Une patte arrière à l\'arrière plan à gauche.' },
    { index: 13, pathData: '<rect x="270" y="300" width="30" height="40" rx="5" fill="none" stroke="#78909C" stroke-width="5"/>', instruction: 'Une autre patte arrière à droite.' },
    { index: 14, pathData: '<path d="M 300 260 Q 320 270 310 290" fill="none" stroke="#78909C" stroke-width="4"/>', instruction: 'Et une toute petite queue pour finir notre gros hippopotame rigolo !' },
    { index: 15, pathData: '<rect x="140" y="140" width="120" height="80" rx="30" fill="#B0BEC5" style="mix-blend-mode: multiply" stroke="#78909C" stroke-width="6"/>', instruction: 'Colorie le gros museau en gris bleuté.' },
    { index: 16, pathData: '<rect x="100" y="220" width="200" height="110" rx="55" fill="#B0BEC5" style="mix-blend-mode: multiply" stroke="#78909C" stroke-width="6"/>', instruction: 'Colorie son gigantesque corps avec la même couleur.' }
  ]
};
