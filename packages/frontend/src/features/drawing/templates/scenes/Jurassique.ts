import { Template } from '../index';

export const JURASSIQUE_TEMPLATE: Template = {
  id: 'jurassique',
  name: 'Jurassique',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le côté gauche du volcan.', svg: '<line x1="150" y1="150" x2="50" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le côté droit du volcan.', svg: '<line x1="250" y1="150" x2="350" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la base du volcan.', svg: '<line x1="50" y1="350" x2="350" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le cratère au sommet.', svg: '<ellipse cx="200" cy="150" rx="50" ry="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la lave qui coule.', svg: '<path d="M 160 160 Q 180 200 170 230 Q 200 180 210 210 Q 230 190 240 160" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le corps du T-Rex (un grand ovale).', svg: '<ellipse cx="120" cy="280" rx="40" ry="60" transform="rotate(30 120 280)" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la tête du T-Rex.', svg: '<path d="M 140 230 Q 170 200 190 220 L 170 250 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la mâchoire ouverte.', svg: '<path d="M 170 250 L 190 240 L 160 260" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la patte arrière gauche.', svg: '<path d="M 100 320 L 100 360 L 80 360" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la patte arrière droite.', svg: '<path d="M 130 320 L 130 360 L 150 360" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le petit bras gauche.', svg: '<line x1="150" y1="270" x2="170" y2="280" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le petit bras droit.', svg: '<line x1="150" y1="280" x2="170" y2="290" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la grande queue.', svg: '<path d="M 90 290 Q 40 300 20 250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le tronc gauche du palmier.', svg: '<path d="M 320 350 Q 340 250 320 180" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le tronc droit du palmier.', svg: '<path d="M 340 350 Q 360 250 340 180" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une première feuille.', svg: '<path d="M 330 180 Q 280 160 300 200 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une deuxième feuille.', svg: '<path d="M 330 180 Q 380 160 360 200 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une troisième feuille.', svg: '<path d="M 330 180 Q 330 120 300 150 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une quatrième feuille.', svg: '<path d="M 330 180 Q 330 120 360 150 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie le volcan.', svg: '<path d="M 50 350 L 150 150 L 250 150 L 350 350 Z" fill="#8b5a2b" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la lave.', svg: '<path d="M 160 160 Q 180 200 170 230 Q 200 180 210 210 Q 230 190 240 160 Z" fill="#ff4500" style="mix-blend-mode: multiply" /><ellipse cx="200" cy="150" rx="50" ry="15" fill="#ff4500" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le T-Rex.', svg: '<ellipse cx="120" cy="280" rx="40" ry="60" transform="rotate(30 120 280)" fill="#2e8b57" style="mix-blend-mode: multiply" /><path d="M 140 230 Q 170 200 190 220 L 170 250 Z" fill="#2e8b57" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le tronc du palmier.', svg: '<path d="M 320 350 Q 340 250 320 180 L 340 180 Q 360 250 340 350 Z" fill="#8b4513" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les feuilles du palmier.', svg: '<path d="M 330 180 Q 280 160 300 200 Z" fill="#32cd32" style="mix-blend-mode: multiply" /><path d="M 330 180 Q 380 160 360 200 Z" fill="#32cd32" style="mix-blend-mode: multiply" /><path d="M 330 180 Q 330 120 300 150 Z" fill="#32cd32" style="mix-blend-mode: multiply" /><path d="M 330 180 Q 330 120 360 150 Z" fill="#32cd32" style="mix-blend-mode: multiply" />' }
  ]
};
