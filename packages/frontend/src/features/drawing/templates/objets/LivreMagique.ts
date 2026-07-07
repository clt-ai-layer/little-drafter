import { Template } from '../index';

export const LIVRE_MAGIQUE_TEMPLATE: Template = {
  id: 'livre-magique',
  name: 'Livre magique',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine le centre ouvert du livre',
      svgPath: '<line x1="200" y1="80" x2="200" y2="280" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine la page gauche en haut',
      svgPath: '<path d="M 200 80 Q 140 60 80 100" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la page droite en haut',
      svgPath: '<path d="M 200 80 Q 260 60 320 100" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la page gauche en bas',
      svgPath: '<path d="M 200 280 Q 140 260 80 300" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la page droite en bas',
      svgPath: '<path d="M 200 280 Q 260 260 320 300" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le bord gauche du livre',
      svgPath: '<line x1="80" y1="100" x2="80" y2="300" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine le bord droit du livre',
      svgPath: '<line x1="320" y1="100" x2="320" y2="300" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Ajoute des lignes d\'écriture sur la page de gauche',
      svgPath: '<line x1="100" y1="140" x2="180" y2="120" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Ajoute une autre ligne sur la page de gauche',
      svgPath: '<line x1="100" y1="180" x2="180" y2="160" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine un symbole magique (étoile) sur la page de droite',
      svgPath: '<path d="M 240 180 L 280 140 M 280 180 L 240 140" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute un ruban marque-page qui dépasse en bas',
      svgPath: '<path d="M 200 280 Q 220 340 180 380" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute de la poussière magique qui s\'envole',
      svgPath: '<circle cx="200" cy="40" r="5" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute une dernière étincelle magique',
      svgPath: '<circle cx="240" cy="50" r="5" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Colorie la poussière magique en jaune',
      svgPath: '<circle cx="200" cy="40" r="5" stroke="currentColor" stroke-width="8" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie la dernière étincelle magique en or',
      svgPath: '<circle cx="240" cy="50" r="5" stroke="currentColor" stroke-width="8" fill="#FFC000" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le symbole magique (étoile) en or',
      svgPath: '<path d="M 240 180 L 280 140 M 280 180 L 240 140" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    }
  ]
};
