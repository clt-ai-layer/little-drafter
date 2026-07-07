import { Template } from '../index';

export const CIEL_NOCTURNE_TEMPLATE: Template = {
  id: 'scene-ciel-nocturne',
  name: 'Ciel Nocturne',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 100 100 A 60 60 0 1 1 100 220" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le grand bord rond de la lune.' },
    { index: 1, pathData: '<path d="M 100 220 A 40 40 0 1 0 100 100" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ferme le croissant de lune avec un autre arc.' },
    { index: 2, pathData: '<path d="M 200 250 L 350 250" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace le bas tout plat d\'un gros nuage.' },
    { index: 3, pathData: '<path d="M 200 250 Q 180 220 220 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Commence à faire les bosses du nuage sur le côté gauche.' },
    { index: 4, pathData: '<path d="M 220 200 Q 250 160 290 190" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la grosse bosse du nuage en haut.' },
    { index: 5, pathData: '<path d="M 290 190 Q 340 180 350 250" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et ferme le nuage avec les bosses de droite.' },
    { index: 6, pathData: '<path d="M 50 350 L 150 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace le bas d\'un deuxième nuage plus petit.' },
    { index: 7, pathData: '<path d="M 50 350 Q 40 320 70 310" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la première petite bosse du nuage.' },
    { index: 8, pathData: '<path d="M 70 310 Q 100 280 130 310" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine la grosse bosse du milieu.' },
    { index: 9, pathData: '<path d="M 130 310 Q 160 320 150 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et la dernière bosse pour fermer.' },
    { index: 10, pathData: '<path d="M 280 80 L 300 100 M 300 80 L 280 100" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le corps de l\'étoile filante.' },
    { index: 11, pathData: '<path d="M 300 90 L 380 50" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute la traînée rapide de l\'étoile filante.' },
    { index: 12, pathData: '<path d="M 290 100 L 360 60" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute un autre trait pour faire la vitesse.' },
    { index: 13, pathData: '<path d="M 30 50 L 40 60 M 40 50 L 30 60" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une petite étoile loin dans le ciel.' },
    { index: 14, pathData: '<path d="M 350 350 L 360 360 M 360 350 L 350 360" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une autre étoile en bas.' },
    { index: 15, pathData: '<path d="M 180 120 L 190 130 M 190 120 L 180 130" fill="none" stroke="black" stroke-width="4" />', instruction: 'Encore une étoile, c\'est beau !' },
    { index: 16, pathData: '<path d="M 100 100 A 60 60 0 1 1 100 220 A 40 40 0 1 0 100 100 Z" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le croissant de lune en jaune éclatant.' },
    { index: 17, pathData: '<path d="M 200 250 L 350 250 Q 340 180 290 190 Q 250 160 220 200 Q 180 220 200 250 Z" fill="#e0f7fa" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le gros nuage en blanc ou bleu très clair.' },
    { index: 18, pathData: '<path d="M 50 350 L 150 350 Q 160 320 130 310 Q 100 280 70 310 Q 40 320 50 350 Z" fill="#e0f7fa" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie aussi le petit nuage.' },
    { index: 19, pathData: '<circle cx="290" cy="90" r="10" fill="#ffc107" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Donne une couleur jaune magique à l\'étoile filante !' }
  ]
};
