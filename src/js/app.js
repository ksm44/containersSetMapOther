import { Team } from './team';
import { Character }  from './character';

const BrothersOfSword = new Team('Братья меча');

const userFirst = new Character('Mario', 90, 5, 'Archer');
const userSecond = new Character('Alex', 80, 6, 'Warior');
const userThird = new Character('Bob', 75, 1, 'Wizard');

BrothersOfSword.add(userFirst);
BrothersOfSword.add(userSecond);
BrothersOfSword.add(userThird);
BrothersOfSword.add(userFirst);

BrothersOfSword.addAll(userFirst, userSecond, userThird, userFirst);

BrothersOfSword.toArray();
