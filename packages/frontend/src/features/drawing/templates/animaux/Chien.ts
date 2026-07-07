import { Template } from '../index';

export const CHIEN_TEMPLATE: Template = {
  id: 'chien',
  name: 'Chien',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="140" r="55" fill="none" stroke="#795548" stroke-width="5"/>', instruction: 'Dessine un grand rond pour la tête de ton chien.' },
    { index: 1, pathData: '<ellipse cx="200" cy="170" rx="35" ry="25" fill="white" stroke="#795548" stroke-width="3"/>', instruction: 'Fais un petit ovale pour le museau.' },
    { index: 2, pathData: '<circle cx="200" cy="155" r="8" fill="#333"/>', instruction: 'Dessine sa truffe noire au milieu du museau.' },
    { index: 3, pathData: '<path d="M 200 163 L 200 175 Q 185 185 175 175 M 200 175 Q 215 185 225 175" fill="none" stroke="#333" stroke-width="3"/>', instruction: 'Dessine lui une bouche avec deux belles courbes.' },
    { index: 4, pathData: '<path d="M 195 180 Q 200 195 205 180 Z" fill="#FF8A80"/>', instruction: 'Ajoute une petite langue rose qui dépasse !' },
    { index: 5, pathData: '<circle cx="175" cy="125" r="6" fill="#333"/>', instruction: 'Fais un œil gauche.' },
    { index: 6, pathData: '<circle cx="225" cy="125" r="6" fill="#333"/>', instruction: 'Fais un œil droit.' },
    { index: 7, pathData: '<ellipse cx="140" cy="140" rx="20" ry="40" fill="#8D6E63" stroke="#795548" stroke-width="4" transform="rotate(20 140 140)"/>', instruction: 'Dessine une grande oreille tombante à gauche.' },
    { index: 8, pathData: '<ellipse cx="260" cy="140" rx="20" ry="40" fill="#8D6E63" stroke="#795548" stroke-width="4" transform="rotate(-20 260 140)"/>', instruction: 'Dessine l\'autre oreille tombante à droite.' },
    { index: 9, pathData: '<ellipse cx="200" cy="250" rx="50" ry="60" fill="none" stroke="#795548" stroke-width="5"/>', instruction: 'Trace un ovale en dessous de la tête pour son corps.' },
    { index: 10, pathData: '<path d="M 160 280 L 150 350 L 170 350 Z" fill="none" stroke="#795548" stroke-width="4"/>', instruction: 'Dessine sa première patte à l\'avant gauche.' },
    { index: 11, pathData: '<path d="M 240 280 L 250 350 L 230 350 Z" fill="none" stroke="#795548" stroke-width="4"/>', instruction: 'Dessine sa deuxième patte à l\'avant droite.' },
    { index: 12, pathData: '<path d="M 150 250 Q 120 280 130 330 L 150 330" fill="none" stroke="#795548" stroke-width="4"/>', instruction: 'Ajoute une patte arrière gauche pliée.' },
    { index: 13, pathData: '<path d="M 250 250 Q 280 280 270 330 L 250 330" fill="none" stroke="#795548" stroke-width="4"/>', instruction: 'Ajoute l\'autre patte arrière droite pliée.' },
    { index: 14, pathData: '<path d="M 230 200 Q 280 170 300 150" fill="none" stroke="#795548" stroke-width="6"/>', instruction: 'Finis par sa belle queue dressée en l\'air !' },
    { index: 15, pathData: '<circle cx="200" cy="140" r="55" fill="#D7CCC8" style="mix-blend-mode: multiply" stroke="#795548" stroke-width="5"/>', instruction: 'Colorie la tête en brun clair.' },
    { index: 16, pathData: '<ellipse cx="200" cy="250" rx="50" ry="60" fill="#D7CCC8" style="mix-blend-mode: multiply" stroke="#795548" stroke-width="5"/>', instruction: 'Colorie son corps avec la même couleur.' }
  ]
};
