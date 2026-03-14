import getHealthStatus from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Путник', health: 89 }, 'healthy'],
  [{ name: 'Путник', health: 50 }, 'wounded'],
  [{ name: 'Путник', health: 16 }, 'wounded'],
  [{ name: 'Страж', health: 15 }, 'critical'],
  [{ name: 'Страж', health: 9 }, 'critical'],
  [{ name: 'Мертвец', health: 0 }, 'critical'],
])('для health %p должен вернуть %s', (character, expected) => {
  expect(getHealthStatus(character)).toBe(expected);
});
