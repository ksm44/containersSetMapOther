import { Team } from '../team';
import { Character } from '../character';

describe('Team class', () => {
  let team;

  // Создаем новую команду перед каждым тестом
  beforeEach(() => {
    team = new Team('Команда персонажей');
  });

  test('should create team with name', () => {
    expect(team.name).toBe('Команда персонажей');
  });

  test('should create team with members', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('add should include unique characters in team', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const userFirst = new Character('Mario', 90, 5, 'Archer');
    const userSecond = new Character('Alex', 80, 6, 'Warior');

    team.add(userFirst);
      expect(team.members.size).toBe(1);
      expect(team.members.has(userFirst)).toBe(true);

    team.add(userFirst);
      expect(team.members.size).toBe(1);
      expect(team.members.has(userFirst)).toBe(true);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Ошибка: Персонаж Mario уже был добавлен в команду "Команда персонажей"'
      );
    consoleSpy.mockRestore();

    team.add(userSecond);
      expect(team.members.size).toBe(2);
      expect(team.members.has(userSecond)).toBe(true);
  });

test('addAll should include range of unique characters in team', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  const userFirst = new Character('Bob', 90, 5, 'Defender');
  const userSecond = new Character('Jack', 80, 6, 'Wizard');
  const userThird = new Character('Alex', 80, 6, 'NPC');

  team.addAll(userFirst, userSecond);
    expect(team.members.size).toBe(2);
    expect(team.members.has(userFirst)).toBe(true);
    expect(team.members.has(userSecond)).toBe(true);
  team.addAll(userThird, userFirst);
    expect(team.members.size).toBe(3);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Ошибка: Персонаж Bob уже был добавлен в команду "Команда персонажей"'
    );
  });

  test('toArray should return array of members (characters)', () => {
    const userFirst = new Character('Bob', 90, 5, 'Defender');
    const userSecond = new Character('Jack', 80, 6, 'Wizard');
    const userThird = new Character('Alex', 80, 6, 'NPC');

    team.addAll(userFirst, userSecond, userThird);
    
    expect(team.toArray()).toEqual([userFirst, userSecond, userThird]);
  });
});
