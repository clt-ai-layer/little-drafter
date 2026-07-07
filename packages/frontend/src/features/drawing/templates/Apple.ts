import { Template } from './index';

export const APPLE_TEMPLATE: Template = {
  id: 'apple-1',
  name: 'Pomme Rouge',
  category: 'Nature',
  steps: [
    { index: 0, pathData: '<path d="M 200 120 C 120 80, 80 200, 200 320" />', instruction: 'Dessine la moitié gauche de la pomme.' },
    { index: 1, pathData: '<path d="M 200 120 C 280 80, 320 200, 200 320" />', instruction: 'Dessine la moitié droite de la pomme pour la fermer.' },
    { index: 2, pathData: '<path d="M 200 120 Q 210 80 230 70" fill="none" />', instruction: 'Dessine une petite tige courbée en haut.' },
    { index: 3, pathData: '<path d="M 220 90 Q 260 60 280 90 Q 260 120 220 90 Z" />', instruction: 'Ajoute une jolie feuille pointue accrochée à la tige.' },
    { index: 4, pathData: '<path d="M 130 180 Q 120 230 150 260" fill="none" />', instruction: 'Dessine un trait brillant sur le côté pour qu\'elle paraisse lisse.' },
    { index: 5, pathData: '<circle cx="280" cy="240" r="15" />', instruction: 'Oh oh, dessine un trou rond sur le côté droit...' },
    { index: 6, pathData: '<path d="M 280 240 Q 320 200 340 250" fill="none" />', instruction: 'Dessine le corps d\'un petit ver qui sort du trou !' },
    { index: 7, pathData: '<circle cx="335" cy="245" r="2" fill="#333" />', instruction: 'Ajoute un tout petit œil pour le ver.' },
    { index: 8, pathData: '<circle cx="345" cy="245" r="2" fill="#333" />', instruction: 'Ajoute le deuxième œil pour le ver.' },
    { index: 9, pathData: '<circle cx="180" cy="220" r="4" fill="#333" />', instruction: 'Dessine un petit pépin noir au milieu de la pomme.' },
    { index: 10, pathData: '<circle cx="220" cy="220" r="4" fill="#333" />', instruction: 'Dessine un deuxième pépin à côté.' },
    { index: 11, pathData: '<circle cx="200" cy="250" r="4" fill="#333" />', instruction: 'Enfin, dessine un troisième pépin en dessous !' },
    { index: 12, pathData: '<path d="M 200 120 C 120 80, 80 200, 200 320" fill="#FF4B4B" style="mix-blend-mode: multiply" />', instruction: 'Colorie la moitié gauche de la pomme en rouge vif.' },
    { index: 13, pathData: '<path d="M 200 120 C 280 80, 320 200, 200 320" fill="#FF4B4B" style="mix-blend-mode: multiply" />', instruction: 'Colorie la moitié droite de la pomme en rouge.' },
    { index: 14, pathData: '<path d="M 220 90 Q 260 60 280 90 Q 260 120 220 90 Z" fill="#4CAF50" style="mix-blend-mode: multiply" />', instruction: 'Colorie la belle feuille en vert.' }
  ]
};
