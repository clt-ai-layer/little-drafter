import { Template } from '../index';

export const CHATEAU_TEMPLATE: Template = {
  id: 'chateau',
  name: 'Château',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine le grand mur central',
      svgPath: '<rect x="130" y="180" width="140" height="180" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la tour gauche',
      svgPath: '<rect x="70" y="100" width="60" height="260" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la tour droite',
      svgPath: '<rect x="270" y="100" width="60" height="260" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute le toit pointu sur la tour gauche',
      svgPath: '<polygon points="60,100 100,30 140,100" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute le toit pointu sur la tour droite',
      svgPath: '<polygon points="260,100 300,30 340,100" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine la grande porte du château',
      svgPath: '<path d="M 170 360 L 170 280 A 30 30 0 0 1 230 280 L 230 360" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute les créneaux sur le mur central (gauche)',
      svgPath: '<rect x="140" y="150" width="20" height="30" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute les créneaux sur le mur central (milieu)',
      svgPath: '<rect x="190" y="150" width="20" height="30" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute les créneaux sur le mur central (droite)',
      svgPath: '<rect x="240" y="150" width="20" height="30" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine une fenêtre sur la tour gauche',
      svgPath: '<path d="M 90 180 L 90 150 A 10 10 0 0 1 110 150 L 110 180 Z" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine une fenêtre sur la tour droite',
      svgPath: '<path d="M 290 180 L 290 150 A 10 10 0 0 1 310 150 L 310 180 Z" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine un drapeau sur le toit gauche',
      svgPath: '<polygon points="100,30 100,10 130,20" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine un drapeau sur le toit droit',
      svgPath: '<polygon points="300,30 300,10 330,20" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Colorie le grand mur central en gris',
      svgPath: '<rect x="130" y="180" width="140" height="180" stroke="currentColor" stroke-width="8" fill="#A9A9A9" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie la tour gauche en gris clair',
      svgPath: '<rect x="70" y="100" width="60" height="260" stroke="currentColor" stroke-width="8" fill="#D3D3D3" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie la tour droite en gris clair',
      svgPath: '<rect x="270" y="100" width="60" height="260" stroke="currentColor" stroke-width="8" fill="#D3D3D3" style="mix-blend-mode: multiply"/>',
    }
  ]
};
