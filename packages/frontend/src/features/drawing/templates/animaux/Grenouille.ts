import { Template } from '../index';

export const GRENOUILLE_TEMPLATE: Template = {
  id: 'grenouille',
  name: 'Grenouille',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<ellipse cx="200" cy="200" rx="80" ry="60" fill="none" stroke="#4CAF50" stroke-width="6"/>', instruction: 'Dessine un grand ovale tout plat pour le corps de la grenouille.' },
    { index: 1, pathData: '<circle cx="160" cy="140" r="25" fill="none" stroke="#4CAF50" stroke-width="5"/>', instruction: 'Trace un premier rond en haut à gauche pour le gros œil globuleux.' },
    { index: 2, pathData: '<circle cx="240" cy="140" r="25" fill="none" stroke="#4CAF50" stroke-width="5"/>', instruction: 'Trace un deuxième rond en haut à droite pour l\'autre œil.' },
    { index: 3, pathData: '<circle cx="160" cy="140" r="8" fill="#333"/>', instruction: 'Ajoute une grosse pupille noire dans l\'œil gauche.' },
    { index: 4, pathData: '<circle cx="240" cy="140" r="8" fill="#333"/>', instruction: 'Ajoute l\'autre pupille noire dans l\'œil droit.' },
    { index: 5, pathData: '<path d="M 140 200 Q 200 240 260 200" fill="none" stroke="#333" stroke-width="4"/>', instruction: 'Dessine lui un très grand sourire majestueux !' },
    { index: 6, pathData: '<circle cx="135" cy="195" r="8" fill="#F48FB1"/>', instruction: 'Un petit rond rose pour sa joue gauche.' },
    { index: 7, pathData: '<circle cx="265" cy="195" r="8" fill="#F48FB1"/>', instruction: 'Un petit rond rose pour sa joue droite.' },
    { index: 8, pathData: '<path d="M 160 250 L 140 300 L 150 310" fill="none" stroke="#4CAF50" stroke-width="5"/>', instruction: 'Dessine une petite patte avant à gauche.' },
    { index: 9, pathData: '<path d="M 240 250 L 260 300 L 250 310" fill="none" stroke="#4CAF50" stroke-width="5"/>', instruction: 'Dessine une petite patte avant à droite.' },
    { index: 10, pathData: '<path d="M 120 200 Q 80 180 60 230 Q 80 280 120 250" fill="none" stroke="#4CAF50" stroke-width="5"/>', instruction: 'Trace une grande patte arrière gauche pliée en arc de cercle.' },
    { index: 11, pathData: '<path d="M 60 230 L 40 220 M 60 230 L 30 240 M 60 230 L 45 260" stroke="#4CAF50" stroke-width="4"/>', instruction: 'Fais des palmes pour la patte gauche (comme trois petits doigts).' },
    { index: 12, pathData: '<path d="M 280 200 Q 320 180 340 230 Q 320 280 280 250" fill="none" stroke="#4CAF50" stroke-width="5"/>', instruction: 'Trace une grande patte arrière droite pliée de l\'autre côté.' },
    { index: 13, pathData: '<path d="M 340 230 L 360 220 M 340 230 L 370 240 M 340 230 L 355 260" stroke="#4CAF50" stroke-width="4"/>', instruction: 'Et fais les trois petits doigts palmés à droite.' },
    { index: 14, pathData: '<ellipse cx="200" cy="330" rx="150" ry="20" fill="none" stroke="#81C784" stroke-width="3"/>', instruction: 'Termine en dessinant un nénuphar sur lequel elle se pose, comme un grand plateau plat !' },
    { index: 15, pathData: '<ellipse cx="200" cy="200" rx="80" ry="60" fill="#A5D6A7" style="mix-blend-mode: multiply" stroke="#4CAF50" stroke-width="6"/>', instruction: 'Colorie son grand corps en vert clair.' },
    { index: 16, pathData: '<ellipse cx="200" cy="330" rx="150" ry="20" fill="#81C784" style="mix-blend-mode: multiply" stroke="#81C784" stroke-width="3"/>', instruction: 'Colorie son nénuphar avec un beau vert.' }
  ]
};
