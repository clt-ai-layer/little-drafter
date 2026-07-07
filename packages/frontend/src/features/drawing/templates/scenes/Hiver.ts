import { Template } from '../index';

export const HIVER_TEMPLATE: Template = {
  id: 'hiver',
  name: 'Hiver',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine un grand cercle pour la base du bonhomme.', svg: '<circle cx="100" cy="300" r="40" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un cercle moyen au-dessus.', svg: '<circle cx="100" cy="240" r="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine un petit cercle pour la tête.', svg: '<circle cx="100" cy="190" r="20" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le bord plat du chapeau.', svg: '<rect x="85" y="170" width="30" height="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le haut du chapeau.', svg: '<rect x="90" y="140" width="20" height="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute un bras en branche à gauche.', svg: '<line x1="70" y1="240" x2="30" y2="220" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute un bras à droite.', svg: '<line x1="130" y1="240" x2="170" y2="220" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine une carotte pour le nez.', svg: '<polygon points="100,190 120,195 100,200" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le mur gauche de la cabane.', svg: '<line x1="220" y1="250" x2="220" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le mur droit.', svg: '<line x1="340" y1="250" x2="340" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Relie les murs en bas.', svg: '<line x1="220" y1="350" x2="340" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le grand toit enneigé.', svg: '<polygon points="200,250 280,180 360,250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la porte de la cabane.', svg: '<rect x="260" y="300" width="40" height="50" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine une petite fenêtre carrée.', svg: '<rect x="230" y="270" width="20" height="20" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le bas du sapin.', svg: '<polygon points="40,250 20,290 60,290" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le haut du sapin.', svg: '<polygon points="40,210 25,250 55,250" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie le ventre et la base du bonhomme.', svg: '<circle cx="100" cy="300" r="40" fill="#ffffff" style="mix-blend-mode: multiply" /><circle cx="100" cy="240" r="30" fill="#ffffff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la tête.', svg: '<circle cx="100" cy="190" r="20" fill="#ffffff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le chapeau.', svg: '<rect x="85" y="170" width="30" height="5" fill="#333333" style="mix-blend-mode: multiply" /><rect x="90" y="140" width="20" height="30" fill="#333333" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la carotte.', svg: '<polygon points="100,190 120,195 100,200" fill="#ffa500" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les murs de la cabane.', svg: '<rect x="220" y="250" width="120" height="100" fill="#8b4513" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le toit avec du blanc de neige.', svg: '<polygon points="200,250 280,180 360,250" fill="#ffffff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la porte et la fenêtre.', svg: '<rect x="260" y="300" width="40" height="50" fill="#654321" style="mix-blend-mode: multiply" /><rect x="230" y="270" width="20" height="20" fill="#87ceeb" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le sapin.', svg: '<polygon points="40,250 20,290 60,290" fill="#228b22" style="mix-blend-mode: multiply" /><polygon points="40,210 25,250 55,250" fill="#228b22" style="mix-blend-mode: multiply" />' }
  ]
};
