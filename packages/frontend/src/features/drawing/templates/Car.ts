import { Template } from './index';

export const CAR_TEMPLATE: Template = {
  id: 'car-1',
  name: 'Voiture Rapide',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<rect x="80" y="220" width="240" height="60" rx="20" ry="20" />', instruction: 'Dessine un long rectangle arrondi pour le bas de la voiture.' },
    { index: 1, pathData: '<path d="M 120 220 L 150 150 L 250 150 L 280 220 Z" />', instruction: 'Dessine un trapèze au-dessus pour le toit de la voiture.' },
    { index: 2, pathData: '<circle cx="140" cy="280" r="30" />', instruction: 'Dessine un grand cercle à gauche pour la première roue.' },
    { index: 3, pathData: '<circle cx="260" cy="280" r="30" />', instruction: 'Dessine un grand cercle à droite pour la deuxième roue.' },
    { index: 4, pathData: '<circle cx="140" cy="280" r="10" />', instruction: 'Ajoute un petit cercle au centre de la roue gauche.' },
    { index: 5, pathData: '<circle cx="260" cy="280" r="10" />', instruction: 'Ajoute un petit cercle au centre de la roue droite.' },
    { index: 6, pathData: '<path d="M 130 210 L 155 160 L 195 160 L 195 210 Z" />', instruction: 'Dessine une vitre à gauche.' },
    { index: 7, pathData: '<path d="M 205 210 L 205 160 L 245 160 L 270 210 Z" />', instruction: 'Dessine une vitre à droite.' },
    { index: 8, pathData: '<path d="M 310 240 Q 325 240 320 260 L 310 260 Z" />', instruction: 'Ajoute le phare avant à droite.' },
    { index: 9, pathData: '<path d="M 80 240 L 90 240 L 90 260 L 80 260 Z" />', instruction: 'Ajoute le feu arrière à gauche.' },
    { index: 10, pathData: '<path d="M 70 270 L 50 270 M 70 275 L 40 275 M 70 280 L 60 280" fill="none" />', instruction: 'Enfin, dessine des petites lignes de fumée à l\'arrière pour montrer qu\'elle va vite !' },
    { index: 11, pathData: '<rect x="80" y="220" width="240" height="60" rx="20" ry="20" fill="#E53935" style="mix-blend-mode: multiply" />', instruction: 'Colorie le bas de la voiture en rouge.' },
    { index: 12, pathData: '<path d="M 120 220 L 150 150 L 250 150 L 280 220 Z" fill="#E53935" style="mix-blend-mode: multiply" />', instruction: 'Colorie le toit de la voiture en rouge.' },
    { index: 13, pathData: '<circle cx="140" cy="280" r="30" fill="#424242" style="mix-blend-mode: multiply" />', instruction: 'Colorie la roue gauche en gris foncé.' },
    { index: 14, pathData: '<circle cx="260" cy="280" r="30" fill="#424242" style="mix-blend-mode: multiply" />', instruction: 'Colorie la roue droite en gris foncé.' }
  ]
};
