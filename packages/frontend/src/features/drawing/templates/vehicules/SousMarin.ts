import { Template } from '../index';

export const SOUS_MARIN_TEMPLATE: Template = {
  id: 'sous-marin-1',
  name: 'Sous-marin',
  category: 'Véhicules',
  steps: [
    { index: 0, pathData: '<path d="M 100 200 C 100 130, 300 130, 330 200 C 300 270, 100 270, 100 200 Z" />', instruction: 'Dessine le corps du sous-marin comme un gros ballon de rugby.' },
    { index: 1, pathData: '<rect x="170" y="130" width="60" height="40" />', instruction: 'Dessine un rectangle sur le dos pour faire le kiosque.' },
    { index: 2, pathData: '<path d="M 200 130 L 200 80 L 220 80 L 220 90 L 210 90 L 210 130 Z" />', instruction: 'Dessine le périscope en forme de crochet qui sort du toit.' },
    { index: 3, pathData: '<circle cx="150" cy="200" r="15" />', instruction: 'Dessine un premier hublot rond.' },
    { index: 4, pathData: '<circle cx="210" cy="200" r="15" />', instruction: 'Dessine un deuxième hublot.' },
    { index: 5, pathData: '<circle cx="270" cy="200" r="15" />', instruction: 'Dessine un troisième hublot pour regarder les poissons.' },
    { index: 6, pathData: '<path d="M 100 200 L 60 160 L 60 240 Z" />', instruction: 'Dessine un triangle à l\'arrière pour l\'hélice.' },
    { index: 7, pathData: '<path d="M 180 150 L 220 150" fill="none" stroke-width="2" />', instruction: 'Fais une petite ligne sur le kiosque pour la porte.' },
    { index: 8, pathData: '<path d="M 100 220 L 80 260 M 100 180 L 80 140" fill="none" stroke-width="4" />', instruction: 'Ajoute de petites nageoires à l\'arrière du sous-marin.' },
    { index: 9, pathData: '<circle cx="340" cy="180" r="5" fill="none" stroke-width="2" />', instruction: 'Dessine une petite bulle d\'air dans l\'eau.' },
    { index: 10, pathData: '<circle cx="350" cy="150" r="8" fill="none" stroke-width="2" />', instruction: 'Dessine une moyenne bulle d\'air.' },
    { index: 11, pathData: '<circle cx="330" cy="120" r="12" fill="none" stroke-width="2" />', instruction: 'Dessine une grande bulle d\'air qui remonte à la surface !' },
    { index: 12, pathData: '<path d="M 100 200 C 100 130, 300 130, 330 200 C 300 270, 100 270, 100 200 Z" fill="yellow" style="mix-blend-mode: multiply" />', instruction: 'Colorie le sous-marin en jaune.' },
    { index: 13, pathData: '<rect x="170" y="130" width="60" height="40" fill="yellow" style="mix-blend-mode: multiply" />', instruction: 'Colorie le kiosque en jaune.' }
  ]
};
