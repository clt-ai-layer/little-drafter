import { Template } from '../index';

export const MONTAGNE_TEMPLATE: Template = {
  id: 'scene-montagne',
  name: 'Montagne',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 250 L 150 50 L 250 250" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le grand pic d\'une énorme montagne.' },
    { index: 1, pathData: '<path d="M 120 120 L 50 200 L 80 180 L 100 220" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace une ligne en zigzag pour faire la neige.' },
    { index: 2, pathData: '<path d="M 100 220 L 130 180 L 150 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et un autre petit bout de neige sur la montagne.' },
    { index: 3, pathData: '<path d="M 150 200 L 280 20 L 400 250" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine une deuxième très haute montagne à droite.' },
    { index: 4, pathData: '<path d="M 220 100 L 250 140 L 280 110 L 310 150 L 340 100" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la ligne de neige de la deuxième montagne avec des pointes.' },
    { index: 5, pathData: '<path d="M 0 250 L 400 250" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une longue ligne horizontale pour fermer le fond.' },
    { index: 6, pathData: '<path d="M 180 250 Q 150 320 200 400" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un bord d\'une rivière qui coule.' },
    { index: 7, pathData: '<path d="M 250 250 Q 220 320 270 400" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le deuxième bord de la rivière.' },
    { index: 8, pathData: '<path d="M 160 320 Q 215 280 270 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le bel arc d\'un pont au-dessus de l\'eau.' },
    { index: 9, pathData: '<path d="M 150 300 L 280 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'La ligne droite en haut du pont pour marcher.' },
    { index: 10, pathData: '<path d="M 160 320 L 160 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un piquet pour le pont.' },
    { index: 11, pathData: '<path d="M 215 290 L 215 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le piquet central du pont.' },
    { index: 12, pathData: '<path d="M 270 320 L 270 300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un dernier petit piquet.' },
    { index: 13, pathData: '<circle cx="60" cy="50" r="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un petit soleil qui se cache à gauche.' },
    { index: 14, pathData: '<path d="M 300 60 Q 320 40 340 60 Q 360 40 380 60 Q 390 80 370 90 Q 340 100 310 90 Q 290 80 300 60 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et un beau nuage dodu à droite.' },
    { index: 15, pathData: '<path d="M 0 250 L 150 50 L 250 250 Z" fill="#9e9e9e" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la première montagne en gris pierre.' },
    { index: 16, pathData: '<path d="M 150 200 L 280 20 L 400 250 Z" fill="#757575" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'La deuxième montagne en gris plus foncé.' },
    { index: 17, pathData: '<path d="M 180 250 Q 150 320 200 400 L 270 400 Q 220 320 250 250 Z" fill="#03a9f4" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la grande rivière en bleu clair.' },
    { index: 18, pathData: '<path d="M 0 250 L 180 250 Q 150 320 200 400 L 0 400 Z M 250 250 L 400 250 L 400 400 L 270 400 Q 220 320 250 250 Z" fill="#4caf50" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie les plaines d\'herbe autour en vert !' },
    { index: 19, pathData: '<circle cx="60" cy="50" r="30" fill="#ffc107" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Le soleil en jaune bien chaud.' },
    { index: 20, pathData: '<path d="M 150 300 L 280 300 L 270 320 Q 215 280 160 320 Z" fill="#795548" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et le magnifique petit pont en marron boisé.' }
  ]
};
