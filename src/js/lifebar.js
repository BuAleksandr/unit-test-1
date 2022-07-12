export default function lifeBar(value) {
  if (!value || !value.health) {
    throw new Error('Передано некорректное значение');
  }

  if (value.health > 50) {
    throw new Error('healthy');
  }

  if (value.health <= 50 && value.health > 15) {
    throw new Error ('wounded');
  }

  if (value.health <= 15) {
    throw new Error ('critical');
  }

  throw new Error ('Значение health некорректное');
}
