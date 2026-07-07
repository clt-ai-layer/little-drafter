import { Template } from '../index';

export const CHANTIER_TEMPLATE: Template = {
  id: 'scene-chantier',
  name: 'Chantier',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 350 L 400 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace le sol du chantier avec une longue ligne.' },
    { index: 1, pathData: '<rect x="40" y="50" width="20" height="300" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le long mât géant de la grue !' },
    { index: 2, pathData: '<path d="M 40 50 L 60 50 L 60 350 L 40 350 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais quelques lignes pour solidifier la grue.' },
    { index: 3, pathData: '<rect x="0" y="80" width="300" height="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le grand bras horizontal de la grue.' },
    { index: 4, pathData: '<rect x="250" y="100" width="20" height="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le chariot qui glisse sur la grue.' },
    { index: 5, pathData: '<path d="M 260 120 L 260 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Laisse pendre un long câble.' },
    { index: 6, pathData: '<path d="M 250 200 Q 260 220 270 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un gros crochet au bout du câble.' },
    { index: 7, pathData: '<rect x="150" y="270" width="60" height="50" fill="none" stroke="black" stroke-width="4" />', instruction: 'Maintenant, dessine la cabine du gros camion-benne.' },
    { index: 8, pathData: '<path d="M 220 270 L 320 250 L 320 310 L 220 310 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine la benne qui est levée à l\'arrière.' },
    { index: 9, pathData: '<circle cx="180" cy="330" r="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la grosse roue avant.' },
    { index: 10, pathData: '<circle cx="280" cy="330" r="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Puis la très grosse roue arrière du camion.' },
    { index: 11, pathData: '<path d="M 310 250 Q 330 220 350 260 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un gros tas de sable ou de terre qui tombe !' },
    { index: 12, pathData: '<rect x="160" y="280" width="30" height="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine la vitre de la cabine.' },
    { index: 13, pathData: '<path d="M 330 350 L 350 310 L 370 350 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un cône de sécurité pour faire attention.' },
    { index: 14, pathData: '<path d="M 340 330 L 360 330" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un trait sur le cône.' },
    { index: 15, pathData: '<path d="M 345 320 L 355 320" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un autre petit trait sur le cône.' },
    { index: 16, pathData: '<rect x="40" y="50" width="20" height="300" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le mât de la grue en jaune fluo !' },
    { index: 17, pathData: '<rect x="0" y="80" width="300" height="20" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Le grand bras de la grue en jaune aussi.' },
    { index: 18, pathData: '<rect x="150" y="270" width="60" height="50" fill="#ff9800" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la cabine du camion en beau orange.' },
    { index: 19, pathData: '<path d="M 220 270 L 320 250 L 320 310 L 220 310 Z" fill="#2196f3" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la benne du camion en bleu clair.' },
    { index: 20, pathData: '<circle cx="180" cy="330" r="20" fill="#212121" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Les pneus du camion en noir.' },
    { index: 21, pathData: '<circle cx="280" cy="330" r="20" fill="#212121" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'L\'autre pneu aussi.' },
    { index: 22, pathData: '<path d="M 310 250 Q 330 220 350 260 Z" fill="#795548" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le tas de terre en marron.' },
    { index: 23, pathData: '<path d="M 330 350 L 350 310 L 370 350 Z" fill="#ff5722" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et enfin le cône de signalisation en rouge orange !' }
  ]
};
