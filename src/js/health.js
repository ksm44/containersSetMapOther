export default function getHealthStatus(character) {
  let result;
  if (character.health > 50) {
    result = 'healthy';
  } else if (character.health > 15) {
    result = 'wounded';
  } else {
    result = 'critical';
  }
  return result;
}
