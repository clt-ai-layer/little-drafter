import { Template } from '../index';

export const PIQUE_NIQUE_TEMPLATE: Template = {
  id: 'pique_nique',
  name: 'Pique-nique',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le côté haut de la nappe.', svg: '<line x1="120" y1="250" x2="280" y2="250" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le côté gauche de la nappe.', svg: '<line x1="120" y1="250" x2="50" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le côté droit de la nappe.', svg: '<line x1="280" y1="250" x2="350" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le bord inférieur.', svg: '<line x1="50" y1="350" x2="350" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace une première ligne sur la nappe.', svg: '<line x1="160" y1="250" x2="100" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace une deuxième ligne.', svg: '<line x1="200" y1="250" x2="150" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace une troisième ligne.', svg: '<line x1="240" y1="250" x2="200" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le bas du panier.', svg: '<path d="M 170 200 L 230 200 L 240 260 L 160 260 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la anse du panier.', svg: '<path d="M 170 200 Q 200 130 230 200" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un triangle pour le sandwich.', svg: '<polygon points="120,300 160,280 150,320" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un rond pour une pomme.', svg: '<circle cx="260" cy="300" r="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la queue de la pomme.', svg: '<path d="M 260 285 Q 265 275 270 275" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le haut du cerf-volant.', svg: '<path d="M 270 80 L 300 50 L 330 80" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le bas du cerf-volant.', svg: '<path d="M 270 80 L 300 140 L 330 80" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace la ligne verticale du cerf-volant.', svg: '<line x1="300" y1="50" x2="300" y2="140" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace la ligne horizontale du cerf-volant.', svg: '<line x1="270" y1="80" x2="330" y2="80" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la queue du cerf-volant.', svg: '<path d="M 300 140 Q 320 170 290 200 T 300 250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute un premier petit noeud.', svg: '<polygon points="305,170 315,165 315,175" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute un deuxième noeud.', svg: '<polygon points="285,210 275,205 275,215" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie la nappe.', svg: '<polygon points="50,350 350,350 280,250 120,250" fill="#ffaaaa" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le panier.', svg: '<path d="M 170 200 L 230 200 L 240 260 L 160 260 Z" fill="#d2a679" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le sandwich et la pomme.', svg: '<polygon points="120,300 160,280 150,320" fill="#ffff99" style="mix-blend-mode: multiply" /><circle cx="260" cy="300" r="15" fill="#ff0000" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le cerf-volant.', svg: '<polygon points="300,50 330,80 300,140 270,80" fill="#00ccff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les noeuds du cerf-volant.', svg: '<polygon points="305,170 315,165 315,175" fill="#ff00ff" style="mix-blend-mode: multiply" /><polygon points="285,210 275,205 275,215" fill="#ff00ff" style="mix-blend-mode: multiply" />' }
  ]
};
