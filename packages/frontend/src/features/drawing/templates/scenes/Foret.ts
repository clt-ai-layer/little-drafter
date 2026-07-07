import { Template } from '../index';

export const FORET_TEMPLATE: Template = {
  id: 'scene-foret',
  name: 'Forêt',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 320 L 400 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le sol de la forêt avec un grand trait droit.' },
    { index: 1, pathData: '<rect x="40" y="270" width="20" height="50" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace le tronc d\'un grand sapin à gauche.' },
    { index: 2, pathData: '<path d="M 10 270 L 90 270 L 50 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais le premier gros triangle de branches du sapin.' },
    { index: 3, pathData: '<path d="M 20 200 L 80 200 L 50 140 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute un deuxième triangle par-dessus.' },
    { index: 4, pathData: '<path d="M 30 140 L 70 140 L 50 80 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et un tout petit triangle pointu au sommet.' },
    { index: 5, pathData: '<rect x="340" y="270" width="20" height="50" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un autre tronc de sapin sur la droite.' },
    { index: 6, pathData: '<path d="M 310 270 L 390 270 L 350 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le premier triangle de ce sapin.' },
    { index: 7, pathData: '<path d="M 320 200 L 380 200 L 350 140 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le deuxième triangle, toujours plus haut.' },
    { index: 8, pathData: '<path d="M 330 140 L 370 140 L 350 80 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'La jolie pointe en haut du deuxième sapin.' },
    { index: 9, pathData: '<path d="M 150 320 L 250 320 L 200 200 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Au milieu, trace une grande tente pointue de camping.' },
    { index: 10, pathData: '<path d="M 200 320 L 200 240" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ouvre la porte de la tente avec un trait au milieu.' },
    { index: 11, pathData: '<path d="M 200 240 L 170 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le rideau gauche de la tente.' },
    { index: 12, pathData: '<path d="M 200 240 L 230 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le rideau droit de la tente.' },
    { index: 13, pathData: '<path d="M 240 370 L 290 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace un bout de bois pour le feu de camp !' },
    { index: 14, pathData: '<path d="M 290 370 L 240 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un deuxième bois croisé par-dessus.' },
    { index: 15, pathData: '<path d="M 265 355 Q 250 330 265 310 Q 280 330 265 355 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et une grande flamme qui danse.' },
    { index: 16, pathData: '<circle cx="200" cy="80" r="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une grande pleine lune brillante dans le ciel.' },
    { index: 17, pathData: '<path d="M 120 50 L 130 60 M 130 50 L 120 60" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une petite étoile magique.' },
    { index: 18, pathData: '<path d="M 280 40 L 290 50 M 290 40 L 280 50" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une autre étoile très brillante.' },
    { index: 19, pathData: '<rect x="40" y="270" width="20" height="50" fill="#795548" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le tronc du sapin gauche en marron.' },
    { index: 20, pathData: '<path d="M 10 270 L 90 270 L 50 200 Z M 20 200 L 80 200 L 50 140 Z M 30 140 L 70 140 L 50 80 Z" fill="#388e3c" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie tout le grand sapin gauche en vert foncé !' },
    { index: 21, pathData: '<rect x="340" y="270" width="20" height="50" fill="#795548" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Le tronc du sapin droit en marron.' },
    { index: 22, pathData: '<path d="M 310 270 L 390 270 L 350 200 Z M 320 200 L 380 200 L 350 140 Z M 330 140 L 370 140 L 350 80 Z" fill="#388e3c" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le sapin droit avec ton plus beau vert.' },
    { index: 23, pathData: '<path d="M 150 320 L 250 320 L 200 200 Z" fill="#00bcd4" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la tente du campeur en bleu.' },
    { index: 24, pathData: '<path d="M 265 355 Q 250 330 265 310 Q 280 330 265 355 Z" fill="#ff9800" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Le feu bien chaud est orange.' },
    { index: 25, pathData: '<circle cx="200" cy="80" r="30" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et la belle lune en jaune.' },
    { index: 26, pathData: '<rect x="0" y="320" width="400" height="80" fill="#8bc34a" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'N\'oublie pas l\'herbe de la forêt en vert tendre !' }
  ]
};
