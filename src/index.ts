rotulo1.innerHTML = "Ingresar monto:";
rotulo2.innerHTML = "Ingresar cantidad:";

let monto: number = 500;
let cantidad: number = 3;
let montoConDescuento: number = 0;
let descuento: number = 0;
let montoTotal: number = 0;
let precioTotal = monto * cantidad;

if (precioTotal >= 1000) {
  descuento = (precioTotal * 10) / 100;
  montoConDescuento = precioTotal - descuento;
  console.log("Por gastar mas de 1000 tiene un 10% de descuento.");
  console.log("El monto a pagar es:" + montoConDescuento);
} else {
  console.log("No tiene descuento. El monto a pagar es:" + precioTotal);
}
