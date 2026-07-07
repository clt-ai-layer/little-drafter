import { Template } from '../index';

export const FERME_TEMPLATE: Template = {
  id: 'scene-ferme',
  name: 'Ferme',
  category: 'Scènes',
  steps: [
    { index: 0, pathData: '<path d="M 0 350 L 400 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace une grande ligne toute droite pour l\'herbe de la ferme.' },
    { index: 1, pathData: '<rect x="30" y="150" width="140" height="200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un grand carré pour faire le mur de la grange.' },
    { index: 2, pathData: '<path d="M 20 150 L 100 80 L 180 150 Z" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute un joli toit pointu en triangle.' },
    { index: 3, pathData: '<rect x="70" y="250" width="60" height="100" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la porte rectangulaire de la grange.' },
    { index: 4, pathData: '<path d="M 70 250 L 130 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace un trait en diagonale sur la porte.' },
    { index: 5, pathData: '<path d="M 130 250 L 70 350" fill="none" stroke="black" stroke-width="4" />', instruction: 'Trace un autre trait pour former une croix (X).' },
    { index: 6, pathData: '<circle cx="100" cy="200" r="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine une fenêtre ronde en haut.' },
    { index: 7, pathData: '<path d="M 100 180 L 100 220 M 80 200 L 120 200" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais les barreaux de la fenêtre.' },
    { index: 8, pathData: '<rect x="250" y="250" width="100" height="60" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le corps du tracteur.' },
    { index: 9, pathData: '<rect x="290" y="190" width="60" height="60" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute la cabine pour le fermier au-dessus.' },
    { index: 10, pathData: '<circle cx="270" cy="320" r="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la grosse roue arrière du tracteur.' },
    { index: 11, pathData: '<circle cx="270" cy="320" r="10" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un petit cercle à l\'intérieur de la grosse roue.' },
    { index: 12, pathData: '<circle cx="330" cy="330" r="20" fill="none" stroke="black" stroke-width="4" />', instruction: 'Fais la petite roue avant.' },
    { index: 13, pathData: '<circle cx="330" cy="330" r="7" fill="none" stroke="black" stroke-width="4" />', instruction: 'Un petit cercle au centre de la petite roue.' },
    { index: 14, pathData: '<path d="M 260 250 L 260 210" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine le pot d\'échappement (tuyau) du tracteur.' },
    { index: 15, pathData: '<circle cx="350" cy="50" r="30" fill="none" stroke="black" stroke-width="4" />', instruction: 'Dessine un grand soleil tout rond dans le ciel.' },
    { index: 16, pathData: '<path d="M 350 10 L 350 20 M 350 80 L 350 90 M 310 50 L 320 50 M 380 50 L 390 50" fill="none" stroke="black" stroke-width="4" />', instruction: 'Ajoute les rayons du soleil.' },
    { index: 17, pathData: '<rect x="30" y="150" width="140" height="200" fill="#e53935" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie la grange en beau rouge !' },
    { index: 18, pathData: '<path d="M 20 150 L 100 80 L 180 150 Z" fill="#8d6e63" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Le toit de la grange en marron.' },
    { index: 19, pathData: '<rect x="250" y="250" width="100" height="60" fill="#4caf50" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le bas du tracteur en vert.' },
    { index: 20, pathData: '<rect x="290" y="190" width="60" height="60" fill="#81c784" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et la cabine du tracteur aussi en vert.' },
    { index: 21, pathData: '<circle cx="270" cy="320" r="30" fill="#212121" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie les grosses roues en noir.' },
    { index: 22, pathData: '<circle cx="330" cy="330" r="20" fill="#212121" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Puis les petites roues en noir.' },
    { index: 23, pathData: '<circle cx="350" cy="50" r="30" fill="#ffeb3b" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Colorie le soleil en jaune lumineux.' },
    { index: 24, pathData: '<rect x="0" y="350" width="400" height="50" fill="#cddc39" stroke="none" style="mix-blend-mode: multiply" />', instruction: 'Et l\'herbe du sol en vert tendre !' }
  ]
};
