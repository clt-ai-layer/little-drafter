import { Template } from '../index';

const pieces = [
  '<circle cx="80" cy="80" r="30" fill="#FFEB3B" stroke="#FBC02D" stroke-width="6"/>',
  '<path d="M 80 30 L 80 40 M 80 120 L 80 130 M 30 80 L 40 80 M 120 80 L 130 80 M 45 45 L 55 55 M 105 105 L 115 115 M 45 115 L 55 105 M 105 45 L 115 55" stroke="#FBC02D" stroke-width="6" stroke-linecap="round"/>',
  '<polygon points="200,100 100,300 300,300" fill="#8D6E63" stroke="#5D4037" stroke-width="8" stroke-linejoin="round"/>',
  '<polygon points="120,170 50,300 190,300" fill="#A1887F" stroke="#5D4037" stroke-width="8" stroke-linejoin="round"/>',
  '<polygon points="280,150 210,300 350,300" fill="#A1887F" stroke="#5D4037" stroke-width="8" stroke-linejoin="round"/>',
  '<polygon points="200,100 170,160 200,140 230,160" fill="#FFF" stroke="#5D4037" stroke-width="4" stroke-linejoin="round"/>',
  '<polygon points="120,170 100,205 120,195 140,205" fill="#FFF" stroke="#5D4037" stroke-width="4" stroke-linejoin="round"/>',
  '<polygon points="280,150 255,195 280,185 305,195" fill="#FFF" stroke="#5D4037" stroke-width="4" stroke-linejoin="round"/>',
  '<path d="M 280 80 Q 290 60 310 70 Q 330 60 340 80 Q 360 90 340 100 Q 320 110 300 100 Q 280 100 280 80 Z" fill="#FFF" stroke="#B0BEC5" stroke-width="4"/>',
  '<path d="M 150 70 Q 160 60 170 70 Q 180 60 190 70" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>',
  '<path d="M 150 70 Q 160 60 170 70 Q 180 60 190 70" fill="#212121" stroke="#333" stroke-width="4" stroke-linecap="round" style="mix-blend-mode: multiply"/>',
  '<path d="M 80 30 L 80 40 M 80 120 L 80 130 M 30 80 L 40 80 M 120 80 L 130 80 M 45 45 L 55 55 M 105 105 L 115 115 M 45 115 L 55 105 M 105 45 L 115 55" fill="#FFF59D" stroke="#FBC02D" stroke-width="6" stroke-linecap="round" style="mix-blend-mode: multiply"/>'
];

const instructions = [
  'Dessine un petit soleil jaune',
  'Ajoute des rayons tout autour du soleil',
  'Dessine un grand triangle pour la montagne',
  'Ajoute une plus petite montagne à gauche',
  'Ajoute une montagne moyenne à droite',
  'Dessine la neige au sommet de la grande montagne',
  'Ajoute la neige sur la montagne de gauche',
  'Ajoute la neige sur la montagne de droite',
  'Dessine un joli nuage dans le ciel',
  'Dessine un petit oiseau qui vole',
  'Colorie l\'oiseau en noir',
  'Colorie les rayons du soleil en jaune clair'
];

export const MOUNTAIN_TEMPLATE: Template = {
  id: 'nature-mountain',
  name: 'Montagne',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
