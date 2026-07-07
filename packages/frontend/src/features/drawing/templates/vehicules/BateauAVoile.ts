import { Template } from '../index';

export const BATEAU_A_VOILE_TEMPLATE: Template = {
  id: 'bateau-voile-1',
  name: 'Bateau à voile',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<path d="M 60 250 L 340 250 L 290 320 L 110 320 Z" />', instruction: 'Dessine un grand trapèze à l\'envers pour la coque du bateau.' },
    { index: 1, pathData: '<rect x="195" y="80" width="10" height="170" />', instruction: 'Dresse le grand mât droit au milieu du bateau.' },
    { index: 2, pathData: '<path d="M 205 90 L 330 230 L 205 230 Z" />', instruction: 'Dessine un grand triangle à droite pour la voile principale.' },
    { index: 3, pathData: '<path d="M 195 120 L 80 230 L 195 230 Z" />', instruction: 'Dessine un autre triangle à gauche pour la petite voile.' },
    { index: 4, pathData: '<circle cx="150" cy="285" r="10" />', instruction: 'Fais un petit trou rond (hublot) sur la coque.' },
    { index: 5, pathData: '<circle cx="200" cy="285" r="10" />', instruction: 'Fais un deuxième hublot au milieu.' },
    { index: 6, pathData: '<circle cx="250" cy="285" r="10" />', instruction: 'Fais un troisième hublot à droite.' },
    { index: 7, pathData: '<path d="M 205 80 L 240 60 L 205 60 Z" />', instruction: 'Accroche un petit drapeau triangle tout en haut du mât.' },
    { index: 8, pathData: '<path d="M 40 340 Q 120 320 200 340 T 360 340" fill="none" stroke-width="4" />', instruction: 'Dessine une vague qui ondule sous le bateau.' },
    { index: 9, pathData: '<path d="M 60 360 Q 160 340 260 360 T 380 360" fill="none" stroke-width="4" />', instruction: 'Dessine une deuxième vague pour faire la mer !' },
    { index: 10, pathData: '<path d="M 60 250 L 340 250 L 290 320 L 110 320 Z" fill="brown" style="mix-blend-mode: multiply" />', instruction: 'Colorie la coque du bateau en marron.' },
    { index: 11, pathData: '<path d="M 205 90 L 330 230 L 205 230 Z" fill="white" style="mix-blend-mode: multiply" />', instruction: 'Colorie la voile principale en blanc.' },
    { index: 12, pathData: '<path d="M 195 120 L 80 230 L 195 230 Z" fill="white" style="mix-blend-mode: multiply" />', instruction: 'Colorie la petite voile en blanc.' }
  ]
};
