import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import English from '../English';

export class ElizabethI extends Leader {
  static civilization(): typeof Civilization {
    return English;
  }

  name(): string {
    return 'Elizabeth I';
  }
}

export default ElizabethI;
