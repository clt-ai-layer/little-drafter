import { Template } from './index';

export const BIRD_TEMPLATE: Template = {
  id: 'bird-1',
  name: 'Petit Oiseau',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<path d="M 150 200 Q 150 150 200 150 Q 280 150 280 220 Q 280 280 200 280 Q 150 280 150 200 Z" />', instruction: 'Dessine un ovale pour le corps de l\'oiseau.' },
    { index: 1, pathData: '<circle cx="300" cy="170" r="35" />', instruction: 'Dessine un cercle pour sa tête à droite.' },
    { index: 2, pathData: '<path d="M 330 160 L 370 170 L 330 180 Z" />', instruction: 'Dessine un triangle pointu pour son bec.' },
    { index: 3, pathData: '<circle cx="310" cy="160" r="5" fill="#333" />', instruction: 'Ajoute un petit point noir pour son œil.' },
    { index: 4, pathData: '<path d="M 230 190 Q 280 240 230 260 Q 180 240 230 190 Z" />', instruction: 'Dessine une aile en forme de goutte d\'eau sur son corps.' },
    { index: 5, pathData: '<path d="M 150 200 L 80 170 L 120 210 L 70 230 L 130 240 Z" />', instruction: 'Dessine des plumes en zigzag pour la queue à gauche.' },
    { index: 6, pathData: '<path d="M 180 275 L 180 320 L 160 330" fill="none" />', instruction: 'Dessine une patte avec des petits doigts à gauche.' },
    { index: 7, pathData: '<path d="M 230 275 L 230 320 L 250 330" fill="none" />', instruction: 'Dessine l\'autre patte à droite.' },
    { index: 8, pathData: '<path d="M 100 320 L 380 320" fill="none" />', instruction: 'Enfin, dessine une longue branche sous ses pattes !' },
    { index: 9, pathData: '<path d="M 150 200 Q 150 150 200 150 Q 280 150 280 220 Q 280 280 200 280 Q 150 280 150 200 Z" fill="#64B5F6" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps de l\'oiseau en bleu clair.' },
    { index: 10, pathData: '<circle cx="300" cy="170" r="35" fill="#64B5F6" style="mix-blend-mode: multiply" />', instruction: 'Colorie la tête de l\'oiseau en bleu.' },
    { index: 11, pathData: '<path d="M 330 160 L 370 170 L 330 180 Z" fill="#FFB74D" style="mix-blend-mode: multiply" />', instruction: 'Colorie son petit bec en orange.' },
    { index: 12, pathData: '<path d="M 230 190 Q 280 240 230 260 Q 180 240 230 190 Z" fill="#2196F3" style="mix-blend-mode: multiply" />', instruction: 'Colorie son aile en bleu plus foncé.' }
  ]
};
