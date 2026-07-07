import { Template } from '../index';

export const DIAMANT_TEMPLATE: Template = {
  id: 'diamant',
  name: 'Diamant',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine la ligne plate du haut du diamant',
      svgPath: '<line x1="120" y1="100" x2="280" y2="100" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine le côté supérieur gauche',
      svgPath: '<line x1="120" y1="100" x2="60" y2="180" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine le côté supérieur droit',
      svgPath: '<line x1="280" y1="100" x2="340" y2="180" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Relie les deux côtés (la ligne du milieu)',
      svgPath: '<line x1="60" y1="180" x2="340" y2="180" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine la grande pointe vers le bas (gauche)',
      svgPath: '<line x1="60" y1="180" x2="200" y2="340" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine la grande pointe vers le bas (droite)',
      svgPath: '<line x1="340" y1="180" x2="200" y2="340" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Trace un trait intérieur à gauche (haut)',
      svgPath: '<line x1="120" y1="100" x2="150" y2="180" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Trace un trait intérieur à droite (haut)',
      svgPath: '<line x1="280" y1="100" x2="250" y2="180" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Trace un trait intérieur central vers la pointe',
      svgPath: '<line x1="200" y1="180" x2="200" y2="340" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Trace la facette intérieure gauche',
      svgPath: '<line x1="150" y1="180" x2="200" y2="340" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Trace la facette intérieure droite',
      svgPath: '<line x1="250" y1="180" x2="200" y2="340" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Ajoute une étincelle de brillance',
      svgPath: '<path d="M 60 60 L 80 80 M 80 60 L 60 80" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une deuxième étincelle plus grande',
      svgPath: '<path d="M 320 80 L 360 120 M 360 80 L 320 120" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Colorie l\'étincelle de brillance en jaune',
      svgPath: '<path d="M 60 60 L 80 80 M 80 60 L 60 80" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie la deuxième étincelle en or',
      svgPath: '<path d="M 320 80 L 360 120 M 360 80 L 320 120" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="#FFC000" style="mix-blend-mode: multiply"/>',
    }
  ]
};
