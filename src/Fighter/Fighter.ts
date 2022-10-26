import Energy from '../Energy';

interface Fighter {
  strength: number;
  lifePoints: number;
  energy?: Energy;
  defense: number;

  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number
  attack(enemy: Fighter): void;
}

export default Fighter;
