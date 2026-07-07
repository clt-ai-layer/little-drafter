import { Template } from '../index';

export const AEROPORT_TEMPLATE: Template = {
  id: 'aeroport',
  name: 'Aéroport',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le bord supérieur de la piste.', svg: '<line x1="150" y1="250" x2="250" y2="250" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine les côtés de la piste.', svg: '<path d="M 150 250 L 50 350 M 250 250 L 350 350" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ferme le bas de la piste.', svg: '<line x1="50" y1="350" x2="350" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une première ligne pointillée.', svg: '<line x1="200" y1="260" x2="200" y2="280" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute une deuxième ligne pointillée.', svg: '<line x1="200" y1="300" x2="200" y2="330" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la base de la tour de contrôle.', svg: '<rect x="300" y="150" width="30" height="100" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la salle d\'observation.', svg: '<polygon points="280,150 350,150 340,110 290,110" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le mât de l\'antenne.', svg: '<line x1="315" y1="110" x2="315" y2="70" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la boule au-dessus.', svg: '<circle cx="315" cy="70" r="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le long corps de l\'avion.', svg: '<ellipse cx="150" cy="100" rx="80" ry="20" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la fenêtre du cockpit.', svg: '<path d="M 200 90 Q 220 85 220 100" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'aile gauche (vers le haut).', svg: '<polygon points="140,85 170,50 180,85" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine l\'aile droite (vers le bas).', svg: '<polygon points="130,115 160,150 170,115" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la queue de l\'avion.', svg: '<polygon points="80,95 60,60 100,90" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute un premier hublot.', svg: '<circle cx="120" cy="100" r="4" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute un deuxième hublot.', svg: '<circle cx="140" cy="100" r="4" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute un troisième hublot.', svg: '<circle cx="160" cy="100" r="4" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie la piste en gris foncé.', svg: '<polygon points="50,350 350,350 250,250 150,250" fill="#555555" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la base de la tour.', svg: '<rect x="300" y="150" width="30" height="100" fill="#cccccc" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le poste d\'observation.', svg: '<polygon points="280,150 350,150 340,110 290,110" fill="#87ceeb" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le corps de l\'avion.', svg: '<ellipse cx="150" cy="100" rx="80" ry="20" fill="#ffffff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les ailes et la queue.', svg: '<polygon points="140,85 170,50 180,85" fill="#ff0000" style="mix-blend-mode: multiply" /><polygon points="130,115 160,150 170,115" fill="#ff0000" style="mix-blend-mode: multiply" /><polygon points="80,95 60,60 100,90" fill="#ff0000" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie le cockpit et les hublots.', svg: '<path d="M 200 90 Q 220 85 220 100 Z" fill="#87ceeb" style="mix-blend-mode: multiply" /><circle cx="120" cy="100" r="4" fill="#87ceeb" style="mix-blend-mode: multiply" /><circle cx="140" cy="100" r="4" fill="#87ceeb" style="mix-blend-mode: multiply" /><circle cx="160" cy="100" r="4" fill="#87ceeb" style="mix-blend-mode: multiply" />' }
  ]
};
