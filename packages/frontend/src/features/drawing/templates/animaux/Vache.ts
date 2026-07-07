import { Template } from '../index';

export const VACHE_TEMPLATE: Template = {
  id: 'vache',
  name: 'Vache',
  category: 'Animaux',
  steps: [
    { index: 0, pathData: '<rect x="150" y="80" width="100" height="90" rx="30" fill="none" stroke="#333" stroke-width="5"/>', instruction: 'Dessine un grand rectangle avec les coins ronds pour la tête de la vache.' },
    { index: 1, pathData: '<ellipse cx="200" cy="150" rx="45" ry="30" fill="#F8BBD0" stroke="#333" stroke-width="4"/>', instruction: 'Fais un ovale rose en bas de la tête pour son grand museau.' },
    { index: 2, pathData: '<circle cx="180" cy="145" r="4" fill="#333"/>', instruction: 'Dessine la narine gauche dans le nez rose.' },
    { index: 3, pathData: '<circle cx="220" cy="145" r="4" fill="#333"/>', instruction: 'Dessine la narine droite dans le nez rose.' },
    { index: 4, pathData: '<path d="M 180 165 Q 200 175 220 165" fill="none" stroke="#333" stroke-width="3"/>', instruction: 'Ajoute lui un petit sourire.' },
    { index: 5, pathData: '<circle cx="175" cy="110" r="6" fill="#333"/>', instruction: 'Fais lui un bel œil gauche.' },
    { index: 6, pathData: '<circle cx="225" cy="110" r="6" fill="#333"/>', instruction: 'Fais lui un bel œil droit.' },
    { index: 7, pathData: '<path d="M 150 90 Q 120 70 130 50 Q 150 60 165 80 Z" fill="white" stroke="#333" stroke-width="3"/>', instruction: 'Dessine une petite corne pointue à gauche.' },
    { index: 8, pathData: '<path d="M 250 90 Q 280 70 270 50 Q 250 60 235 80 Z" fill="white" stroke="#333" stroke-width="3"/>', instruction: 'Dessine la deuxième corne à droite.' },
    { index: 9, pathData: '<ellipse cx="130" cy="100" rx="20" ry="10" fill="none" stroke="#333" stroke-width="3"/>', instruction: 'Ajoute une oreille horizontale sous la corne gauche.' },
    { index: 10, pathData: '<ellipse cx="270" cy="100" rx="20" ry="10" fill="none" stroke="#333" stroke-width="3"/>', instruction: 'Ajoute une oreille horizontale sous la corne droite.' },
    { index: 11, pathData: '<rect x="120" y="170" width="160" height="110" rx="40" fill="none" stroke="#333" stroke-width="5"/>', instruction: 'Dessine un très grand corps rectangulaire arrondi sous sa tête.' },
    { index: 12, pathData: '<path d="M 130 190 Q 150 180 160 210 Q 140 230 130 190 Z M 250 200 Q 270 220 240 260 Q 210 240 250 200 Z" fill="#333"/>', instruction: 'Dessine de grosses taches noires sur son dos, les vaches adorent les taches !' },
    { index: 13, pathData: '<path d="M 140 280 L 140 340 L 160 340 L 160 280 M 240 280 L 240 340 L 260 340 L 260 280 M 175 280 L 175 320 L 190 320 L 190 280 M 210 280 L 210 320 L 225 320 L 225 280" fill="none" stroke="#333" stroke-width="5"/>', instruction: 'Ajoute ses quatre pattes rectangulaires en bas du corps.' },
    { index: 14, pathData: '<path d="M 180 280 Q 200 310 220 280 Z" fill="#F8BBD0" stroke="#333" stroke-width="3"/>', instruction: 'Enfin, dessine les petits pis roses sous le ventre pour donner du bon lait !' },
    { index: 15, pathData: '<rect x="150" y="80" width="100" height="90" rx="30" fill="#F5F5F5" style="mix-blend-mode: multiply" stroke="#333" stroke-width="5"/>', instruction: 'Colorie sa tête en blanc.' },
    { index: 16, pathData: '<rect x="120" y="170" width="160" height="110" rx="40" fill="#F5F5F5" style="mix-blend-mode: multiply" stroke="#333" stroke-width="5"/>', instruction: 'Colorie son grand corps.' }
  ]
};
