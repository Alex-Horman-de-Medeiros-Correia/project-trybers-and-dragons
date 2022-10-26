import Archetype from './Archetype';

import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _archetypeInstance = 0;
  
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._archetypeInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
