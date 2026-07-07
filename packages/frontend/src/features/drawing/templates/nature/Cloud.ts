import { Template } from '../index';

const pieces = [
  '<path d="M 130 250 L 270 250" fill="none" stroke="#4A90E2" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 130 250 A 40 40 0 0 1 110 180" fill="none" stroke="#4A90E2" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 110 180 A 50 50 0 0 1 180 130" fill="none" stroke="#4A90E2" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 180 130 A 60 60 0 0 1 260 160" fill="none" stroke="#4A90E2" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 260 160 A 45 45 0 0 1 270 250" fill="none" stroke="#4A90E2" stroke-width="12" stroke-linecap="round"/>',
  '<path d="M 130 250 L 270 250 A 45 45 0 0 0 260 160 A 60 60 0 0 0 180 130 A 50 50 0 0 0 110 180 A 40 40 0 0 0 130 250 Z" fill="#E1F5FE" opacity="0.8"/>',
  '<circle cx="160" cy="190" r="8" fill="#333"/>',
  '<circle cx="240" cy="190" r="8" fill="#333"/>',
  '<path d="M 190 210 Q 200 220 210 210" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/>',
  '<circle cx="140" cy="210" r="10" fill="#FF8A80" opacity="0.6"/>',
  '<circle cx="260" cy="210" r="10" fill="#FF8A80" opacity="0.6"/>',
  '<path d="M 130 250 A 40 40 0 0 1 110 180" fill="#BBDEFB" stroke="#4A90E2" stroke-width="12" stroke-linecap="round" style="mix-blend-mode: multiply"/>',
  '<path d="M 110 180 A 50 50 0 0 1 180 130" fill="#B3E5FC" stroke="#4A90E2" stroke-width="12" stroke-linecap="round" style="mix-blend-mode: multiply"/>'
];

const instructions = [
  'Dessine une ligne droite pour le bas du nuage',
  'Ajoute une petite bosse à gauche',
  'Dessine une grande bosse en haut à gauche',
  'Dessine la plus grande bosse en haut à droite',
  'Ferme le nuage avec une dernière bosse à droite',
  'Colorie le nuage en bleu clair',
  'Dessine l\'œil gauche',
  'Dessine l\'œil droit',
  'Ajoute un petit sourire',
  'Colorie la joue gauche en rose',
  'Colorie la joue droite en rose',
  'Colorie la petite bosse en bleu clair',
  'Colorie la grande bosse en bleu'
];

export const CLOUD_TEMPLATE: Template = {
  id: 'nature-cloud',
  name: 'Nuage',
  category: 'Nature',
  steps: pieces.map((_, i) => ({
    instruction: instructions[i],
    svg: `<svg viewBox="0 0 400 400">${pieces.slice(0, i + 1).join('')}</svg>`
  }))
};
