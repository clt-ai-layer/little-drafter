import { Template } from '../index';

export const CIGOGNE_TEMPLATE: Template = {
  id: 'cigogne-rose',
  name: 'Cigogne Rose',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="280" cy="120" r="25" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un rond pour la tête de la cigogne en haut à droite.' },
    { index: 1, pathData: '<path d="M 302 115 Q 360 120 380 140 Q 340 140 295 130 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute un très long bec pointu vers la droite.' },
    { index: 2, pathData: '<circle cx="290" cy="110" r="4" fill="#333" stroke="none" />', instruction: 'Fais un petit point pour son œil.' },
    { index: 3, pathData: '<path d="M 265 135 Q 230 190 180 210 L 160 190 Q 210 160 258 110 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace son grand cou courbé qui descend.' },
    { index: 4, pathData: '<path d="M 170 200 Q 230 180 210 260 Q 150 290 90 250 Q 80 200 170 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine son corps ovale.' },
    { index: 5, pathData: '<path d="M 90 250 Q 50 260 40 280 Q 70 270 100 260 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute de petites plumes pour sa queue à gauche.' },
    { index: 6, pathData: '<path d="M 120 210 Q 180 220 200 250 Q 150 260 100 230 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine son aile pliée sur son dos.' },
    { index: 7, pathData: '<path d="M 140 270 L 140 370" fill="none" stroke="black" stroke-width="6" stroke-linecap="round" />', instruction: 'Trace une grande patte toute droite vers le bas.' },
    { index: 8, pathData: '<path d="M 170 270 L 170 320 L 190 370" fill="none" stroke="black" stroke-width="6" stroke-linecap="round" />', instruction: 'Trace l\'autre patte un peu pliée.' },
    
    // Coloring steps with mix-blend-mode: multiply
    { index: 9, pathData: '<circle cx="280" cy="120" r="25" fill="#F48FB1" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la tête de notre cigogne en rose !' },
    { index: 10, pathData: '<path d="M 265 135 Q 230 190 180 210 L 160 190 Q 210 160 258 110 Z" fill="#F48FB1" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie son long cou en rose.' },
    { index: 11, pathData: '<path d="M 170 200 Q 230 180 210 260 Q 150 290 90 250 Q 80 200 170 200 Z" fill="#F48FB1" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie son corps tout rond en rose.' },
    { index: 12, pathData: '<path d="M 90 250 Q 50 260 40 280 Q 70 270 100 260 Z" fill="#F48FB1" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie sa petite queue en rose.' },
    { index: 13, pathData: '<path d="M 120 210 Q 180 220 200 250 Q 150 260 100 230 Z" fill="#F06292" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie son aile avec un rose un peu plus foncé.' },
    { index: 14, pathData: '<path d="M 302 115 Q 360 120 380 140 Q 340 140 295 130 Z" fill="#FF9800" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie son grand bec en orange vif.' },
    { index: 15, pathData: '<path d="M 140 270 L 140 370" fill="none" stroke="#FF9800" stroke-width="6" stroke-linecap="round" style="mix-blend-mode: multiply" />', instruction: 'Colorie la première patte en orange.' },
    { index: 16, pathData: '<path d="M 170 270 L 170 320 L 190 370" fill="none" stroke="#FF9800" stroke-width="6" stroke-linecap="round" style="mix-blend-mode: multiply" />', instruction: 'Et enfin, colorie l\'autre patte. Bravo !' }
  ]
};
