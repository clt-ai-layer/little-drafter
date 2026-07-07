import { Template } from '../index';

export const ROBOT_TEMPLATE: Template = {
  id: 'robot',
  name: 'Robot',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine la tête carrée du robot',
      svgPath: '<rect x="150" y="50" width="100" height="80" rx="10" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le grand corps rectangulaire',
      svgPath: '<rect x="120" y="140" width="160" height="150" rx="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine l\'œil gauche',
      svgPath: '<circle cx="175" cy="85" r="12" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine l\'œil droit',
      svgPath: '<circle cx="225" cy="85" r="12" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la bouche du robot',
      svgPath: '<rect x="170" y="110" width="60" height="10" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la base de l\'antenne sur sa tête',
      svgPath: '<line x1="200" y1="50" x2="200" y2="20" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Ajoute une petite boule au bout de l\'antenne',
      svgPath: '<circle cx="200" cy="15" r="8" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le bras gauche',
      svgPath: '<line x1="120" y1="170" x2="60" y2="220" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine le bras droit',
      svgPath: '<line x1="280" y1="170" x2="340" y2="220" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
    },
    {
      instruction: 'Dessine la jambe gauche',
      svgPath: '<rect x="150" y="290" width="30" height="60" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la jambe droite',
      svgPath: '<rect x="220" y="290" width="30" height="60" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un bouton sur son ventre',
      svgPath: '<circle cx="200" cy="180" r="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un écran sur son ventre',
      svgPath: '<rect x="160" y="210" width="80" height="50" rx="5" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Colorie la tête carrée du robot en gris',
      svgPath: '<rect x="150" y="50" width="100" height="80" rx="10" stroke="currentColor" stroke-width="8" fill="#D3D3D3" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie l\'œil gauche en bleu',
      svgPath: '<circle cx="175" cy="85" r="12" stroke="currentColor" stroke-width="8" fill="#0000FF" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie l\'écran sur son ventre en vert',
      svgPath: '<rect x="160" y="210" width="80" height="50" rx="5" stroke="currentColor" stroke-width="8" fill="#00FF00" style="mix-blend-mode: multiply"/>',
    }
  ]
};
