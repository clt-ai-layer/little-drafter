import { Template } from '../index';

export const FOND_MARIN_TEMPLATE: Template = {
  id: 'scene-fond-marin',
  name: 'Fond Marin',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 350 Q 100 320 200 360 T 400 340" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le sable au fond de l\'eau avec de petites vagues.' },
    { index: 1, pathData: '<ellipse cx="200" cy="180" rx="80" ry="40" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais un grand ovale pour construire un sous-marin.' },
    { index: 2, pathData: '<rect x="170" y="120" width="60" height="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute la cabine sur le toit du sous-marin.' },
    { index: 3, pathData: '<path d="M 190 120 L 190 80 L 220 80 L 220 90 L 200 90 L 200 120 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un drôle de tuyau : le périscope !' },
    { index: 4, pathData: '<path d="M 120 170 L 90 150 L 90 210 L 120 190 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine l\'hélice pointue à l\'arrière pour avancer.' },
    { index: 5, pathData: '<circle cx="230" cy="180" r="15" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace le premier hublot, une fenêtre toute ronde.' },
    { index: 6, pathData: '<circle cx="170" cy="180" r="15" fill="none" stroke="black" stroke-width="4" />', instruction: 'Et un deuxième hublot à côté.' },
    { index: 7, pathData: '<path d="M 50 340 Q 40 280 60 250 Q 80 290 70 345" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine une grande algue marine qui danse dans l\'eau.' },
    { index: 8, pathData: '<path d="M 90 330 Q 110 270 95 240 Q 75 280 85 330" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine une autre algue juste à côté.' },
    { index: 9, pathData: '<path d="M 320 350 Q 300 280 340 250 Q 360 290 350 340" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute une grande plante de l\'autre côté.' },
    { index: 10, pathData: '<ellipse cx="300" cy="100" rx="20" ry="10" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le petit corps d\'un poisson.' },
    { index: 11, pathData: '<path d="M 320 100 L 340 90 L 340 110 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute une queue en triangle pour le premier poisson.' },
    { index: 12, pathData: '<ellipse cx="350" cy="140" rx="15" ry="8" fill="none" stroke="black" stroke-width="4" />', instruction: 'Le corps d\'un deuxième poisson, plus petit.' },
    { index: 13, pathData: '<path d="M 365 140 L 380 130 L 380 150 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Sa petite queue pointue.' },
    { index: 14, pathData: '<circle cx="280" cy="80" r="5" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une petite bulle d\'air.' },
    { index: 15, pathData: '<circle cx="270" cy="50" r="8" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une plus grosse bulle.' },
    { index: 16, pathData: '<circle cx="290" cy="30" r="10" fill="none" stroke="black" stroke-width="4" />', instruction: 'Une énorme bulle qui remonte !' },
    { index: 17, pathData: '<rect x="0" y="0" width="400" height="400" fill="#e0f7fa" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie tout l\'océan en bleu très clair.' },
    { index: 18, pathData: '<path d="M 0 350 Q 100 320 200 360 T 400 340 L 400 400 L 0 400 Z" fill="#ffcc80" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le sable au fond en beige.' },
    { index: 19, pathData: '<ellipse cx="200" cy="180" rx="80" ry="40" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et un superbe sous-marin jaune fluo !' },
    { index: 20, pathData: '<rect x="170" y="120" width="60" height="20" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'La cabine du sous-marin aussi en jaune.' },
    { index: 21, pathData: '<circle cx="230" cy="180" r="15" fill="#4fc3f7" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Les hublots en bleu pour voir les poissons.' },
    { index: 22, pathData: '<path d="M 50 340 Q 40 280 60 250 Q 80 290 70 345 Z" fill="#4caf50" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Les algues en vert pour nourrir les poissons.' },
    { index: 23, pathData: '<ellipse cx="300" cy="100" rx="20" ry="10" fill="#ff9800" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le premier poisson en orange.' },
    { index: 24, pathData: '<path d="M 320 100 L 340 90 L 340 110 Z" fill="#ff9800" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Sa queue en orange aussi.' },
    { index: 25, pathData: '<ellipse cx="350" cy="140" rx="15" ry="8" fill="#e91e63" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et le petit poisson tout en rose mignon !' }
  ]
};
