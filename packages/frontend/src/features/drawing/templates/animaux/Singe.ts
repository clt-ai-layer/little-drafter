import { Template } from '../index';

export const SINGE_TEMPLATE: Template = {
  id: 'singe',
  name: 'Singe',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="120" r="50" fill="none" stroke="#8D6E63" stroke-width="5"/>', instruction: 'Dessine un grand cercle pour la tête de notre petit singe.' },
    { index: 1, pathData: '<ellipse cx="200" cy="135" rx="35" ry="25" fill="#FFE0B2" stroke="#8D6E63" stroke-width="3"/>', instruction: 'Fais un ovale clair au milieu pour le bas de son visage.' },
    { index: 2, pathData: '<path d="M 180 90 Q 200 110 220 90 Q 240 120 220 130 Q 180 130 180 90" fill="#FFE0B2" stroke="#8D6E63" stroke-width="3"/>', instruction: 'Dessine la forme autour de ses yeux, comme un petit masque clair.' },
    { index: 3, pathData: '<circle cx="150" cy="120" r="15" fill="none" stroke="#8D6E63" stroke-width="5"/>', instruction: 'Ajoute une petite oreille ronde à gauche.' },
    { index: 4, pathData: '<circle cx="250" cy="120" r="15" fill="none" stroke="#8D6E63" stroke-width="5"/>', instruction: 'Ajoute une petite oreille ronde à droite.' },
    { index: 5, pathData: '<circle cx="185" cy="105" r="5" fill="#333"/>', instruction: 'Dessine un œil gauche tout noir.' },
    { index: 6, pathData: '<circle cx="215" cy="105" r="5" fill="#333"/>', instruction: 'Dessine un œil droit tout noir.' },
    { index: 7, pathData: '<circle cx="200" cy="130" r="3" fill="#333"/>', instruction: 'Fais un tout petit nez au centre.' },
    { index: 8, pathData: '<path d="M 185 145 Q 200 160 215 145" fill="none" stroke="#333" stroke-width="3"/>', instruction: 'Dessine lui un grand sourire malicieux.' },
    { index: 9, pathData: '<ellipse cx="200" cy="240" rx="45" ry="60" fill="none" stroke="#8D6E63" stroke-width="5"/>', instruction: 'Trace un bel ovale en dessous pour son corps.' },
    { index: 10, pathData: '<path d="M 160 200 Q 100 220 120 280" fill="none" stroke="#8D6E63" stroke-width="6"/>', instruction: 'Dessine son long bras gauche.' },
    { index: 11, pathData: '<path d="M 240 200 Q 300 220 280 280" fill="none" stroke="#8D6E63" stroke-width="6"/>', instruction: 'Dessine son long bras droit.' },
    { index: 12, pathData: '<path d="M 175 295 Q 160 350 140 370" fill="none" stroke="#8D6E63" stroke-width="6"/>', instruction: 'Ajoute une petite patte arrière gauche.' },
    { index: 13, pathData: '<path d="M 225 295 Q 240 350 260 370" fill="none" stroke="#8D6E63" stroke-width="6"/>', instruction: 'Ajoute une petite patte arrière droite.' },
    { index: 14, pathData: '<path d="M 245 260 Q 320 250 300 190 Q 280 160 320 130" fill="none" stroke="#8D6E63" stroke-width="5"/>', instruction: 'Termine avec une très longue queue bouclée pour qu\'il puisse s\'accrocher !' },
    { index: 15, pathData: '<circle cx="200" cy="120" r="50" fill="#A1887F" style="mix-blend-mode: multiply" stroke="#8D6E63" stroke-width="5"/>', instruction: 'Colorie sa tête en brun.' },
    { index: 16, pathData: '<ellipse cx="200" cy="240" rx="45" ry="60" fill="#A1887F" style="mix-blend-mode: multiply" stroke="#8D6E63" stroke-width="5"/>', instruction: 'Colorie son corps avec le même brun.' }
  ]
};
