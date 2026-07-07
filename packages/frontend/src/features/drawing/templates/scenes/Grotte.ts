import { Template } from '../index';

export const GROTTE_TEMPLATE: Template = {
  id: 'grotte',
  name: 'Grotte',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le haut de l\'entrée de la grotte.', svg: '<path d="M 50 350 Q 200 50 350 350" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le fond de la grotte.', svg: '<path d="M 100 350 Q 200 100 300 350" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine une stalactite qui pend.', svg: '<polygon points="150,165 170,220 190,145" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine une autre stalactite.', svg: '<polygon points="210,135 230,190 250,140" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un nid de dinosaure.', svg: '<path d="M 120 350 Q 200 380 280 350" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un premier oeuf dans le nid.', svg: '<ellipse cx="160" cy="330" rx="20" ry="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un deuxième oeuf.', svg: '<ellipse cx="200" cy="320" rx="20" ry="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un troisième oeuf.', svg: '<ellipse cx="240" cy="330" rx="20" ry="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Fais de petites taches sur le troisième oeuf.', svg: '<circle cx="235" cy="320" r="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une autre tache.', svg: '<circle cx="245" cy="340" r="4" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le corps du ptérodactyle.', svg: '<ellipse cx="200" cy="80" rx="10" ry="25" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la tête pointue du ptérodactyle.', svg: '<path d="M 200 55 L 240 40 L 205 65" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine sa crête à l\'arrière.', svg: '<polygon points="200,55 180,45 195,65" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'aile gauche.', svg: '<path d="M 195 80 L 130 50 L 195 100" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'aile droite.', svg: '<path d="M 205 80 L 270 50 L 205 100" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie le contour de la grotte.', svg: '<path d="M 50 350 Q 200 50 350 350 L 300 350 Q 200 100 100 350 Z" fill="#808080" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie l\'intérieur sombre de la grotte.', svg: '<path d="M 100 350 Q 200 100 300 350 Z" fill="#404040" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le nid.', svg: '<path d="M 120 350 Q 200 380 280 350 Z" fill="#8b4513" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le premier oeuf.', svg: '<ellipse cx="160" cy="330" rx="20" ry="30" fill="#f5deb3" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les autres oeufs.', svg: '<ellipse cx="200" cy="320" rx="20" ry="30" fill="#f5deb3" style="mix-blend-mode: multiply" /><ellipse cx="240" cy="330" rx="20" ry="30" fill="#f5deb3" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le corps et la tête du ptérodactyle.', svg: '<ellipse cx="200" cy="80" rx="10" ry="25" fill="#d2691e" style="mix-blend-mode: multiply" /><path d="M 200 55 L 240 40 L 205 65 Z" fill="#cd853f" style="mix-blend-mode: multiply" /><polygon points="200,55 180,45 195,65" fill="#cd853f" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les ailes.', svg: '<path d="M 195 80 L 130 50 L 195 100 Z" fill="#cd853f" style="mix-blend-mode: multiply" /><path d="M 205 80 L 270 50 L 205 100 Z" fill="#cd853f" style="mix-blend-mode: multiply" />' }
  ]
};
