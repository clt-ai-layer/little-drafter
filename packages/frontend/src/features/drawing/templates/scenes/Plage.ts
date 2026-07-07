import { Template } from '../index';

export const PLAGE_TEMPLATE: Template = {
  id: 'scene-plage',
  name: 'Plage',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 200 L 400 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace la ligne droite de l\'horizon au milieu, pour la mer.' },
    { index: 1, pathData: '<path d="M 0 280 Q 200 250 400 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais une ligne avec des vagues pour le bord du sable.' },
    { index: 2, pathData: '<rect x="150" y="200" width="100" height="80" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le gros bloc du milieu du château de sable.' },
    { index: 3, pathData: '<rect x="120" y="220" width="30" height="60" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute la petite tour à gauche du château.' },
    { index: 4, pathData: '<rect x="250" y="220" width="30" height="60" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute la petite tour à droite du château.' },
    { index: 5, pathData: '<path d="M 150 200 L 150 180 L 170 180 L 170 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un premier créneau sur le toit.' },
    { index: 6, pathData: '<path d="M 190 200 L 190 180 L 210 180 L 210 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un deuxième créneau sur le toit.' },
    { index: 7, pathData: '<path d="M 230 200 L 230 180 L 250 180 L 250 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le dernier créneau du milieu.' },
    { index: 8, pathData: '<path d="M 120 220 L 135 200 L 150 220" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un toit pointu sur la tour gauche.' },
    { index: 9, pathData: '<path d="M 250 220 L 265 200 L 280 220" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un toit pointu sur la tour droite.' },
    { index: 10, pathData: '<path d="M 180 280 A 20 20 0 1 1 220 280" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine la porte toute ronde de ton château.' },
    { index: 11, pathData: '<path d="M 320 260 L 320 120" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace le long piquet d\'un parasol à côté.' },
    { index: 12, pathData: '<path d="M 260 120 A 60 60 0 0 1 380 120 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le haut rond du grand parasol.' },
    { index: 13, pathData: '<path d="M 280 120 Q 300 150 320 120" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais une première rayure dans le parasol.' },
    { index: 14, pathData: '<path d="M 320 120 Q 340 150 360 120" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une deuxième rayure.' },
    { index: 15, pathData: '<path d="M 50 320 L 70 370 L 110 370 L 130 320 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un petit seau pour ramasser du sable.' },
    { index: 16, pathData: '<path d="M 50 320 Q 90 290 130 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais l\'anse (la poignée) du seau en demi-cercle.' },
    { index: 17, pathData: '<circle cx="60" cy="60" r="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace un très grand soleil dans le ciel !' },
    { index: 18, pathData: '<path d="M 0 200 L 400 200 L 400 300 Q 200 250 0 280 Z" fill="#2196f3" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la belle mer avec du bleu.' },
    { index: 19, pathData: '<path d="M 0 280 Q 200 250 400 300 L 400 400 L 0 400 Z" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie tout le sable en jaune doré.' },
    { index: 20, pathData: '<rect x="150" y="200" width="100" height="80" fill="#ffb300" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le château de sable avec un jaune plus foncé.' },
    { index: 21, pathData: '<rect x="120" y="220" width="30" height="60" fill="#ffb300" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la tour gauche du château.' },
    { index: 22, pathData: '<rect x="250" y="220" width="30" height="60" fill="#ffb300" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Puis la tour droite.' },
    { index: 23, pathData: '<path d="M 260 120 A 60 60 0 0 1 380 120 Z" fill="#f44336" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le parasol en rouge vif !' },
    { index: 24, pathData: '<path d="M 50 320 L 70 370 L 110 370 L 130 320 Z" fill="#4caf50" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le seau en vert pomme.' },
    { index: 25, pathData: '<circle cx="60" cy="60" r="30" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et le soleil bien jaune qui brille fort !' }
  ]
};
