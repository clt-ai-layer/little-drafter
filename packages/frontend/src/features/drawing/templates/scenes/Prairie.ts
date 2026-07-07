import { Template } from '../index';

export const PRAIRIE_TEMPLATE: Template = {
  id: 'scene-prairie',
  name: 'Prairie',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 250 Q 100 150 250 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace une grande colline vallonnée à gauche.' },
    { index: 1, pathData: '<path d="M 150 250 Q 300 200 400 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace une autre colline qui descend vers la droite.' },
    { index: 2, pathData: '<circle cx="80" cy="80" r="40" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un gros soleil rond dans le ciel.' },
    { index: 3, pathData: '<path d="M 80 20 L 80 35" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace un rayon de soleil vers le haut.' },
    { index: 4, pathData: '<path d="M 80 125 L 80 140" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un rayon vers le bas.' },
    { index: 5, pathData: '<path d="M 20 80 L 35 80" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un rayon vers la gauche.' },
    { index: 6, pathData: '<path d="M 125 80 L 140 80" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et un rayon vers la droite.' },
    { index: 7, pathData: '<path d="M 37 37 L 48 48" fill="none" stroke="black" stroke-width="4" />', instruction: 'Quelques petits rayons dans les coins.' },
    { index: 8, pathData: '<path d="M 123 37 L 112 48" fill="none" stroke="black" stroke-width="4" />', instruction: 'Encore un petit rayon.' },
    { index: 9, pathData: '<path d="M 37 123 L 48 112" fill="none" stroke="black" stroke-width="4" />', instruction: 'On ajoute un rayon.' },
    { index: 10, pathData: '<path d="M 123 123 L 112 112" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le dernier petit rayon !' },
    { index: 11, pathData: '<path d="M 150 350 L 150 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine la tige toute droite d\'une fleur.' },
    { index: 12, pathData: '<circle cx="150" cy="290" r="10" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais le cœur rond de la fleur.' },
    { index: 13, pathData: '<path d="M 150 280 A 10 10 0 1 1 150 260 A 10 10 0 1 1 150 280" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un pétale vers le haut.' },
    { index: 14, pathData: '<path d="M 160 290 A 10 10 0 1 1 180 290 A 10 10 0 1 1 160 290" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un pétale à droite.' },
    { index: 15, pathData: '<path d="M 150 300 A 10 10 0 1 1 150 320 A 10 10 0 1 1 150 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un pétale vers le bas.' },
    { index: 16, pathData: '<path d="M 140 290 A 10 10 0 1 1 120 290 A 10 10 0 1 1 140 290" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et le pétale de gauche.' },
    { index: 17, pathData: '<path d="M 300 350 L 300 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine une autre petite tige à droite.' },
    { index: 18, pathData: '<circle cx="300" cy="310" r="10" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le cœur de la deuxième fleur.' },
    { index: 19, pathData: '<path d="M 285 300 Q 300 280 315 300 Q 325 320 300 325 Q 275 320 285 300 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine plusieurs pétales d\'un coup, comme un nuage.' },
    { index: 20, pathData: '<path d="M 0 250 Q 100 150 250 300 L 250 400 L 0 400 Z" fill="#8bc34a" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la première colline en vert vif.' },
    { index: 21, pathData: '<path d="M 150 250 Q 300 200 400 350 L 400 400 L 150 400 Z" fill="#4caf50" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la deuxième colline en vert foncé.' },
    { index: 22, pathData: '<circle cx="80" cy="80" r="40" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le beau soleil en jaune.' },
    { index: 23, pathData: '<circle cx="150" cy="290" r="10" fill="#ffc107" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Mets du jaune d\'or au centre des fleurs.' },
    { index: 24, pathData: '<circle cx="300" cy="310" r="10" fill="#ffc107" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Du jaune d\'or aussi pour la deuxième fleur.' },
    { index: 25, pathData: '<circle cx="150" cy="270" r="25" fill="#e91e63" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie les pétales de la première fleur en rose !' },
    { index: 26, pathData: '<path d="M 285 300 Q 300 280 315 300 Q 325 320 300 325 Q 275 320 285 300 Z" fill="#9c27b0" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et les pétales de la deuxième fleur en violet.' }
  ]
};
