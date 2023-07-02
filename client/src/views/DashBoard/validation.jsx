export default function validation(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere de un nombre para tu vianda";
  }
  if (!input.image) {
    errors.image = "Se requiere una imagen para tu vianda";
  }
  if (!input.description) {
    errors.description = "Describe tu vianda para hacerla más interesante";
  }
  if (!input.diets.length) {
    errors.diets =
      "¡Cuidado! Has olvidado indicar el tipo de dieta de tu vianda";
  }
  if (input.price < 0) {
    errors.price = "¡Cuidado! Los precios no pueden ser menores a cero";
  }
  if (input.discount < 0 || input.discount > 100) {
    errors.discount =
      "¡Cuidado! Los descuentos deben ser negativos ni superar el 100%";
  }
  if (!input.category) {
    errors.category =
      "¡Cuidado! Has olvidado indicar el tipo de categoría de tu vianda";
  }
  return errors;
}
