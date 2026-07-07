import { Template } from '../index';

export const ROYAUME_MAGIQUE_TEMPLATE: Template = {
  id: 'royaume_magique',
  name: 'Royaume Magique',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le bâtiment principal du château.', svg: '<rect x="150" y="200" width="100" height="150" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le mur gauche de la tour gauche.', svg: '<line x1="110" y1="150" x2="110" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le mur droit de la tour gauche.', svg: '<line x1="150" y1="150" x2="150" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Ferme le haut de la tour gauche.', svg: '<line x1="110" y1="150" x2="150" y2="150" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le mur gauche de la tour droite.', svg: '<line x1="250" y1="150" x2="250" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le mur droit de la tour droite.', svg: '<line x1="290" y1="150" x2="290" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Ferme le haut de la tour droite.', svg: '<line x1="250" y1="150" x2="290" y2="150" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute le toit de la tour gauche.', svg: '<polygon points="110,150 130,90 150,150" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute le toit de la tour droite.', svg: '<polygon points="250,150 270,90 290,150" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute le toit central.', svg: '<polygon points="150,200 200,140 250,200" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la porte du château.', svg: '<path d="M 180 350 L 180 300 Q 200 270 220 300 L 220 350" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace le grand arc de l\'arc-en-ciel.', svg: '<path d="M 20 200 A 180 180 0 0 1 380 200" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace le deuxième arc.', svg: '<path d="M 40 200 A 160 160 0 0 1 360 200" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace le petit arc.', svg: '<path d="M 60 200 A 140 140 0 0 1 340 200" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le corps du dragon.', svg: '<ellipse cx="300" cy="100" rx="30" ry="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la tête du dragon.', svg: '<circle cx="260" cy="90" r="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'aile gauche du dragon.', svg: '<polygon points="300,85 280,50 310,70" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'aile droite du dragon.', svg: '<polygon points="310,85 330,50 320,70" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la queue du dragon.', svg: '<path d="M 330 100 Q 360 110 380 90" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie la tour gauche.', svg: '<rect x="110" y="150" width="40" height="200" fill="#cccccc" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la tour droite.', svg: '<rect x="250" y="150" width="40" height="200" fill="#cccccc" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le bâtiment principal.', svg: '<rect x="150" y="200" width="100" height="150" fill="#cccccc" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les toits.', svg: '<polygon points="110,150 130,90 150,150" fill="#ff4444" style="mix-blend-mode: multiply" /><polygon points="250,150 270,90 290,150" fill="#ff4444" style="mix-blend-mode: multiply" /><polygon points="150,200 200,140 250,200" fill="#ff4444" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la porte.', svg: '<path d="M 180 350 L 180 300 Q 200 270 220 300 L 220 350 Z" fill="#884400" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le premier arc-en-ciel.', svg: '<path d="M 20 200 A 180 180 0 0 1 380 200" fill="none" stroke="#ff0000" stroke-width="16" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le deuxième arc-en-ciel.', svg: '<path d="M 40 200 A 160 160 0 0 1 360 200" fill="none" stroke="#ffff00" stroke-width="16" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le troisième arc-en-ciel.', svg: '<path d="M 60 200 A 140 140 0 0 1 340 200" fill="none" stroke="#0000ff" stroke-width="16" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le corps et la tête du dragon.', svg: '<ellipse cx="300" cy="100" rx="30" ry="15" fill="#44ff44" style="mix-blend-mode: multiply" /><circle cx="260" cy="90" r="15" fill="#44ff44" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les ailes du dragon.', svg: '<polygon points="300,85 280,50 310,70" fill="#22aa22" style="mix-blend-mode: multiply" /><polygon points="310,85 330,50 320,70" fill="#22aa22" style="mix-blend-mode: multiply" />' }
  ]
};
