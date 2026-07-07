import { Template } from '../index';

export const COURONNE_TEMPLATE: Template = {
  id: 'couronne',
  name: 'Couronne',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine la base de la couronne',
      svgPath: '<rect x="70" y="250" width="260" height="50" rx="10" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la grande pointe centrale',
      svgPath: '<polygon points="160,250 200,90 240,250" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine la pointe gauche',
      svgPath: '<polygon points="70,250 100,130 160,250" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine la pointe droite',
      svgPath: '<polygon points="240,250 300,130 330,250" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute un beau joyau rond sur la pointe centrale',
      svgPath: '<circle cx="200" cy="70" r="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un joyau sur la pointe gauche',
      svgPath: '<circle cx="95" cy="110" r="12" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un joyau sur la pointe droite',
      svgPath: '<circle cx="305" cy="110" r="12" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine un diamant au centre de la base',
      svgPath: '<polygon points="200,260 215,275 200,290 185,275" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute un joyau à gauche sur la base',
      svgPath: '<circle cx="120" cy="275" r="10" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un joyau à droite sur la base',
      svgPath: '<circle cx="280" cy="275" r="10" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Colorie la grande pointe centrale en or',
      svgPath: '<polygon points="160,250 200,90 240,250" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le beau joyau rond sur la pointe centrale en rubis',
      svgPath: '<circle cx="200" cy="70" r="15" stroke="currentColor" stroke-width="8" fill="#E0115F" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le joyau sur la pointe gauche en saphir',
      svgPath: '<circle cx="95" cy="110" r="12" stroke="currentColor" stroke-width="8" fill="#0F52BA" style="mix-blend-mode: multiply"/>',
    }
  ]
};
