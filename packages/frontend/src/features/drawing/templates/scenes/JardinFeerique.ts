import { Template } from '../index';

export const JARDIN_FEERIQUE_TEMPLATE: Template = {
  id: 'jardin_feerique',
  name: 'Jardin Féérique',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le pied du grand champignon.', svg: '<rect x="80" y="200" width="40" height="150" rx="10" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le chapeau du grand champignon.', svg: '<path d="M 40 200 Q 100 80 160 200 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un premier rond sur le grand champignon.', svg: '<circle cx="80" cy="150" r="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un deuxième rond.', svg: '<circle cx="120" cy="170" r="10" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le pied du petit champignon.', svg: '<rect x="220" y="250" width="30" height="100" rx="10" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le chapeau du petit champignon.', svg: '<path d="M 190 250 Q 235 150 280 250 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un rond sur le petit champignon.', svg: '<circle cx="235" cy="210" r="12" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la tête de la fée.', svg: '<circle cx="320" cy="100" r="20" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le corps de la fée.', svg: '<polygon points="320,120 300,180 340,180" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute le bras gauche.', svg: '<path d="M 310 130 L 280 150" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute le bras droit.', svg: '<path d="M 330 130 L 360 150" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le bâton de la baguette magique.', svg: '<line x1="280" y1="150" x2="260" y2="130" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'étoile ou le bout de la baguette.', svg: '<circle cx="260" cy="130" r="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'aile gauche.', svg: '<ellipse cx="290" cy="120" rx="20" ry="10" fill="none" stroke="black" stroke-width="4" transform="rotate(-30 290 120)" />' },
    { instruction: 'Dessine l\'aile droite.', svg: '<ellipse cx="350" cy="120" rx="20" ry="10" fill="none" stroke="black" stroke-width="4" transform="rotate(30 350 120)" />' },
    { instruction: 'Ajoute un peu de poussière brillante.', svg: '<circle cx="240" cy="100" r="3" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une autre poussière.', svg: '<circle cx="220" cy="140" r="3" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une dernière poussière.', svg: '<circle cx="200" cy="110" r="3" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie le pied du grand champignon.', svg: '<rect x="80" y="200" width="40" height="150" rx="10" fill="#f5d7b5" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le chapeau du grand champignon.', svg: '<path d="M 40 200 Q 100 80 160 200 Z" fill="#ff0000" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le pied du petit champignon.', svg: '<rect x="220" y="250" width="30" height="100" rx="10" fill="#f5d7b5" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le chapeau du petit champignon.', svg: '<path d="M 190 250 Q 235 150 280 250 Z" fill="#ff5555" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la robe de la fée.', svg: '<polygon points="320,120 300,180 340,180" fill="#aaaaff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les ailes de la fée.', svg: '<ellipse cx="290" cy="120" rx="20" ry="10" fill="#ccffff" style="mix-blend-mode: multiply" transform="rotate(-30 290 120)" /><ellipse cx="350" cy="120" rx="20" ry="10" fill="#ccffff" style="mix-blend-mode: multiply" transform="rotate(30 350 120)" />' },
    { instruction: 'Colorie la poussière magique.', svg: '<circle cx="240" cy="100" r="5" fill="#ffff00" style="mix-blend-mode: multiply" /><circle cx="220" cy="140" r="5" fill="#ffff00" style="mix-blend-mode: multiply" /><circle cx="200" cy="110" r="5" fill="#ffff00" style="mix-blend-mode: multiply" />' }
  ]
};
