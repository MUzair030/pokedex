import bug from "../assets/types/bug.png";
import dark from "../assets/types/dark.svg";
import dragon from "../assets/types/dragon.png";
import electric from "../assets/types/electric.svg";
import fairy from "../assets/types/fairy.svg";
import fighting from "../assets/types/fighting.svg";
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import ghost from "../assets/types/ghost.png";
import grass from "../assets/types/grass.png";
import ground from "../assets/types/ground.svg";
import ice from "../assets/types/ice.svg";
import normal from "../assets/types/normal.svg";
import poison from "../assets/types/poison.svg";
import psychic from "../assets/types/psychic.svg";
import rock from "../assets/types/rock.svg";
import steel from "../assets/types/steel.svg";
import water from "../assets/types/water.svg";
import { IPokemonTypesDetails } from "./Types";

const Bug = "bug";
const Dark = "dark";
const Dragon = "dragon";
const Electric = "electric";
const Fairy = "fairy";
const Fighting = "fighting";
const Fire = "fire";
const Flying = "flying";
const Ghost = "ghost";
const Grass = "grass";
const Ground = "ground";
const Ice = "ice";
const Normal = "normal";
const Poison = "poison";
const Psychic = "psychic";
const Rock = "rock";
const Steel = "steel";
const Water = "water";

export const pokemonTypesDetails:any = {
  bug: {
    name: "bug",
    image: bug,
    strength: [Grass, Psychic, Dark],
    weakness: [Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy],
    resistance: [Fighting, Ground, Grass],
    vulnerable: [Flying, Rock, Fire],
  },
  dark: {
    name: "dark",
    image: dark,
    strength: [Ghost, Psychic],
    weakness: [Fighting, Dark, Fairy],
    resistance: [Ghost, Psychic, Dark],
    vulnerable: [Fighting, Bug, Fairy],
  },
  dragon: {
    name: "dragon",
    image: dragon,
    strength: [Dragon],
    weakness: [Steel, Fairy],
    resistance: [Fire, Water, Grass, Electric],
    vulnerable: [Ice, Dragon, Fairy],
  },
  electric: {
    name: "electric",
    image: electric,
    strength: [Flying, Water],
    weakness: [Ground, Grass, Electric, Dragon],
    resistance: [Flying, Steel, Electric],
    vulnerable: [Ground],
  },
  fairy: {
    name: "fairy",
    image: fairy,
    strength: [Fighting, Dragon, Dark],
    weakness: [Poison, Steel, Fire],
    resistance: [Fighting, Bug, Dragon, Dark],
    vulnerable: [Poison, Steel],
  },
  fighting: {
    name: "fighting",
    image: fighting,
    strength: [Normal, Rock, Steel, Ice, Dark],
    weakness: [Flying, Poison, Psychic, Bug, Ghost, Fairy],
    resistance: [Rock, Bug, Dark],
    vulnerable: [Flying, Psychic, Fairy],
  },
  fire: {
    name: "fire",
    image: fire,
    strength: [Bug, Steel, Grass, Ice],
    weakness: [Rock, Fire, Water, Dragon],
    resistance: [Bug, Steel, Fire, Grass, Ice],
    vulnerable: [Ground, Rock, Water],
  },
  flying: {
    name: "flying",
    image: flying,
    strength: [Fighting, Bug, Grass],
    weakness: [Rock, Steel, Electric],
    resistance: [Fighting, Ground, Bug, Grass],
    vulnerable: [Rock, Electric, Ice],
  },
  ghost: {
    name: "ghost",
    image: ghost,
    strength: [Ghost, Psychic],
    weakness: [Normal, Dark],
    resistance: [Normal, Fighting, Poison, Bug],
    vulnerable: [Ghost, Dark],
  },
  grass: {
    name: "grass",
    image: grass,
    strength: [Ground, Rock, Water],
    weakness: [Flying, Poison, Bug, Steel, Fire, Grass, Dragon],
    resistance: [Ground, Water, Grass, Electric],
    vulnerable: [Flying, Poison, Bug, Fire, Ice],
  },
  ground: {
    name: "ground",
    image: ground,
    strength: [Poison, Rock, Steel, Fire, Electric],
    weakness: [Flying, Bug, Grass],
    resistance: [Poison, Rock, Electric],
    vulnerable: [Water, Grass, Ice],
  },
  ice: {
    name: "ice",
    image: ice,
    strength: [Flying, Ground, Grass, Dragon],
    weakness: [Steel, Fire, Water, Ice],
    resistance: [Ice],
    vulnerable: [Fighting, Rock, Steel, Fire],
  },
  normal: {
    name: "normal",
    image: normal,
    strength: [],
    weakness: [Rock, Ghost, Steel],
    resistance: [Ghost],
    vulnerable: [Fighting],
  },
  poison: {
    name: "poison",
    image: poison,
    strength: [Grass, Fairy],
    weakness: [Poison, Ground, Rock, Ghost, Steel],
    resistance: [Fighting, Poison, Grass, Fairy],
    vulnerable: [Ground, Psychic],
  },
  psychic: {
    name: "psychic",
    image: psychic,
    strength: [Fighting, Poison],
    weakness: [Steel, Psychic, Dark],
    resistance: [Fighting, Psychic],
    vulnerable: [Bug, Ghost, Dark],
  },
  rock: {
    name: "rock",
    image: rock,
    strength: [Flying, Bug, Fire, Ice],
    weakness: [Fighting, Ground, Steel],
    resistance: [Normal, Flying, Poison, Fire],
    vulnerable: [Fighting, Ground, Steel, Water, Grass],
  },
  steel: {
    name: "steel",
    image: steel,
    strength: [Rock, Ice, Fairy],
    weakness: [Steel, Fire, Water, Electric],
    resistance: [
      Normal,
      Flying,
      Poison,
      Rock,
      Bug,
      Steel,
      Grass,
      Psychic,
      Ice,
      Dragon,
      Fairy,
    ],
    vulnerable: [Fighting, Ground, Fire],
  },
  water: {
    name: "water",
    image: water,
    strength: [Ground, Rock, Fire],
    weakness: [Water, Grass, Dragon],
    resistance: [Steel, Fire, Water, Ice],
    vulnerable: [Grass, Electric],
  },
};


export const getPokemonTypeDetails = (type: string) => {
  return pokemonTypesDetails[type];

}