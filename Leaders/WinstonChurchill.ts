import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import English from '../English';

export class WinstonChurchill extends Leader {
  static civilization(): typeof Civilization {
    return English;
  }

  name(): string {
    return 'Winston Churchill';
  }
}

export default WinstonChurchill;
