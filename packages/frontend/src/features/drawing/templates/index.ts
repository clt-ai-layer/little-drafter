export interface DrawingStep {
  index: number;
  pathData: string;
  instruction: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  steps: DrawingStep[];
}

export { CHIEN_TEMPLATE } from './animaux/Chien';
export { CIGOGNE_TEMPLATE } from './animaux/Cigogne';
export { ELEPHANT_TEMPLATE } from './animaux/Elephant';
export { GIRAFE_TEMPLATE } from './animaux/Girafe';
export { GRENOUILLE_TEMPLATE } from './animaux/Grenouille';
export { HIPPOPOTAME_TEMPLATE } from './animaux/Hippopotame';
export { LAPIN_TEMPLATE } from './animaux/Lapin';
export { LION_TEMPLATE } from './animaux/Lion';
export { OURS_TEMPLATE } from './animaux/Ours';
export { SINGE_TEMPLATE } from './animaux/Singe';
export { VACHE_TEMPLATE } from './animaux/Vache';
export { APPLE_TEMPLATE } from './Apple';
export { BIRD_TEMPLATE } from './Bird';
export { BOAT_TEMPLATE } from './Boat';
export { BUTTERFLY_TEMPLATE } from './Butterfly';
export { CAR_TEMPLATE } from './Car';
export { CAT_TEMPLATE } from './Cat';
export { DOG_TEMPLATE } from './Dog';
export { FISH_TEMPLATE } from './Fish';
export { HOUSE_TEMPLATE } from './House';
export { CLOUD_TEMPLATE } from './nature/Cloud';
export { FLOWER_TEMPLATE } from './nature/Flower';
export { LEAF_TEMPLATE } from './nature/Leaf';
export { LOTUS_TEMPLATE } from './nature/Lotus';
export { MOUNTAIN_TEMPLATE } from './nature/Mountain';
export { RAINBOW_TEMPLATE } from './nature/Rainbow';
export { STAR_TEMPLATE } from './nature/Star';
export { SUN_TEMPLATE } from './nature/Sun';
export { TREE_TEMPLATE } from './nature/Tree';
export { WATER_DROP_TEMPLATE } from './nature/WaterDrop';
export { BAGUETTE_MAGIQUE_TEMPLATE } from './objets/BaguetteMagique';
export { CADEAU_TEMPLATE } from './objets/Cadeau';
export { CHAPEAU_MAGICIEN_TEMPLATE } from './objets/ChapeauMagicien';
export { CHATEAU_TEMPLATE } from './objets/Chateau';
export { CLE_MAGIQUE_TEMPLATE } from './objets/CleMagique';
export { COURONNE_TEMPLATE } from './objets/Couronne';
export { DIAMANT_TEMPLATE } from './objets/Diamant';
export { FUSEE_TEMPLATE } from './objets/Fusee';
export { LIVRE_MAGIQUE_TEMPLATE } from './objets/LivreMagique';
export { ROBOT_TEMPLATE } from './objets/Robot';
export { ROCKET_TEMPLATE } from './Rocket';
export { AVION_DE_LIGNE_TEMPLATE } from './vehicules/AvionDeLigne';
export { BATEAU_A_VOILE_TEMPLATE } from './vehicules/BateauAVoile';
export { CAMION_DE_POMPIER_TEMPLATE } from './vehicules/CamionDePompier';
export { FUSEE_SPATIALE_TEMPLATE } from './vehicules/FuseeSpatiale';
export { HELICOPTERE_TEMPLATE } from './vehicules/Helicoptere';
export { MOTO_TEMPLATE } from './vehicules/Moto';
export { SOUS_MARIN_TEMPLATE } from './vehicules/SousMarin';
export { TRACTEUR_TEMPLATE } from './vehicules/Tracteur';
export { TRAIN_TEMPLATE } from './vehicules/Train';
export { VOITURE_DE_SPORT_TEMPLATE } from './vehicules/VoitureDeSport';
export { AEROPORT_TEMPLATE } from './scenes/Aeroport';
export { BANQUISE_TEMPLATE } from './scenes/Banquise';
export { CHANTIER_TEMPLATE } from './scenes/Chantier';
export { CIEL_NOCTURNE_TEMPLATE } from './scenes/CielNocturne';
export { ESPACE_TEMPLATE } from './scenes/Espace';
export { FERME_TEMPLATE } from './scenes/Ferme';
export { FOND_MARIN_TEMPLATE } from './scenes/FondMarin';
export { FORET_TEMPLATE } from './scenes/Foret';
export { GARE_TEMPLATE } from './scenes/Gare';
export { GROTTE_TEMPLATE } from './scenes/Grotte';
export { HIVER_TEMPLATE } from './scenes/Hiver';
export { JARDIN_FEERIQUE_TEMPLATE } from './scenes/JardinFeerique';
export { JURASSIQUE_TEMPLATE } from './scenes/Jurassique';
export { MONTAGNE_TEMPLATE } from './scenes/Montagne';
export { PARC_TEMPLATE } from './scenes/Parc';
export { PIQUE_NIQUE_TEMPLATE } from './scenes/PiqueNique';
export { PLAGE_TEMPLATE } from './scenes/Plage';
export { PRAIRIE_TEMPLATE } from './scenes/Prairie';
export { ROYAUME_MAGIQUE_TEMPLATE } from './scenes/RoyaumeMagique';
export { VILLE_TEMPLATE } from './scenes/Ville';
import { CHIEN_TEMPLATE } from './animaux/Chien';
import { CIGOGNE_TEMPLATE } from './animaux/Cigogne';
import { ELEPHANT_TEMPLATE } from './animaux/Elephant';
import { GIRAFE_TEMPLATE } from './animaux/Girafe';
import { GRENOUILLE_TEMPLATE } from './animaux/Grenouille';
import { HIPPOPOTAME_TEMPLATE } from './animaux/Hippopotame';
import { LAPIN_TEMPLATE } from './animaux/Lapin';
import { LION_TEMPLATE } from './animaux/Lion';
import { OURS_TEMPLATE } from './animaux/Ours';
import { SINGE_TEMPLATE } from './animaux/Singe';
import { VACHE_TEMPLATE } from './animaux/Vache';
import { APPLE_TEMPLATE } from './Apple';
import { BIRD_TEMPLATE } from './Bird';
import { BOAT_TEMPLATE } from './Boat';
import { BUTTERFLY_TEMPLATE } from './Butterfly';
import { CAR_TEMPLATE } from './Car';
import { CAT_TEMPLATE } from './Cat';
import { DOG_TEMPLATE } from './Dog';
import { FISH_TEMPLATE } from './Fish';
import { HOUSE_TEMPLATE } from './House';
import { CLOUD_TEMPLATE } from './nature/Cloud';
import { FLOWER_TEMPLATE } from './nature/Flower';
import { LEAF_TEMPLATE } from './nature/Leaf';
import { LOTUS_TEMPLATE } from './nature/Lotus';
import { MOUNTAIN_TEMPLATE } from './nature/Mountain';
import { RAINBOW_TEMPLATE } from './nature/Rainbow';
import { STAR_TEMPLATE } from './nature/Star';
import { SUN_TEMPLATE } from './nature/Sun';
import { TREE_TEMPLATE } from './nature/Tree';
import { WATER_DROP_TEMPLATE } from './nature/WaterDrop';
import { BAGUETTE_MAGIQUE_TEMPLATE } from './objets/BaguetteMagique';
import { CADEAU_TEMPLATE } from './objets/Cadeau';
import { CHAPEAU_MAGICIEN_TEMPLATE } from './objets/ChapeauMagicien';
import { CHATEAU_TEMPLATE } from './objets/Chateau';
import { CLE_MAGIQUE_TEMPLATE } from './objets/CleMagique';
import { COURONNE_TEMPLATE } from './objets/Couronne';
import { DIAMANT_TEMPLATE } from './objets/Diamant';
import { FUSEE_TEMPLATE } from './objets/Fusee';
import { LIVRE_MAGIQUE_TEMPLATE } from './objets/LivreMagique';
import { ROBOT_TEMPLATE } from './objets/Robot';
import { ROCKET_TEMPLATE } from './Rocket';
import { AVION_DE_LIGNE_TEMPLATE } from './vehicules/AvionDeLigne';
import { BATEAU_A_VOILE_TEMPLATE } from './vehicules/BateauAVoile';
import { CAMION_DE_POMPIER_TEMPLATE } from './vehicules/CamionDePompier';
import { FUSEE_SPATIALE_TEMPLATE } from './vehicules/FuseeSpatiale';
import { HELICOPTERE_TEMPLATE } from './vehicules/Helicoptere';
import { MOTO_TEMPLATE } from './vehicules/Moto';
import { SOUS_MARIN_TEMPLATE } from './vehicules/SousMarin';
import { TRACTEUR_TEMPLATE } from './vehicules/Tracteur';
import { TRAIN_TEMPLATE } from './vehicules/Train';
import { VOITURE_DE_SPORT_TEMPLATE } from './vehicules/VoitureDeSport';
import { AEROPORT_TEMPLATE } from './scenes/Aeroport';
import { BANQUISE_TEMPLATE } from './scenes/Banquise';
import { CHANTIER_TEMPLATE } from './scenes/Chantier';
import { CIEL_NOCTURNE_TEMPLATE } from './scenes/CielNocturne';
import { ESPACE_TEMPLATE } from './scenes/Espace';
import { FERME_TEMPLATE } from './scenes/Ferme';
import { FOND_MARIN_TEMPLATE } from './scenes/FondMarin';
import { FORET_TEMPLATE } from './scenes/Foret';
import { GARE_TEMPLATE } from './scenes/Gare';
import { GROTTE_TEMPLATE } from './scenes/Grotte';
import { HIVER_TEMPLATE } from './scenes/Hiver';
import { JARDIN_FEERIQUE_TEMPLATE } from './scenes/JardinFeerique';
import { JURASSIQUE_TEMPLATE } from './scenes/Jurassique';
import { MONTAGNE_TEMPLATE } from './scenes/Montagne';
import { PARC_TEMPLATE } from './scenes/Parc';
import { PIQUE_NIQUE_TEMPLATE } from './scenes/PiqueNique';
import { PLAGE_TEMPLATE } from './scenes/Plage';
import { PRAIRIE_TEMPLATE } from './scenes/Prairie';
import { ROYAUME_MAGIQUE_TEMPLATE } from './scenes/RoyaumeMagique';
import { VILLE_TEMPLATE } from './scenes/Ville';

