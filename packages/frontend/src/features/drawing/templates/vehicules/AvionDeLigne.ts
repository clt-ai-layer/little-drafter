import { Template } from '../index';

export const AVION_DE_LIGNE_TEMPLATE: Template = {
  id: 'avion-ligne-1',
  name: 'Avion de ligne',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<path d="M 100 200 C 100 160, 300 160, 350 200 C 350 240, 100 240, 100 200 Z" />', instruction: 'Dessine le grand corps ovale de l\'avion.' },
    { index: 1, pathData: '<path d="M 100 200 L 50 130 L 50 200 Z" />', instruction: 'Dessine un triangle à l\'arrière pour la grande dérive.' },
    { index: 2, pathData: '<path d="M 80 200 L 40 220 L 60 220 Z" />', instruction: 'Ajoute un petit triangle en bas à l\'arrière pour l\'empennage.' },
    { index: 3, pathData: '<path d="M 220 190 L 180 120 L 230 120 L 260 190 Z" />', instruction: 'Dessine l\'aile qui est de l\'autre côté, en arrière-plan.' },
    { index: 4, pathData: '<path d="M 200 210 L 130 300 L 200 300 L 250 210 Z" />', instruction: 'Dessine la grande aile principale vers le bas.' },
    { index: 5, pathData: '<circle cx="320" cy="195" r="5" />', instruction: 'Dessine la vitre du pilote tout à l\'avant.' },
    { index: 6, pathData: '<circle cx="280" cy="200" r="4" />', instruction: 'Ajoute un hublot pour les passagers.' },
    { index: 7, pathData: '<circle cx="260" cy="200" r="4" />', instruction: 'Ajoute un deuxième hublot.' },
    { index: 8, pathData: '<circle cx="240" cy="200" r="4" />', instruction: 'Ajoute un troisième hublot.' },
    { index: 9, pathData: '<circle cx="220" cy="200" r="4" />', instruction: 'Ajoute un dernier hublot.' },
    { index: 10, pathData: '<path d="M 170 240 C 170 260, 200 260, 200 240 Z" />', instruction: 'Dessine le gros réacteur sous l\'aile principale.' },
    { index: 11, pathData: '<path d="M 40 200 L 10 200 M 60 180 L 20 180 M 60 220 L 20 220" fill="none" stroke-width="2" />', instruction: 'Dessine trois lignes derrière pour montrer que l\'avion va très vite !' },
    { index: 12, pathData: '<path d="M 100 200 C 100 160, 300 160, 350 200 C 350 240, 100 240, 100 200 Z" fill="white" style="mix-blend-mode: multiply" />', instruction: 'Colorie le corps de l\'avion en blanc.' },
    { index: 13, pathData: '<path d="M 200 210 L 130 300 L 200 300 L 250 210 Z" fill="blue" style="mix-blend-mode: multiply" />', instruction: 'Colorie l\'aile principale en bleu.' },
    { index: 14, pathData: '<path d="M 100 200 L 50 130 L 50 200 Z" fill="blue" style="mix-blend-mode: multiply" />', instruction: 'Colorie la grande dérive en bleu.' }
  ]
};
