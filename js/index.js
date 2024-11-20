/*
	Se desea llevar un control de los préstamos que realiza una oficina. Se
	tiene por cada préstamo:

	- nombre del cliente,
	- código del préstamo,
	- monto y cantidad de meses.

	Se requiere de un programa que permita el registro de
	esta información, conociendo al principio de la ejecución el monto
	disponible para préstamos y el porcentaje de comisión mensual que se
	cobrará.

	Estructuras de datos recomendadas:
	- Cl_oficina: montoCaja, porcComisionMensual
	- Cl_prestamo: cliente, codigo, prestamo, meses Primeros requerimientos

	Los datos entrada vienen en un archivo (con import... ver anexo)
	- Monto final disponible
	- Clientes que pidieron por 2 meses
	- Clientes que pidieron el préstamo mínimo
*/

import Cl_oficina from "./Cl_oficina.js";
import Dt_oficina from "./Dt_oficina.js";
import Cl_prestamo from "./Cl_prestamo.js";
import Dt_prestamo from "./Dt_prestamo.js";

let salida1 = document.getElementById("salida1");
let salida2 = document.getElementById("salida2");
let opciones = document.getElementById("opciones");

salida1.innerHTML = `
	<br>Seleccione una opción:
	<br>1: Monto disponible en caja
	<br>2: Clientes que pidieron por dos meses
	<br>3: Clientes que pidieron el prestamo minimo
`;

let oficina = new Cl_oficina(
  Dt_oficina.montoDisponible,
  Dt_oficina.porcComisionMensual,
);

Dt_prestamo.forEach((prestamo) =>
  oficina.agregar_prestamo(
    new Cl_prestamo(
      prestamo.cliente,
      prestamo.codigo,
      prestamo.prestamo,
      prestamo.meses,
    ),
  ),
);

let monto_final_disponible = () => {
  let monto_final_disponible = oficina.monto_final_disponible();
  salida2.innerHTML = `
		El monto final disponible es:
		<strong>$${monto_final_disponible}</strong>
	`;
};

let clientes_2_meses = () => {
  let clientes_2_meses = oficina.clientes_2_meses();
  salida2.innerHTML = `
		Clientes que pidieron por 2 meses:
		<strong>${clientes_2_meses}</strong>
	`;
};

let clientes_prestamo_minimo = () => {
  let clientes_prestamo_minimo = oficina.clientes_prestamo_minimo();
  salida2.innerHTML = `
		Clientes que pidieron el prestamo minimo:
		<strong>${clientes_prestamo_minimo}</strong>
	`;
};

opciones.onclick = () => {
  let opcion = prompt("Porfavor introduzca su selección: ");
  switch (opcion) {
    case "1":
      monto_final_disponible();
      break;
    case "2":
      clientes_2_meses();
      break;
    case "3":
      clientes_prestamo_minimo();
      break;
  }
};
