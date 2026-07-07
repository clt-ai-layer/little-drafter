import { Template } from '../index';

export const CHAPEAU_MAGICIEN_TEMPLATE: Template = {
  id: 'chapeau-magicien',
  name: 'Chapeau de magicien',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine le grand bord du chapeau',
      svgPath: '<ellipse cx="200" cy="300" rx="140" ry="30" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le haut pointu du chapeau (côté gauche)',
      svgPath: '<path d="M 120 290 Q 150 150 240 60" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le haut pointu du chapeau (côté droit)',
      svgPath: '<path d="M 280 290 Q 260 150 240 60" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le ruban autour du chapeau (ligne du haut)',
      svgPath: '<path d="M 130 250 Q 200 280 270 250" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le ruban autour du chapeau (ligne du bas)',
      svgPath: '<path d="M 120 280 Q 200 310 280 280" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute une grande étoile sur le devant du chapeau',
      svgPath: '<polygon points="200,160 210,190 240,190 215,210 225,240 200,220 175,240 185,210 160,190 190,190" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine une étincelle magique en haut à gauche',
      svgPath: '<path d="M 100 80 L 120 100 M 120 80 L 100 100" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Dessine une étincelle magique en haut à droite',
      svgPath: '<path d="M 320 120 L 340 140 M 340 120 L 320 140" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une baguette magique qui dépasse du bord (manche)',
      svgPath: '<line x1="60" y1="360" x2="120" y2="300" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>',
    },
    {
      instruction: 'Ajoute le bout lumineux de la baguette',
      svgPath: '<circle cx="60" cy="360" r="10" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Colorie le grand bord du chapeau en violet',
      svgPath: '<ellipse cx="200" cy="300" rx="140" ry="30" stroke="currentColor" stroke-width="8" fill="#8A2BE2" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie la grande étoile en or',
      svgPath: '<polygon points="200,160 210,190 240,190 215,210 225,240 200,220 175,240 185,210 160,190 190,190" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le bout lumineux de la baguette en cyan',
      svgPath: '<circle cx="60" cy="360" r="10" stroke="currentColor" stroke-width="8" fill="#00FFFF" style="mix-blend-mode: multiply"/>',
    }
  ]
};
