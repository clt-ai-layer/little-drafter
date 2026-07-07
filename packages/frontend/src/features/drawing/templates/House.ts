import { Template } from './index';

export const HOUSE_TEMPLATE: Template = {
  id: 'house-1',
  name: 'Ma Maison',
  category: 'Objets & Magie',
  steps: [
    { index: 0, pathData: '<rect x="100" y="200" width="200" height="180" />', instruction: 'D\'abord, dessine un grand carré parfait pour la maison.' },
    { index: 1, pathData: '<path d="M 80 200 L 200 80 L 320 200 Z" />', instruction: 'Ajoute un triangle géant sur le dessus pour le toit.' },
    { index: 2, pathData: '<rect x="160" y="260" width="80" height="120" />', instruction: 'Dessine un grand rectangle au milieu pour la porte d\'entrée.' },
    { index: 3, pathData: '<circle cx="225" cy="320" r="6" fill="#333" style="mix-blend-mode: multiply" />', instruction: 'Place un petit cercle pour la poignée de la porte.' },
    { index: 4, pathData: '<rect x="120" y="220" width="30" height="30" />', instruction: 'Dessine un petit carré à gauche pour la première fenêtre.' },
    { index: 5, pathData: '<rect x="250" y="220" width="30" height="30" />', instruction: 'Dessine un autre petit carré à droite pour la deuxième fenêtre.' },
    { index: 6, pathData: '<path d="M 135 220 L 135 250 M 120 235 L 150 235" />', instruction: 'Trace une croix dans la fenêtre de gauche pour faire les vitres.' },
    { index: 7, pathData: '<path d="M 265 220 L 265 250 M 250 235 L 280 235" />', instruction: 'Trace une croix dans la fenêtre de droite aussi.' },
    { index: 8, pathData: '<rect x="240" y="100" width="30" height="60" />', instruction: 'Dessine un petit rectangle sur le toit pour la cheminée.' },
    { index: 9, pathData: '<path d="M 255 90 Q 240 70 260 50 Q 280 30 255 10" fill="none" />', instruction: 'Enfin, dessine une ligne ondulée pour la fumée qui sort de la cheminée !' },
    { index: 10, pathData: '<rect x="100" y="200" width="200" height="180" fill="#FFF9C4" style="mix-blend-mode: multiply" />', instruction: 'Colorie les murs de la maison en jaune clair.' },
    { index: 11, pathData: '<path d="M 80 200 L 200 80 L 320 200 Z" fill="#E53935" style="mix-blend-mode: multiply" />', instruction: 'Colorie le toit en rouge.' },
    { index: 12, pathData: '<rect x="160" y="260" width="80" height="120" fill="#795548" style="mix-blend-mode: multiply" />', instruction: 'Colorie la porte en marron.' }
  ]
};
