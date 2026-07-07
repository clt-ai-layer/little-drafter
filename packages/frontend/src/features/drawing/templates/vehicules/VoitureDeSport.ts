import { Template } from '../index';

export const VOITURE_DE_SPORT_TEMPLATE: Template = {
  id: 'voiture-sport-1',
  name: 'Voiture de sport',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<rect x="60" y="240" width="280" height="40" rx="10" ry="10" />', instruction: 'Dessine un rectangle très plat pour le bas de la voiture.' },
    { index: 1, pathData: '<path d="M 120 240 L 160 180 L 240 180 L 280 240 Z" />', instruction: 'Dessine le toit profilé comme un trapèze.' },
    { index: 2, pathData: '<circle cx="120" cy="280" r="30" />', instruction: 'Dessine une grande roue à l\'arrière.' },
    { index: 3, pathData: '<circle cx="280" cy="280" r="30" />', instruction: 'Dessine une grande roue à l\'avant.' },
    { index: 4, pathData: '<circle cx="120" cy="280" r="15" />', instruction: 'Dessine la jante étoilée à l\'arrière.' },
    { index: 5, pathData: '<circle cx="280" cy="280" r="15" />', instruction: 'Dessine la jante étoilée à l\'avant.' },
    { index: 6, pathData: '<path d="M 170 190 L 230 190 L 250 230 L 160 230 Z" />', instruction: 'Dessine les vitres teintées.' },
    { index: 7, pathData: '<path d="M 340 250 L 330 250 L 330 270 L 340 270 Z" />', instruction: 'Ajoute un phare très fin à l\'avant.' },
    { index: 8, pathData: '<path d="M 60 250 L 50 250 L 50 260 L 60 260 Z" />', instruction: 'Ajoute le feu rouge à l\'arrière.' },
    { index: 9, pathData: '<path d="M 60 210 L 90 240 L 60 240 Z" />', instruction: 'Dessine un grand aileron à l\'arrière pour la vitesse !' },
    { index: 10, pathData: '<path d="M 40 280 L 20 280 M 50 290 L 10 290" fill="none" stroke-width="3" />', instruction: 'Ajoute des lignes de vitesse derrière la voiture !' },
    { index: 11, pathData: '<rect x="60" y="240" width="280" height="40" rx="10" ry="10" fill="red" style="mix-blend-mode: multiply" />', instruction: 'Colorie le bas de la voiture en rouge.' },
    { index: 12, pathData: '<path d="M 120 240 L 160 180 L 240 180 L 280 240 Z" fill="red" style="mix-blend-mode: multiply" />', instruction: 'Colorie le toit en rouge.' }
  ]
};
