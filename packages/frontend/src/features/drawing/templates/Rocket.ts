import { Template } from './index';

export const ROCKET_TEMPLATE: Template = {
  id: 'rocket-1',
  name: 'Fusée Spatiale',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<path d="M 200 50 Q 250 100 250 250 L 150 250 Q 150 100 200 50 Z" />', instruction: 'Dessine le corps de la fusée avec un bout très pointu !' },
    { index: 1, pathData: '<circle cx="200" cy="150" r="25" />', instruction: 'Dessine un grand cercle pour la fenêtre de l\'astronaute.' },
    { index: 2, pathData: '<circle cx="200" cy="150" r="15" />', instruction: 'Dessine un plus petit cercle à l\'intérieur pour faire la vitre.' },
    { index: 3, pathData: '<path d="M 150 200 L 100 280 L 150 250 Z" />', instruction: 'Dessine un aileron pointu sur le côté gauche.' },
    { index: 4, pathData: '<path d="M 250 200 L 300 280 L 250 250 Z" />', instruction: 'Dessine un aileron pointu sur le côté droit.' },
    { index: 5, pathData: '<path d="M 190 250 L 200 290 L 210 250 Z" />', instruction: 'Dessine un aileron au milieu en bas.' },
    { index: 6, pathData: '<path d="M 170 250 Q 200 350 230 250 Q 215 320 200 380 Q 185 320 170 250 Z" fill="#ff9900" style="mix-blend-mode: multiply" />', instruction: 'Dessine de grandes flammes oranges qui sortent du moteur.' },
    { index: 7, pathData: '<path d="M 185 250 Q 200 320 215 250 Q 205 300 200 330 Q 195 300 185 250 Z" fill="#ffff00" style="mix-blend-mode: multiply" />', instruction: 'Ajoute des flammes jaunes plus petites à l\'intérieur.' },
    { index: 8, pathData: '<path d="M 80 100 L 90 110 M 80 110 L 90 100" fill="none" />', instruction: 'Dessine une petite étoile en croix en haut à gauche.' },
    { index: 9, pathData: '<path d="M 320 80 L 330 90 M 320 90 L 330 80" fill="none" />', instruction: 'Dessine une étoile en croix en haut à droite.' },
    { index: 10, pathData: '<path d="M 300 200 L 310 210 M 300 210 L 310 200" fill="none" />', instruction: 'Enfin, dessine une dernière étoile à droite !' }
  ]
};
