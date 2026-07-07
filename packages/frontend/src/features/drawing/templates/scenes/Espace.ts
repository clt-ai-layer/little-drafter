import { Template } from '../index';

export const ESPACE_TEMPLATE: Template = {
  id: 'scene-espace',
  name: 'Espace',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 320 Q 200 250 400 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le bord de la planète géante tout en bas !' },
    { index: 1, pathData: '<circle cx="100" cy="350" r="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute un premier cratère rond sur la planète.' },
    { index: 2, pathData: '<circle cx="300" cy="370" r="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et un autre grand cratère par ici.' },
    { index: 3, pathData: '<circle cx="200" cy="330" r="15" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un petit dernier cratère au milieu.' },
    { index: 4, pathData: '<path d="M 200 50 Q 250 100 250 200 L 150 200 Q 150 100 200 50 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace le corps de la fusée, pointu vers le haut.' },
    { index: 5, pathData: '<circle cx="200" cy="120" r="25" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un grand hublot (fenêtre) rond.' },
    { index: 6, pathData: '<circle cx="200" cy="120" r="15" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute le verre à l\'intérieur du hublot.' },
    { index: 7, pathData: '<path d="M 150 170 L 100 220 L 150 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine l\'aileron gauche de la fusée.' },
    { index: 8, pathData: '<path d="M 250 170 L 300 220 L 250 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine l\'aileron droit.' },
    { index: 9, pathData: '<path d="M 190 200 L 200 230 L 210 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et le petit aileron central en bas.' },
    { index: 10, pathData: '<path d="M 170 200 Q 200 280 230 200 Q 215 250 200 290 Q 185 250 170 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine les flammes qui sortent du moteur.' },
    { index: 11, pathData: '<path d="M 50 60 L 70 80 M 70 60 L 50 80" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace une étoile en forme de croix à gauche.' },
    { index: 12, pathData: '<path d="M 330 50 L 350 70 M 350 50 L 330 70" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace une étoile en haut à droite.' },
    { index: 13, pathData: '<path d="M 80 180 L 90 190 M 90 180 L 80 190" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une petite étoile par ici.' },
    { index: 14, pathData: '<path d="M 320 220 L 330 230 M 330 220 L 320 230" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une autre petite étoile.' },
    { index: 15, pathData: '<path d="M 360 140 L 380 160 M 380 140 L 360 160" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et la dernière étoile !' },
    { index: 16, pathData: '<path d="M 0 320 Q 200 250 400 320 L 400 400 L 0 400 Z" fill="#9e9e9e" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la surface de la planète en gris !' },
    { index: 17, pathData: '<circle cx="100" cy="350" r="20" fill="#757575" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le premier cratère en gris foncé.' },
    { index: 18, pathData: '<circle cx="300" cy="370" r="30" fill="#757575" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Puis le deuxième grand cratère.' },
    { index: 19, pathData: '<circle cx="200" cy="330" r="15" fill="#757575" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et le petit cratère au centre.' },
    { index: 20, pathData: '<path d="M 200 50 Q 250 100 250 200 L 150 200 Q 150 100 200 50 Z" fill="#e0e0e0" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps de la fusée en gris clair.' },
    { index: 21, pathData: '<circle cx="200" cy="120" r="15" fill="#4fc3f7" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Mets du bleu ciel pour la vitre du hublot.' },
    { index: 22, pathData: '<path d="M 150 170 L 100 220 L 150 200 Z" fill="#f44336" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'aileron gauche en rouge !' },
    { index: 23, pathData: '<path d="M 250 170 L 300 220 L 250 200 Z" fill="#f44336" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'aileron droit en rouge.' },
    { index: 24, pathData: '<path d="M 190 200 L 200 230 L 210 200 Z" fill="#f44336" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Puis l\'aileron du milieu aussi en rouge.' },
    { index: 25, pathData: '<path d="M 170 200 Q 200 280 230 200 Q 215 250 200 290 Q 185 250 170 200 Z" fill="#ffb300" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et colorie de belles flammes jaunes et oranges pour le moteur !' }
  ]
};
