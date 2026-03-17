import { Character } from '../character';

describe('Character class', () => {
  let character;

  // Создаем нового пользователя перед каждым тестом
  beforeEach(() => {
    character = new Character('Mario', 90, 5, 'Archer');
  });

  test('should create character with the given parameters', () => {
    expect(character.name).toBe('Mario');
    expect(character.state).toBe(90);
    expect(character.level).toBe(5);
    expect(character.strategy).toBe('Archer');
  });
});
