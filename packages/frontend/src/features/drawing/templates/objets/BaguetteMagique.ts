import { Template } from '../index';

export const BAGUETTE_MAGIQUE_TEMPLATE: Template = {
  id: 'baguette-magique',
  name: 'Baguette magique',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine le manche de la baguette',
      svgPath: '<line x1="100" y1="320" x2="220" y2="200" stroke="currentColor" stroke-width="20" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine la grande étoile au bout',
      svgPath: '<polygon points="260,80 290,150 360,160 300,210 320,280 260,240 200,280 220,210 160,160 230,150" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une étincelle magique en haut à gauche',
      svgPath: '<path d="M 140 100 L 160 120 M 160 100 L 140 120" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une grande étincelle en haut à droite',
      svgPath: '<path d="M 350 70 L 390 110 M 390 70 L 350 110" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une étincelle en bas à droite',
      svgPath: '<path d="M 360 280 L 380 300 M 380 280 L 360 300" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Dessine un ruban tourbillonnant',
      svgPath: '<path d="M 220 200 Q 280 220 240 260 T 160 280 T 140 340" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute un petit cercle au bout du manche',
      svgPath: '<circle cx="90" cy="330" r="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute des rayures sur le manche (première)',
      svgPath: '<line x1="140" y1="280" x2="160" y2="260" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Ajoute des rayures sur le manche (deuxième)',
      svgPath: '<line x1="180" y1="240" x2="200" y2="220" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine un rond au centre de l\'étoile',
      svgPath: '<circle cx="260" cy="185" r="20" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Colorie la grande étoile en jaune',
      svgPath: '<polygon points="260,80 290,150 360,160 300,210 320,280 260,240 200,280 220,210 160,160 230,150" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le rond central en orange',
      svgPath: '<circle cx="260" cy="185" r="20" stroke="currentColor" stroke-width="8" fill="#FFA500" style="mix-blend-mode: multiply"/>',
    }
  ]
};
