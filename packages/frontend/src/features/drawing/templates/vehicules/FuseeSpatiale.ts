import { Template } from '../index';

export const FUSEE_SPATIALE_TEMPLATE: Template = {
  id: 'fusee-1',
  name: 'Fusée spatiale',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<path d="M 200 50 Q 260 150 250 250 L 150 250 Q 140 150 200 50 Z" />', instruction: 'Dessine le grand corps pointu de la fusée.' },
    { index: 1, pathData: '<path d="M 150 250 L 90 320 L 150 180 Z" />', instruction: 'Dessine un triangle géant pour l\'aileron gauche.' },
    { index: 2, pathData: '<path d="M 250 250 L 310 320 L 250 180 Z" />', instruction: 'Dessine un triangle géant pour l\'aileron droit.' },
    { index: 3, pathData: '<circle cx="200" cy="150" r="25" />', instruction: 'Dessine un grand cercle pour le hublot des astronautes.' },
    { index: 4, pathData: '<circle cx="200" cy="150" r="15" />', instruction: 'Dessine un cercle plus petit à l\'intérieur pour la vitre.' },
    { index: 5, pathData: '<path d="M 170 250 L 230 250 L 210 280 L 190 280 Z" />', instruction: 'Ajoute la tuyère du réacteur sous la fusée.' },
    { index: 6, pathData: '<path d="M 190 280 Q 200 360 210 280 Z" />', instruction: 'Dessine une grande flamme qui sort du réacteur !' },
    { index: 7, pathData: '<path d="M 195 280 Q 200 320 205 280 Z" fill="yellow" style="mix-blend-mode: multiply" />', instruction: 'Ajoute le cœur jaune et chaud de la flamme.' },
    { index: 8, pathData: '<path d="M 155 180 L 245 180" fill="none" stroke-width="4" />', instruction: 'Trace une ligne pour décorer la fusée.' },
    { index: 9, pathData: '<path d="M 150 230 L 250 230" fill="none" stroke-width="4" />', instruction: 'Trace une deuxième ligne de décoration.' },
    { index: 10, pathData: '<circle cx="80" cy="100" r="4" />', instruction: 'Dessine une première étoile dans l\'espace.' },
    { index: 11, pathData: '<circle cx="320" cy="80" r="5" />', instruction: 'Dessine une deuxième étoile scintillante.' },
    { index: 12, pathData: '<circle cx="290" cy="200" r="3" />', instruction: 'Dessine une petite étoile pour finir le voyage spatial !' },
    { index: 13, pathData: '<path d="M 200 50 Q 260 150 250 250 L 150 250 Q 140 150 200 50 Z" fill="silver" style="mix-blend-mode: multiply" />', instruction: 'Colorie la fusée en gris argenté.' },
    { index: 14, pathData: '<path d="M 150 250 L 90 320 L 150 180 Z" fill="red" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'aileron gauche en rouge.' },
    { index: 15, pathData: '<path d="M 250 250 L 310 320 L 250 180 Z" fill="red" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'aileron droit en rouge.' }
  ]
};
