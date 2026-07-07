import { Template } from '../index';

export const CLE_MAGIQUE_TEMPLATE: Template = {
  id: 'cle-magique',
  name: 'Clé magique',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine l\'anneau de la clé',
      svgPath: '<circle cx="120" cy="200" r="60" stroke="currentColor" stroke-width="12" fill="none"/>',
    },
    {
      instruction: 'Dessine la tige de la clé',
      svgPath: '<line x1="180" y1="200" x2="340" y2="200" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine la première dent',
      svgPath: '<line x1="280" y1="200" x2="280" y2="260" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine la deuxième dent',
      svgPath: '<line x1="320" y1="200" x2="320" y2="260" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>',
    },
    {
      instruction: 'Relie les dents en bas',
      svgPath: '<line x1="280" y1="260" x2="320" y2="260" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine un beau cœur magique au centre de l\'anneau',
      svgPath: '<path d="M 120 190 C 140 170 160 200 120 230 C 80 200 100 170 120 190" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un petit cercle au bout de la tige',
      svgPath: '<circle cx="360" cy="200" r="10" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un trait pour décorer la tige',
      svgPath: '<line x1="220" y1="180" x2="220" y2="220" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Ajoute une étoile scintillante en haut',
      svgPath: '<path d="M 180 80 L 200 100 M 200 80 L 180 100" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une étincelle près des dents',
      svgPath: '<path d="M 360 260 L 380 280 M 380 260 L 360 280" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Colorie l\'anneau de la clé en or',
      svgPath: '<circle cx="120" cy="200" r="60" stroke="currentColor" stroke-width="12" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le petit cercle au bout de la tige en argent',
      svgPath: '<circle cx="360" cy="200" r="10" stroke="currentColor" stroke-width="8" fill="#C0C0C0" style="mix-blend-mode: multiply"/>',
    }
  ]
};
