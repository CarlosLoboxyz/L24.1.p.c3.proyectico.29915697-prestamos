export default class Cl_oficina {
  constructor(montoDisponible, porcComisionMensual) {
    this.montoDisponible = montoDisponible;
    this.porcComisionMensual = porcComisionMensual;
    this.prestamos = [];
  }

  agregar_prestamo(prestamo) {
    this.prestamos.push(prestamo);
  }

  monto_final_disponible() {
    let monto_final = this.montoDisponible;
    for (let i = 0; i < this.prestamos.length; i++) {
      monto_final -= this.prestamos[i].prestamo;
    }
    return monto_final;
  }

  clientes_2_meses() {
    let clientes2Meses = [];
    let codigo2Meses = 0;
    for (let i = 0; i < this.prestamos.length; i++) {
      if (this.prestamos[i].meses == 2) {
        clientes2Meses.push(this.prestamos[i].cliente);
        codigo2Meses = this.prestamos[i].codigo;
      }
    }
    return clientes2Meses + " " + codigo2Meses;
  }

  clientes_prestamo_minimo() {
    let prestamoMinimo = this.prestamos[0].prestamo;
    let nombrePrestamoMinimo = "";
    let codigoPrestamoMinimo = 0;
    for (let i = 0; i < this.prestamos.length; i++) {
      if (this.prestamos[i].prestamo < prestamoMinimo) {
        prestamoMinimo = this.prestamos[i].prestamo;
        nombrePrestamoMinimo = this.prestamos[i].cliente;
        codigoPrestamoMinimo = this.prestamos[i].codigo;
      }
    }
    return nombrePrestamoMinimo + " " + codigoPrestamoMinimo;
  }
}
