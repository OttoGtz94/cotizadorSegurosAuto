// Obtiene el año actual y le resta el año del coche
export function obtenerDiferenciaYear(year) {
	return new Date().getFullYear() - year;
}

// Calcula el total a pagar según la marca
export function calcularMarca(marca) {
	let incremento;

	switch (marca) {
		case 'europeo':
			incremento = 1.3;
			break;
		case 'americano':
			incremento = 1.15;
			break;
		case 'asiatico':
			incremento = 1.05;
			break;
		default:
			break;
	}
	return incremento;
}

// Calcula el total dependiendo el plan
export function obtenerPlan(plan) {
	return plan === 'basico' ? 1.2 : 1.5;
}

// Primera letra a mayuscula
export function primerMayuscula(texto) {
	return texto.charAt(0).toUpperCase() + texto.slice(1);
}
