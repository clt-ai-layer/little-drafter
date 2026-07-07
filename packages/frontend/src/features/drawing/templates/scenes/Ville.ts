import { Template } from '../index';

export const VILLE_TEMPLATE: Template = {
  id: 'scene-ville',
  name: 'Ville',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<rect x="0" y="300" width="400" height="100" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine la grande route tout en bas.' },
    { index: 1, pathData: '<path d="M 20 350 L 60 350 M 100 350 L 140 350 M 180 350 L 220 350 M 260 350 L 300 350 M 340 350 L 380 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace les petits traits blancs pointillées de la route.' },
    { index: 2, pathData: '<rect x="30" y="100" width="80" height="200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un grand rectangle pour faire un gratte-ciel.' },
    { index: 3, pathData: '<rect x="45" y="120" width="20" height="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une fenêtre en haut du gratte-ciel.' },
    { index: 4, pathData: '<rect x="75" y="120" width="20" height="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une autre fenêtre à côté.' },
    { index: 5, pathData: '<rect x="45" y="170" width="20" height="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Des fenêtres plus bas.' },
    { index: 6, pathData: '<rect x="75" y="170" width="20" height="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Encore une fenêtre !' },
    { index: 7, pathData: '<rect x="140" y="50" width="100" height="250" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un gratte-ciel encore plus grand au milieu.' },
    { index: 8, pathData: '<path d="M 190 50 L 190 10 L 190 50 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute une grande antenne pointue tout en haut.' },
    { index: 9, pathData: '<rect x="160" y="80" width="60" height="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine une très grande fenêtre horizontale.' },
    { index: 10, pathData: '<rect x="160" y="120" width="60" height="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une autre grande fenêtre en dessous.' },
    { index: 11, pathData: '<rect x="270" y="150" width="90" height="150" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais le dernier bâtiment sur la droite.' },
    { index: 12, pathData: '<rect x="290" y="170" width="50" height="100" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une très très grande vitre sur le devant.' },
    { index: 13, pathData: '<path d="M 120 330 L 220 330 L 220 310 L 190 290 L 150 290 L 120 310 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Maintenant, dessine la forme d\'une petite voiture sur la route.' },
    { index: 14, pathData: '<circle cx="140" cy="330" r="10" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine la roue avant de la voiture.' },
    { index: 15, pathData: '<circle cx="200" cy="330" r="10" fill="none" stroke="black" stroke-width="4" />', instruction: 'Puis la roue arrière de la voiture.' },
    { index: 16, pathData: '<rect x="150" y="295" width="40" height="15" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la petite fenêtre de la voiture.' },
    { index: 17, pathData: '<rect x="30" y="100" width="80" height="200" fill="#9e9e9e" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le premier gratte-ciel en gris !' },
    { index: 18, pathData: '<rect x="140" y="50" width="100" height="250" fill="#607d8b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le grand immeuble du milieu en bleu-gris.' },
    { index: 19, pathData: '<rect x="270" y="150" width="90" height="150" fill="#795548" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'L\'immeuble de droite en marron.' },
    { index: 20, pathData: '<path d="M 120 330 L 220 330 L 220 310 L 190 290 L 150 290 L 120 310 Z" fill="#e91e63" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la jolie voiture en rose ou rouge.' },
    { index: 21, pathData: '<circle cx="140" cy="330" r="10" fill="#212121" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Les roues de la voiture toutes noires.' },
    { index: 22, pathData: '<circle cx="200" cy="330" r="10" fill="#212121" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'La roue arrière aussi en noir.' },
    { index: 23, pathData: '<rect x="0" y="300" width="400" height="100" fill="#424242" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et enfin la grande route de la ville en gris très foncé !' }
  ]
};
