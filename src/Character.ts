import Energy from './Energy';
import { Mage } from './Archetypes';
import Archetype from './Archetypes/Archetype';
import getRandomInt from './utils';
import { Elf } from './Races';
import Race from './Races/Race';
import Fighter from './Fighter';

export default class Chatacter implements Fighter {
  private _lifePoints: number;
  private _name: string;
  private _archetype: Archetype;
  private _race: Race;
  private _maxLifePoints: number;
  private _energy: Energy;
  private _strength: number;
  private _dexterity: number;
  private _defense: number;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._name = name;
    this._race = new Elf(this._name, this.dexterity);
    this._archetype = new Mage(this._name);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._strength = getRandomInt(1, 10);
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      const lifePointsUpdate = this._lifePoints - damage;
      if (lifePointsUpdate <= 0) {
        this._lifePoints = -1;
        return this._lifePoints;
      }

      this._lifePoints = lifePointsUpdate;
    }

    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }
}