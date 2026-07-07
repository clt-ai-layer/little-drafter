import { Template } from '../index';

export const LAPIN_TEMPLATE: Template = {
  id: 'lapin',
  name: 'Lapin',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<circle cx="200" cy="160" r="50" fill="none" stroke="#9E9E9E" stroke-width="5"/>', instruction: 'Dessine un beau cercle pour la tête du lapin.' },
    { index: 1, pathData: '<ellipse cx="170" cy="70" rx="15" ry="50" fill="none" stroke="#9E9E9E" stroke-width="4"/>', instruction: 'Trace une très grande oreille pointue à gauche.' },
    { index: 2, pathData: '<ellipse cx="230" cy="70" rx="15" ry="50" fill="none" stroke="#9E9E9E" stroke-width="4"/>', instruction: 'Trace la deuxième grande oreille pointue à droite.' },
    { index: 3, pathData: '<ellipse cx="170" cy="70" rx="7" ry="35" fill="#F48FB1"/>', instruction: 'Colore l\'intérieur de l\'oreille gauche en rose.' },
    { index: 4, pathData: '<ellipse cx="230" cy="70" rx="7" ry="35" fill="#F48FB1"/>', instruction: 'Colore l\'intérieur de l\'oreille droite en rose.' },
    { index: 5, pathData: '<circle cx="180" cy="145" r="5" fill="#333"/>', instruction: 'Fais deux beaux yeux noirs. Voici le premier à gauche.' },
    { index: 6, pathData: '<circle cx="220" cy="145" r="5" fill="#333"/>', instruction: 'Et voici le deuxième à droite.' },
    { index: 7, pathData: '<ellipse cx="200" cy="165" rx="6" ry="4" fill="#F48FB1"/>', instruction: 'Dessine un tout petit nez rose au milieu.' },
    { index: 8, pathData: '<g><rect x="195" y="173" width="10" height="12" fill="white" stroke="#333" stroke-width="2"/> <line x1="200" y1="173" x2="200" y2="185" stroke="#333" stroke-width="2"/></g>', instruction: 'Ajoute deux petites dents rectangulaires qui dépassent.' },
    { index: 9, pathData: '<path d="M 180 165 L 140 155 M 180 170 L 140 170 M 220 165 L 260 155 M 220 170 L 260 170" stroke="#333" stroke-width="2"/>', instruction: 'Il lui faut de belles moustaches de chaque côté !' },
    { index: 10, pathData: '<ellipse cx="200" cy="260" rx="55" ry="65" fill="none" stroke="#9E9E9E" stroke-width="5"/>', instruction: 'Dessine un ovale sous sa tête pour faire le corps.' },
    { index: 11, pathData: '<ellipse cx="170" cy="250" rx="15" ry="30" fill="none" stroke="#9E9E9E" stroke-width="4"/>', instruction: 'Ajoute une petite patte avant croisée sur le ventre.' },
    { index: 12, pathData: '<ellipse cx="230" cy="250" rx="15" ry="30" fill="none" stroke="#9E9E9E" stroke-width="4"/>', instruction: 'Ajoute l\'autre petite patte avant.' },
    { index: 13, pathData: '<g><ellipse cx="140" cy="310" rx="40" ry="15" fill="none" stroke="#9E9E9E" stroke-width="5"/> <ellipse cx="260" cy="310" rx="40" ry="15" fill="none" stroke="#9E9E9E" stroke-width="5"/></g>', instruction: 'Trace deux très grands ovales en bas pour ses immenses pattes arrière !' },
    { index: 14, pathData: '<circle cx="260" cy="260" r="15" fill="none" stroke="#9E9E9E" stroke-width="4" stroke-dasharray="2 2"/>', instruction: 'Termine avec un tout petit pompon ébouriffé dans le dos pour sa queue.' },
    { index: 15, pathData: '<circle cx="200" cy="160" r="50" fill="#E0E0E0" style="mix-blend-mode: multiply" stroke="#9E9E9E" stroke-width="5"/>', instruction: 'Colorie sa tête en gris clair.' },
    { index: 16, pathData: '<ellipse cx="200" cy="260" rx="55" ry="65" fill="#E0E0E0" style="mix-blend-mode: multiply" stroke="#9E9E9E" stroke-width="5"/>', instruction: 'Colorie son petit corps rebondi en gris.' },
    { index: 17, pathData: '<g><ellipse cx="170" cy="70" rx="15" ry="50" fill="#E0E0E0" style="mix-blend-mode: multiply" stroke="#9E9E9E" stroke-width="4"/><ellipse cx="230" cy="70" rx="15" ry="50" fill="#E0E0E0" style="mix-blend-mode: multiply" stroke="#9E9E9E" stroke-width="4"/></g>', instruction: 'Colorie ses grandes oreilles en gris.' }
  ]
};
