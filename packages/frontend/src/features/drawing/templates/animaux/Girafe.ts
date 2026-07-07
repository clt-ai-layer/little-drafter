import { Template } from '../index';

export const GIRAFE_TEMPLATE: Template = {
  id: 'girafe',
  name: 'Girafe',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<ellipse cx="200" cy="60" rx="25" ry="40" fill="none" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Dessine une petite tête ovale en haut de la page.' },
    { index: 1, pathData: '<g><path d="M 190 20 L 190 10 M 210 20 L 210 10" stroke="#FBC02D" stroke-width="4"/> <circle cx="190" cy="10" r="4" fill="#FBC02D"/> <circle cx="210" cy="10" r="4" fill="#FBC02D"/></g>', instruction: 'Ajoute deux toutes petites cornes sur sa tête avec des boules au bout.' },
    { index: 2, pathData: '<path d="M 175 40 Q 150 40 160 60 Z M 225 40 Q 250 40 240 60 Z" fill="none" stroke="#FBC02D" stroke-width="3"/>', instruction: 'Fais de petites oreilles de chaque côté.' },
    { index: 3, pathData: '<g><circle cx="190" cy="50" r="3" fill="#333"/> <circle cx="210" cy="50" r="3" fill="#333"/></g>', instruction: 'Dessine lui des yeux.' },
    { index: 4, pathData: '<ellipse cx="200" cy="85" rx="15" ry="10" fill="#FFE082"/>', instruction: 'Ajoute son museau un peu plus clair.' },
    { index: 5, pathData: '<path d="M 185 98 L 180 230 M 215 98 L 220 200" stroke="#FBC02D" stroke-width="5" fill="none"/>', instruction: 'Trace deux longs traits vers le bas pour son cou immense !' },
    { index: 6, pathData: '<ellipse cx="240" cy="240" rx="50" ry="40" fill="none" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Dessine un corps ovale incliné à la base du cou.' },
    { index: 7, pathData: '<path d="M 185 130 Q 190 140 200 135 Z M 190 170 Q 205 180 210 165 Z" fill="#F57F17"/>', instruction: 'La girafe a de belles taches rousses sur son cou !' },
    { index: 8, pathData: '<path d="M 230 220 Q 250 210 245 235 Z M 260 250 Q 275 260 270 240 Z M 210 240 Q 220 260 230 250 Z" fill="#F57F17"/>', instruction: 'Ajoute d\'autres taches sur son corps.' },
    { index: 9, pathData: '<path d="M 210 270 L 210 360" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Dessine une patte avant très très longue et fine.' },
    { index: 10, pathData: '<path d="M 240 280 L 240 360" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Dessine l\'autre patte avant très longue.' },
    { index: 11, pathData: '<path d="M 270 270 L 270 360" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Ajoute une patte arrière.' },
    { index: 12, pathData: '<path d="M 290 260 L 290 360" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Ajoute la deuxième patte arrière.' },
    { index: 13, pathData: '<path d="M 205 315 L 215 315 M 235 320 L 245 320 M 265 315 L 275 315 M 285 310 L 295 310" stroke="#333" stroke-width="2"/>', instruction: 'Marque les genoux avec de petits traits.' },
    { index: 14, pathData: '<path d="M 285 220 Q 310 240 300 280" stroke="#FBC02D" stroke-width="3" fill="none"/>', instruction: 'Termine en dessinant sa petite queue en arrière avec des poils au bout.' },
    { index: 15, pathData: '<ellipse cx="200" cy="60" rx="25" ry="40" fill="#FFF59D" style="mix-blend-mode: multiply" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Colorie sa tête en jaune.' },
    { index: 16, pathData: '<ellipse cx="240" cy="240" rx="50" ry="40" fill="#FFF59D" style="mix-blend-mode: multiply" stroke="#FBC02D" stroke-width="5"/>', instruction: 'Colorie son corps en jaune.' }
  ]
};
