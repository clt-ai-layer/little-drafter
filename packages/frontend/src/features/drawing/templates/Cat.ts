import { Template } from './index';

export const CAT_TEMPLATE: Template = {
  id: 'cat-1',
  name: 'Chat Mignon',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="150" r="60" />', instruction: 'Dessine un grand cercle rond pour la tête du chat.' },
    { index: 1, pathData: '<path d="M 157 107 L 140 50 L 180 93 Z" />', instruction: 'Dessine un triangle pointu à gauche pour la première oreille.' },
    { index: 2, pathData: '<path d="M 243 107 L 260 50 L 220 93 Z" />', instruction: 'Dessine un autre triangle pointu à droite pour la deuxième oreille.' },
    { index: 3, pathData: '<circle cx="175" cy="140" r="8" fill="#333" />', instruction: 'Ajoute un petit point pour l\'œil gauche.' },
    { index: 4, pathData: '<circle cx="225" cy="140" r="8" fill="#333" />', instruction: 'Ajoute un petit point pour l\'œil droit.' },
    { index: 5, pathData: '<circle cx="200" cy="160" r="6" fill="#333" />', instruction: 'Dessine un tout petit nez au milieu !' },
    { index: 6, pathData: '<path d="M 185 175 Q 200 185 200 170 Q 200 185 215 175" />', instruction: 'Dessine une bouche en W courbée pour un chat souriant.' },
    { index: 7, pathData: '<path d="M 160 150 L 100 140 M 160 160 L 100 160 M 160 170 L 100 180" />', instruction: 'Dessine de longues moustaches à gauche.' },
    { index: 8, pathData: '<path d="M 240 150 L 300 140 M 240 160 L 300 160 M 240 170 L 300 180" />', instruction: 'Dessine les autres moustaches à droite.' },
    { index: 9, pathData: '<path d="M 160 200 Q 120 280 150 340 L 250 340 Q 280 280 240 200 Z" />', instruction: 'Dessine le corps du chat en dessous de la tête.' },
    { index: 10, pathData: '<path d="M 250 300 Q 350 350 320 250 Q 300 180 340 150" fill="none" />', instruction: 'Dessine une longue ligne bouclée pour la queue.' },
    { index: 11, pathData: '<path d="M 170 340 L 170 380 M 190 340 L 190 380 M 210 340 L 210 380 M 230 340 L 230 380" />', instruction: 'Enfin, ajoute quatre lignes en bas pour les petites pattes !' },
    { index: 12, pathData: '<circle cx="200" cy="150" r="60" fill="#FFB74D" style="mix-blend-mode: multiply" />', instruction: 'Colorie la tête du chat en orange.' },
    { index: 13, pathData: '<path d="M 157 107 L 140 50 L 180 93 Z" fill="#FFB74D" style="mix-blend-mode: multiply" />', instruction: 'Colorie la première oreille en orange.' },
    { index: 14, pathData: '<path d="M 243 107 L 260 50 L 220 93 Z" fill="#FFB74D" style="mix-blend-mode: multiply" />', instruction: 'Colorie la deuxième oreille en orange.' },
    { index: 15, pathData: '<path d="M 160 200 Q 120 280 150 340 L 250 340 Q 280 280 240 200 Z" fill="#FFB74D" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps du chat en orange.' }
  ]
};
