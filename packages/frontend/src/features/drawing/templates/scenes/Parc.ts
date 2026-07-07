import { Template } from '../index';

export const PARC_TEMPLATE: Template = {
  id: 'parc',
  name: 'Parc',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le poteau gauche de la balançoire.', svg: '<path d="M 50 250 L 100 100 L 70 250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le poteau droit.', svg: '<path d="M 250 100 L 300 250 M 250 100 L 270 250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Relie les poteaux avec la barre du haut.', svg: '<line x1="100" y1="100" x2="250" y2="100" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la corde gauche.', svg: '<line x1="140" y1="100" x2="140" y2="200" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la corde droite.', svg: '<line x1="210" y1="100" x2="210" y2="200" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute le siège de la balançoire.', svg: '<rect x="130" y="200" width="90" height="15" rx="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le poteau gauche du toboggan.', svg: '<line x1="330" y1="250" x2="330" y2="120" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le poteau droit du toboggan.', svg: '<line x1="360" y1="250" x2="360" y2="120" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la première marche.', svg: '<line x1="330" y1="150" x2="360" y2="150" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la deuxième marche.', svg: '<line x1="330" y1="180" x2="360" y2="180" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la troisième marche.', svg: '<line x1="330" y1="210" x2="360" y2="210" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le côté gauche de la glissière.', svg: '<path d="M 330 120 Q 280 150 220 250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le côté droit de la glissière.', svg: '<path d="M 360 120 Q 310 150 250 250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le pied gauche du banc.', svg: '<rect x="30" y="320" width="10" height="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le pied droit du banc.', svg: '<rect x="130" y="320" width="10" height="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'assise du banc.', svg: '<rect x="20" y="300" width="130" height="20" rx="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le dossier du banc.', svg: '<rect x="20" y="270" width="130" height="20" rx="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute les supports du dossier.', svg: '<line x1="40" y1="290" x2="40" y2="300" stroke="black" stroke-width="4" /><line x1="120" y1="290" x2="120" y2="300" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie la structure de la balançoire.', svg: '<path d="M 50 250 L 100 100 L 250 100 L 300 250" fill="none" stroke="#aa5500" stroke-width="6" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le siège de la balançoire.', svg: '<rect x="130" y="200" width="90" height="15" rx="5" fill="#ff0000" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le toboggan.', svg: '<path d="M 330 120 Q 280 150 220 250 L 250 250 Q 310 150 360 120 Z" fill="#00aaff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie l\'assise et le dossier du banc.', svg: '<rect x="20" y="300" width="130" height="20" rx="5" fill="#00cc00" style="mix-blend-mode: multiply" /><rect x="20" y="270" width="130" height="20" rx="5" fill="#00cc00" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les pieds du banc.', svg: '<rect x="30" y="320" width="10" height="30" fill="#555555" style="mix-blend-mode: multiply" /><rect x="130" y="320" width="10" height="30" fill="#555555" style="mix-blend-mode: multiply" />' }
  ]
};
