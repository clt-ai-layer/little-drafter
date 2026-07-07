import { Template } from '../index';

export const GARE_TEMPLATE: Template = {
  id: 'gare',
  name: 'Gare',
  category: 'Scènes',
  steps: [
    { instruction: 'Dessine le rail du bas.', svg: '<line x1="50" y1="350" x2="350" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le rail du haut.', svg: '<line x1="100" y1="320" x2="300" y2="320" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la première traverse en bois.', svg: '<line x1="120" y1="320" x2="100" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la deuxième traverse.', svg: '<line x1="180" y1="320" x2="160" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la troisième traverse.', svg: '<line x1="240" y1="320" x2="220" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la quatrième traverse.', svg: '<line x1="300" y1="320" x2="280" y2="350" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le corps du train.', svg: '<rect x="80" y="220" width="100" height="80" rx="10" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la cabine du conducteur.', svg: '<rect x="180" y="180" width="60" height="120" rx="5" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la cheminée à l\'avant.', svg: '<polygon points="100,220 90,170 130,170 120,220" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la première roue.', svg: '<circle cx="110" cy="310" r="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la deuxième roue.', svg: '<circle cx="160" cy="310" r="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la troisième roue.', svg: '<circle cx="210" cy="310" r="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine la fenêtre de la cabine.', svg: '<rect x="190" y="200" width="30" height="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Trace le long poteau de l\'horloge.', svg: '<line x1="320" y1="280" x2="320" y2="100" stroke="black" stroke-width="4" />' },
    { instruction: 'Dessine le rond de l\'horloge.', svg: '<circle cx="320" cy="100" r="30" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la petite aiguille.', svg: '<line x1="320" y1="100" x2="320" y2="80" stroke="black" stroke-width="4" />' },
    { instruction: 'Ajoute la grande aiguille.', svg: '<line x1="320" y1="100" x2="335" y2="100" stroke="black" stroke-width="4" />' },
    { instruction: 'Fais un premier petit nuage de fumée.', svg: '<circle cx="100" cy="140" r="15" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Fais un deuxième nuage moyen.', svg: '<circle cx="120" cy="110" r="20" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Fais un grand nuage plus haut.', svg: '<circle cx="150" cy="80" r="25" fill="none" stroke="black" stroke-width="4" />' },
    { instruction: 'Colorie le corps de la locomotive.', svg: '<rect x="80" y="220" width="100" height="80" rx="10" fill="#cc0000" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la cabine.', svg: '<rect x="180" y="180" width="60" height="120" rx="5" fill="#0000cc" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie les roues et la cheminée.', svg: '<circle cx="110" cy="310" r="15" fill="#333333" style="mix-blend-mode: multiply" /><circle cx="160" cy="310" r="15" fill="#333333" style="mix-blend-mode: multiply" /><circle cx="210" cy="310" r="15" fill="#333333" style="mix-blend-mode: multiply" /><polygon points="100,220 90,170 130,170 120,220" fill="#555555" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie l\'horloge.', svg: '<circle cx="320" cy="100" r="30" fill="#ffffff" style="mix-blend-mode: multiply" />' },
    { instruction: 'Colorie la fumée.', svg: '<circle cx="100" cy="140" r="15" fill="#dddddd" style="mix-blend-mode: multiply" /><circle cx="120" cy="110" r="20" fill="#dddddd" style="mix-blend-mode: multiply" /><circle cx="150" cy="80" r="25" fill="#dddddd" style="mix-blend-mode: multiply" />' }
  ]
};
