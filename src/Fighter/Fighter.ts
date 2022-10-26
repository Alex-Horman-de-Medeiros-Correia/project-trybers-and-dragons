import Energy from '../Energy';

import SimpleFighter from './SimpleFigther';

export default interface Fighter extends SimpleFighter {
  /* lifePoints: number;
  strength: number; */
  defense: number;
  energy?: Energy;

  /* attack(enemy: Fighter): void; */
  special?(enemy: Fighter): void;
  levelUp(): void;
  /* receiveDamage(attackPoints: number): number; */
}
