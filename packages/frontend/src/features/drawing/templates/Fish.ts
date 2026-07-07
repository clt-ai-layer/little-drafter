import { Template } from './index';

export const FISH_TEMPLATE: Template = {
  id: 'fish-1',
  name: 'Petit Poisson',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<path d="M 100 200 Q 200 100 300 200 Q 200 300 100 200 Z" />', instruction: 'Dessine la forme ovale du corps du poisson.' },
    { index: 1, pathData: '<path d="M 100 200 L 40 140 L 40 260 Z" />', instruction: 'Dessine un triangle à gauche pour faire la nageoire de la queue.' },
    { index: 2, pathData: '<circle cx="260" cy="180" r="10" />', instruction: 'Dessine un cercle pour l\'œil.' },
    { index: 3, pathData: '<circle cx="265" cy="180" r="4" fill="#333" style="mix-blend-mode: multiply" />', instruction: 'Ajoute un petit point noir dans l\'œil.' },
    { index: 4, pathData: '<path d="M 250 230 Q 270 240 290 210" fill="none" />', instruction: 'Dessine un joli sourire courbé.' },
    { index: 5, pathData: '<path d="M 170 145 Q 200 100 230 145 Q 200 130 170 145 Z" />', instruction: 'Dessine la nageoire sur le dessus du poisson.' },
    { index: 6, pathData: '<path d="M 170 255 Q 200 300 230 255 Q 200 270 170 255 Z" />', instruction: 'Dessine la nageoire en dessous du poisson.' },
    { index: 7, pathData: '<path d="M 180 180 Q 190 190 180 200 M 180 200 Q 190 210 180 220" fill="none" />', instruction: 'Dessine quelques petites écailles sur le corps.' },
    { index: 8, pathData: '<path d="M 210 170 Q 220 185 210 200 M 210 200 Q 220 215 210 230" fill="none" />', instruction: 'Dessine encore quelques écailles pour faire joli.' },
    { index: 9, pathData: '<circle cx="330" cy="160" r="8" fill="none" />', instruction: 'Dessine une petite bulle d\'air.' },
    { index: 10, pathData: '<circle cx="350" cy="130" r="12" fill="none" />', instruction: 'Dessine une bulle d\'air moyenne.' },
    { index: 11, pathData: '<circle cx="360" cy="90" r="16" fill="none" />', instruction: 'Enfin, dessine une grande bulle d\'air qui monte vers la surface !' },
    { index: 12, pathData: '<path d="M 100 200 Q 200 100 300 200 Q 200 300 100 200 Z" fill="#FFCA28" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps du poisson en jaune.' },
    { index: 13, pathData: '<path d="M 100 200 L 40 140 L 40 260 Z" fill="#FF9800" style="mix-blend-mode: multiply" />', instruction: 'Colorie la queue en orange.' },
    { index: 14, pathData: '<path d="M 170 145 Q 200 100 230 145 Q 200 130 170 145 Z" fill="#FF9800" style="mix-blend-mode: multiply" />', instruction: 'Colorie la nageoire supérieure en orange.' }
  ]
};
