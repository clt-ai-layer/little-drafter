import { Template } from '../index';

export const BANQUISE_TEMPLATE: Template = {
  id: 'banquise',
  name: 'Banquise',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le grand dôme de l\'igloo.', svg: '<path d="M 200 300 A 100 100 0 0 1 400 300" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace une première ligne de blocs de glace.', svg: '<path d="M 215 250 Q 300 240 385 250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace une deuxième ligne.', svg: '<path d="M 250 220 Q 300 210 350 220" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'arc extérieur de l\'entrée.', svg: '<path d="M 250 300 A 40 40 0 0 1 330 300" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'arc intérieur.', svg: '<path d="M 260 300 A 30 30 0 0 1 320 300" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un morceau de glace flottante.', svg: '<path d="M 20 320 Q 100 300 180 320 Q 150 350 100 350 Q 50 350 20 320 Z" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le corps rond du pingouin.', svg: '<ellipse cx="100" cy="250" rx="30" ry="40" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine son ventre blanc.', svg: '<ellipse cx="100" cy="260" rx="20" ry="25" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la tête ronde.', svg: '<circle cx="100" cy="200" r="20" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute le premier oeil.', svg: '<circle cx="92" cy="195" r="3" fill="black" />' },
    { instruction: 'Ajoute le deuxième oeil.', svg: '<circle cx="108" cy="195" r="3" fill="black" />' },
    { instruction: 'Dessine un bec pointu.', svg: '<polygon points="95,205 105,205 100,215" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la nageoire gauche.', svg: '<path d="M 70 240 Q 50 270 75 280" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la nageoire droite.', svg: '<path d="M 130 240 Q 150 270 125 280" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la petite patte gauche.', svg: '<ellipse cx="85" cy="295" rx="10" ry="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la petite patte droite.', svg: '<ellipse cx="115" cy="295" rx="10" ry="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie le dôme de l\'igloo.', svg: '<path d="M 200 300 A 100 100 0 0 1 400 300 Z" fill="#e0f7fa" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie l\'entrée de l\'igloo.', svg: '<path d="M 260 300 A 30 30 0 0 1 320 300 Z" fill="#4dd0e1" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la glace flottante sur l\'eau.', svg: '<path d="M 20 320 Q 100 300 180 320 Q 150 350 100 350 Q 50 350 20 320 Z" fill="#b2ebf2" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le corps et la tête du pingouin en noir.', svg: '<ellipse cx="100" cy="250" rx="30" ry="40" fill="#333333" style="mix-blend-mode: multiply" /><circle cx="100" cy="200" r="20" fill="#333333" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le ventre en blanc.', svg: '<ellipse cx="100" cy="260" rx="20" ry="25" fill="#ffffff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le bec et les pattes en orange.', svg: '<polygon points="95,205 105,205 100,215" fill="#ff9800" style="mix-blend-mode: multiply" /><ellipse cx="85" cy="295" rx="10" ry="5" fill="#ff9800" style="mix-blend-mode: multiply" /><ellipse cx="115" cy="295" rx="10" ry="5" fill="#ff9800" style="mix-blend-mode: multiply" />' }
  ]
};
