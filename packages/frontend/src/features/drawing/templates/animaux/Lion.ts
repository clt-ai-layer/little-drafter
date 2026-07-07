import { Template } from '../index';

export const LION_TEMPLATE: Template = {
  id: 'lion',
  name: 'Lion',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="180" r="50" fill="none" stroke="black" stroke-width="4"/>', instruction: 'Dessine un grand cercle pour le visage du lion.' },
    { index: 1, pathData: '<path d="M 170 140 Q 200 100 230 140 Q 270 180 230 220 Q 200 260 170 220 Q 130 180 170 140 Z" fill="none" stroke="orange" stroke-width="6"/>', instruction: 'Dessine de grands zigzags autour de la tête pour sa belle crinière.' },
    { index: 2, pathData: '<circle cx="180" cy="160" r="5" fill="black"/>', instruction: 'Ajoute un petit point pour l\'œil gauche.' },
    { index: 3, pathData: '<circle cx="220" cy="160" r="5" fill="black"/>', instruction: 'Ajoute un petit point pour l\'œil droit.' },
    { index: 4, pathData: '<path d="M 190 180 L 210 180 L 200 195 Z" fill="black"/>', instruction: 'Dessine un triangle noir pour son nez.' },
    { index: 5, pathData: '<path d="M 200 195 L 200 205 Q 190 215 180 205 M 200 205 Q 210 215 220 205" fill="none" stroke="black" stroke-width="3"/>', instruction: 'Dessine sa bouche avec deux petites courbes sous le nez.' },
    { index: 6, pathData: '<path d="M 160 185 L 140 180 M 160 195 L 140 200 M 240 185 L 260 180 M 240 195 L 260 200" fill="none" stroke="black" stroke-width="2"/>', instruction: 'Ajoute quelques moustaches de chaque côté de son nez.' },
    { index: 7, pathData: '<rect x="160" y="230" width="80" height="100" rx="40" fill="none" stroke="black" stroke-width="4"/>', instruction: 'Dessine un long ovale vertical pour son corps féroce.' },
    { index: 8, pathData: '<path d="M 170 330 L 170 370 Q 180 380 190 370 L 190 330" fill="none" stroke="black" stroke-width="4"/>', instruction: 'Dessine sa première patte avant à gauche.' },
    { index: 9, pathData: '<path d="M 210 330 L 210 370 Q 220 380 230 370 L 230 330" fill="none" stroke="black" stroke-width="4"/>', instruction: 'Dessine sa deuxième patte avant à droite.' },
    { index: 10, pathData: '<path d="M 160 300 L 140 360 L 160 360" fill="none" stroke="black" stroke-width="4"/>', instruction: 'Ajoute une patte arrière gauche pliée.' },
    { index: 11, pathData: '<path d="M 240 300 L 260 360 L 240 360" fill="none" stroke="black" stroke-width="4"/>', instruction: 'Ajoute une patte arrière droite pliée.' },
    { index: 12, pathData: '<path d="M 240 270 Q 280 250 300 280 Q 320 310 300 340" fill="none" stroke="black" stroke-width="4"/>', instruction: 'Dessine une longue queue courbée sur le côté.' },
    { index: 13, pathData: '<circle cx="300" cy="340" r="10" fill="orange"/>', instruction: 'N\'oublie pas le petit pompon orange au bout de sa queue !' },
    { index: 14, pathData: '<path d="M 140 100 Q 160 80 180 100 Q 200 80 220 100 Q 240 80 260 100 Q 280 120 260 140 Q 280 160 260 180 Q 280 200 260 220" fill="none" stroke="orange" stroke-width="6"/>', instruction: 'Finis de dessiner la crinière majestueuse autour de la tête.' },
    { index: 15, pathData: '<circle cx="200" cy="180" r="50" fill="#FFCC80" style="mix-blend-mode: multiply" stroke="black" stroke-width="4"/>', instruction: 'Colorie son visage en orange clair.' },
    { index: 16, pathData: '<rect x="160" y="230" width="80" height="100" rx="40" fill="#FFCC80" style="mix-blend-mode: multiply" stroke="black" stroke-width="4"/>', instruction: 'Colorie son corps féroce.' },
    { index: 17, pathData: '<path d="M 170 140 Q 200 100 230 140 Q 270 180 230 220 Q 200 260 170 220 Q 130 180 170 140 Z" fill="#FFA726" style="mix-blend-mode: multiply" stroke="orange" stroke-width="6"/>', instruction: 'Colorie sa belle crinière en orange.' }
  ]
};
