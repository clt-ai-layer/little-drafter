import { Template } from '../index';

export const ELEPHANT_TEMPLATE: Template = {
  id: 'elephant',
  name: 'Éléphant',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="150" r="60" fill="none" stroke="#757575" stroke-width="5"/>', instruction: 'Dessine un grand cercle rond pour la tête de l\'éléphant.' },
    { index: 1, pathData: '<ellipse cx="120" cy="150" rx="40" ry="60" fill="none" stroke="#757575" stroke-width="5"/>', instruction: 'Dessine un grand ovale sur la gauche pour sa grande oreille.' },
    { index: 2, pathData: '<ellipse cx="280" cy="150" rx="40" ry="60" fill="none" stroke="#757575" stroke-width="5"/>', instruction: 'Dessine un autre grand ovale sur la droite pour sa deuxième oreille.' },
    { index: 3, pathData: '<circle cx="180" cy="130" r="6" fill="#333"/>', instruction: 'Ajoute un petit œil gauche.' },
    { index: 4, pathData: '<circle cx="220" cy="130" r="6" fill="#333"/>', instruction: 'Ajoute un petit œil droit.' },
    { index: 5, pathData: '<path d="M 190 170 Q 190 250 160 270 Q 180 280 210 270 Q 210 220 210 170 Z" fill="#9E9E9E" stroke="#757575" stroke-width="3"/>', instruction: 'Dessine une longue trompe qui descend depuis le milieu du visage.' },
    { index: 6, pathData: '<path d="M 170 170 Q 140 180 130 150 M 230 170 Q 260 180 270 150" fill="none" stroke="white" stroke-width="4"/>', instruction: 'Dessine deux belles défenses blanches pointues près de sa trompe.' },
    { index: 7, pathData: '<rect x="140" y="210" width="120" height="100" rx="30" fill="none" stroke="#757575" stroke-width="5"/>', instruction: 'Dessine un gros rectangle arrondi en dessous pour son corps.' },
    { index: 8, pathData: '<rect x="150" y="310" width="25" height="50" rx="5" fill="none" stroke="#757575" stroke-width="4"/>', instruction: 'Ajoute une patte épaisse et carrée devant à gauche.' },
    { index: 9, pathData: '<rect x="225" y="310" width="25" height="50" rx="5" fill="none" stroke="#757575" stroke-width="4"/>', instruction: 'Ajoute une patte épaisse et carrée devant à droite.' },
    { index: 10, pathData: '<rect x="130" y="290" width="25" height="50" rx="5" fill="none" stroke="#757575" stroke-width="4"/>', instruction: 'Ajoute une patte arrière gauche un peu cachée.' },
    { index: 11, pathData: '<rect x="245" y="290" width="25" height="50" rx="5" fill="none" stroke="#757575" stroke-width="4"/>', instruction: 'Ajoute une patte arrière droite de l\'autre côté.' },
    { index: 12, pathData: '<path d="M 260 250 Q 290 260 290 300" fill="none" stroke="#757575" stroke-width="4"/>', instruction: 'Dessine une petite queue fine derrière l\'éléphant.' },
    { index: 13, pathData: '<circle cx="290" cy="300" r="4" fill="#333"/>', instruction: 'Ajoute des petits poils au bout de sa queue.' },
    { index: 14, pathData: '<circle cx="200" cy="150" r="60" fill="#E0E0E0" style="mix-blend-mode: multiply" stroke="#757575" stroke-width="5"/>', instruction: 'Colorie la tête en gris.' },
    { index: 15, pathData: '<rect x="140" y="210" width="120" height="100" rx="30" fill="#E0E0E0" style="mix-blend-mode: multiply" stroke="#757575" stroke-width="5"/>', instruction: 'Colorie son corps en gris.' },
    { index: 16, pathData: '<g><ellipse cx="120" cy="150" rx="40" ry="60" fill="#BDBDBD" style="mix-blend-mode: multiply" stroke="#757575" stroke-width="5"/><ellipse cx="280" cy="150" rx="40" ry="60" fill="#BDBDBD" style="mix-blend-mode: multiply" stroke="#757575" stroke-width="5"/></g>', instruction: 'Colorie ses grandes oreilles en gris plus foncé.' }
  ]
};
