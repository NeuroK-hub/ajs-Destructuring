export default function specialAttack(obj) {
  const arr = [];

  obj.special.forEach((e) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = e;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