export const TEMPLATES: Template[] = [
  CHIEN_TEMPLATE,
  CIGOGNE_TEMPLATE,
  ELEPHANT_TEMPLATE,
  GIRAFE_TEMPLATE,
  GRENOUILLE_TEMPLATE,
  HIPPOPOTAME_TEMPLATE,
  LAPIN_TEMPLATE,
  LION_TEMPLATE,
  OURS_TEMPLATE,
  SINGE_TEMPLATE,
  VACHE_TEMPLATE,
  APPLE_TEMPLATE,
  BIRD_TEMPLATE,
  BOAT_TEMPLATE,
  BUTTERFLY_TEMPLATE,
  CAR_TEMPLATE,
  CAT_TEMPLATE,
  DOG_TEMPLATE,
  FISH_TEMPLATE,
  HOUSE_TEMPLATE,
  CLOUD_TEMPLATE,
  FLOWER_TEMPLATE,
  LEAF_TEMPLATE,
  LOTUS_TEMPLATE,
  MOUNTAIN_TEMPLATE,
  RAINBOW_TEMPLATE,
  STAR_TEMPLATE,
  SUN_TEMPLATE,
  TREE_TEMPLATE,
  WATER_DROP_TEMPLATE,
  BAGUETTE_MAGIQUE_TEMPLATE,
  CADEAU_TEMPLATE,
  CHAPEAU_MAGICIEN_TEMPLATE,
  CHATEAU_TEMPLATE,
  CLE_MAGIQUE_TEMPLATE,
  COURONNE_TEMPLATE,
  DIAMANT_TEMPLATE,
  FUSEE_TEMPLATE,
  LIVRE_MAGIQUE_TEMPLATE,
  ROBOT_TEMPLATE,
  ROCKET_TEMPLATE,
  AVION_DE_LIGNE_TEMPLATE,
  BATEAU_A_VOILE_TEMPLATE,
  CAMION_DE_POMPIER_TEMPLATE,
  FUSEE_SPATIALE_TEMPLATE,
  HELICOPTERE_TEMPLATE,
  MOTO_TEMPLATE,
  SOUS_MARIN_TEMPLATE,
  TRACTEUR_TEMPLATE,
  TRAIN_TEMPLATE,
  VOITURE_DE_SPORT_TEMPLATE,
  AEROPORT_TEMPLATE,
  BANQUISE_TEMPLATE,
  CHANTIER_TEMPLATE,
  CIEL_NOCTURNE_TEMPLATE,
  ESPACE_TEMPLATE,
  FERME_TEMPLATE,
  FOND_MARIN_TEMPLATE,
  FORET_TEMPLATE,
  GARE_TEMPLATE,
  GROTTE_TEMPLATE,
  HIVER_TEMPLATE,
  JARDIN_FEERIQUE_TEMPLATE,
  JURASSIQUE_TEMPLATE,
  MONTAGNE_TEMPLATE,
  PARC_TEMPLATE,
  PIQUE_NIQUE_TEMPLATE,
  PLAGE_TEMPLATE,
  PRAIRIE_TEMPLATE,
  ROYAUME_MAGIQUE_TEMPLATE,
  VILLE_TEMPLATE
];
