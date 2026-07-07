import { Template } from '../index';

export const FUSEE_TEMPLATE: Template = {
  id: 'fusee',
  name: 'Fusée',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine le corps de la fusée',
      svgPath: '<path d="M 200 40 Q 280 120 260 260 L 140 260 Q 120 120 200 40" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine l\'aileron gauche',
      svgPath: '<polygon points="140,260 140,200 60,280 140,260" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine l\'aileron droit',
      svgPath: '<polygon points="260,260 260,200 340,280 260,260" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine l\'aileron central',
      svgPath: '<polygon points="180,260 200,200 220,260" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="none"/>',
    },
    {
      instruction: 'Dessine le grand hublot rond',
      svgPath: '<circle cx="200" cy="140" r="40" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un petit cercle dans le hublot',
      svgPath: '<circle cx="200" cy="140" r="25" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le nez de la fusée',
      svgPath: '<path d="M 160 90 Q 200 50 240 90" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la base des réacteurs',
      svgPath: '<rect x="160" y="260" width="80" height="20" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la grande flamme du milieu',
      svgPath: '<path d="M 180 280 Q 200 360 200 380 Q 200 360 220 280" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Dessine la flamme de gauche',
      svgPath: '<path d="M 160 280 Q 170 340 170 350 Q 175 340 180 280" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Dessine la flamme de droite',
      svgPath: '<path d="M 220 280 Q 225 340 230 350 Q 230 340 240 280" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une étoile à côté de la fusée',
      svgPath: '<path d="M 80 80 L 100 100 M 100 80 L 80 100" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute une autre étoile',
      svgPath: '<path d="M 320 120 L 340 140 M 340 120 L 320 140" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Colorie le corps de la fusée en blanc',
      svgPath: '<path d="M 200 40 Q 280 120 260 260 L 140 260 Q 120 120 200 40" stroke="currentColor" stroke-width="8" fill="#FFFFFF" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie l\'aileron gauche en rouge',
      svgPath: '<polygon points="140,260 140,200 60,280 140,260" stroke="currentColor" stroke-width="8" stroke-linejoin="round" fill="#FF0000" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le grand hublot rond en bleu clair',
      svgPath: '<circle cx="200" cy="140" r="40" stroke="currentColor" stroke-width="8" fill="#87CEEB" style="mix-blend-mode: multiply"/>',
    }
  ]
};
