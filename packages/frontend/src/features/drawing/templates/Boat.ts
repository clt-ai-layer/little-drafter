import { Template } from './index';

export const BOAT_TEMPLATE: Template = {
  id: 'boat-1',
  name: 'Petit Bateau',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<path d="M 80 250 L 320 250 L 280 320 L 120 320 Z" />', instruction: 'Dessine la coque du bateau en bas.' },
    { index: 1, pathData: '<rect x="195" y="100" width="10" height="150" />', instruction: 'Dessine un grand mât droit au milieu.' },
    { index: 2, pathData: '<path d="M 190 110 L 110 230 L 190 230 Z" />', instruction: 'Dessine un triangle à gauche pour la première voile.' },
    { index: 3, pathData: '<path d="M 210 110 L 290 230 L 210 230 Z" />', instruction: 'Dessine un triangle à droite pour la deuxième voile.' },
    { index: 4, pathData: '<path d="M 205 100 L 250 80 L 205 120 Z" />', instruction: 'Ajoute un petit drapeau pointu tout en haut du mât.' },
    { index: 5, pathData: '<circle cx="150" cy="285" r="12" />', instruction: 'Dessine un petit hublot rond sur la gauche de la coque.' },
    { index: 6, pathData: '<circle cx="200" cy="285" r="12" />', instruction: 'Dessine un hublot rond au milieu.' },
    { index: 7, pathData: '<circle cx="250" cy="285" r="12" />', instruction: 'Dessine un hublot rond sur la droite.' },
    { index: 8, pathData: '<circle cx="100" cy="270" r="5" /><path d="M 100 275 L 100 300 M 90 290 Q 100 310 110 290" fill="none" />', instruction: 'Dessine une ancre accrochée à gauche.' },
    { index: 9, pathData: '<path d="M 60 330 Q 100 310 140 330 T 220 330 T 300 330 T 380 330" fill="none" />', instruction: 'Enfin, dessine des vagues en bas pour que le bateau flotte sur l\'eau !' },
    { index: 10, pathData: '<path d="M 80 250 L 320 250 L 280 320 L 120 320 Z" fill="#8D6E63" style="mix-blend-mode: multiply" />', instruction: 'Colorie la coque du bateau en marron.' },
    { index: 11, pathData: '<path d="M 190 110 L 110 230 L 190 230 Z" fill="#FFF176" style="mix-blend-mode: multiply" />', instruction: 'Colorie la première voile en jaune.' },
    { index: 12, pathData: '<path d="M 210 110 L 290 230 L 210 230 Z" fill="#FF8A65" style="mix-blend-mode: multiply" />', instruction: 'Colorie la deuxième voile en orange.' }
  ]
};
