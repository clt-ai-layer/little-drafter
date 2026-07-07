import { Template } from '../index';

export const CADEAU_TEMPLATE: Template = {
  id: 'cadeau',
  name: 'Cadeau',
  category: 'Objets & Magie',
  steps: [
    {
      instruction: 'Dessine la grande boîte carrée',
      svgPath: '<rect x="100" y="160" width="200" height="180" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le couvercle de la boîte',
      svgPath: '<rect x="80" y="120" width="240" height="40" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le ruban vertical de la boîte',
      svgPath: '<rect x="180" y="160" width="40" height="180" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le ruban vertical sur le couvercle',
      svgPath: '<rect x="180" y="120" width="40" height="40" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la boucle gauche du nœud',
      svgPath: '<path d="M 200 120 C 140 20 80 80 180 120" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine la boucle droite du nœud',
      svgPath: '<path d="M 200 120 C 260 20 320 80 220 120" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Dessine le bout du ruban qui pend à gauche',
      svgPath: '<path d="M 190 120 Q 150 160 140 200" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Dessine le bout du ruban qui pend à droite',
      svgPath: '<path d="M 210 120 Q 250 160 260 200" stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"/>',
    },
    {
      instruction: 'Ajoute un motif de rond sur la boîte (en haut à gauche)',
      svgPath: '<circle cx="140" cy="210" r="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un motif de rond sur la boîte (en haut à droite)',
      svgPath: '<circle cx="260" cy="210" r="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un motif de rond sur la boîte (en bas à gauche)',
      svgPath: '<circle cx="140" cy="290" r="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Ajoute un motif de rond sur la boîte (en bas à droite)',
      svgPath: '<circle cx="260" cy="290" r="15" stroke="currentColor" stroke-width="8" fill="none"/>',
    },
    {
      instruction: 'Colorie la boîte du cadeau en rouge',
      svgPath: '<rect x="100" y="160" width="200" height="180" stroke="currentColor" stroke-width="8" fill="#FF0000" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le couvercle en bleu',
      svgPath: '<rect x="80" y="120" width="240" height="40" stroke="currentColor" stroke-width="8" fill="#0000FF" style="mix-blend-mode: multiply"/>',
    },
    {
      instruction: 'Colorie le ruban de la boîte en jaune',
      svgPath: '<rect x="180" y="160" width="40" height="180" stroke="currentColor" stroke-width="8" fill="#FFD700" style="mix-blend-mode: multiply"/>',
    }
  ]
};
