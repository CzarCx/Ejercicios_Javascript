function capital() {
  let cap = document.getElementById("cap").value;
  let capregex = /^\d+(\.\d+)?$/;
  let resul;
  if (capregex.test(cap)) {
    resul = cap * 0.2
    document.getElementById("resul").value = resul;
  }
  else {
    alert("ERROR")
  }

}

//Ejercicio 2//

function ejercicio2() {
  let checar = /^\d+(\.\d+)?$/;
  let venta1 = document.getElementById("venta1").value;
  let venta2 = document.getElementById("venta2").value;
  let venta3 = document.getElementById("venta3").value;
  let sueldo = document.getElementById("sueldobase").value;

  if (checar.test(venta1)) {
    if (checar.test(venta2)) {
      if (checar.test(venta3)) {
        if (checar.test(sueldo)) {
          let comision = (parseFloat(venta1) + parseFloat(venta2) + parseFloat(venta3)) * 0.1;
          let sueldototal = parseFloat(sueldo) + parseFloat(comision);
          document.getElementById("sueldobaseresul").value = sueldo;
          document.getElementById("comisionresul").value = comision;
          document.getElementById("sueldotresul").value = sueldototal;
        }
        else {
          alert("ERROR")
        }
      }
      else {
        alert("ERROR")
      }

    }
    else {
      alert("ERROR")
    }
  }
  else {
    alert("ERROR 404")
  }


  ///Ejercicio 3///

}
function descuento() {
  let precio = document.getElementById("precio").value;
  let precioregex = /^\d+(\.\d+)?$/;
  if (precioregex.test(precio)) {
    let descuento = parseFloat(precio) * 0.15;
    let preciof = parseFloat(precio) - descuento;
    document.getElementById("compraresu").value = preciof;
  }
  else {
    alert("Valor incorrecto")
  }

}
function promediofinal() {
  let calificacionregex = /^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
  let cali1 = document.getElementById("calificacion1").value;
  let cali2 = document.getElementById("calificacion2").value;
  let cali3 = document.getElementById("calificacion3").value;
  let examenfinal = document.getElementById("examen").value;
  let trabajofinal = document.getElementById("trabajofinal").value;
  if (calificacionregex.test(cali1)) {
    if (calificacionregex.test(cali2)) {
      if (calificacionregex.test(cali3)) {
        if (calificacionregex.test(examenfinal)) {
          if (calificacionregex.test(trabajofinal)) {
            let promediocali = (parseFloat(cali1) + parseFloat(cali2) + parseFloat(cali3)) / 3;
            let promediofinal = (promediocali * 0.55) + (parseFloat(examenfinal) * 0.30) + (parseFloat(trabajofinal) * 0.15);
            document.getElementById("calificacionfinal").value = promediofinal;
          }
          else {
            alert("Hay un valor incorrecto")
          }
        }
        else {
          alert("Hay un valor incorrecto")
        }
      }
      else {
        alert("Hay un valor incorrecto")
      }
    }
    else {
      alert("Hay un valor incorrecto")
    }
  }
  else {
    alert("Hay un valor incorrecto")
  }

}
function alumnos() {
  let regex1 = /^[0-9]\d*$/;
  let total;
  let numalumnos = document.getElementById("numalumnos").value;
  let numalumnosh = document.getElementById("hombres").value;
  let numalumnosm = document.getElementById("mujeres").value;
  if (regex1.test(numalumnos)) {
    if (regex1.test(numalumnosh)) {
      if (regex1.test(numalumnosm)) {
        total = parseInt(numalumnosh) + parseInt(numalumnosm);
        if (total != numalumnos) {
          alert("La cantidad de alumn@s excede a la cantidad total")
        }
        else {
          let porcentajealumnom = (numalumnosm * 100) / numalumnos;
          let porcentajealumnosh = (numalumnosh * 100) / numalumnos;
          document.getElementById("porcentajealumnos").value = porcentajealumnosh;
          document.getElementById("porcentajealumnas").value = porcentajealumnom;
        }
      }
      else {
        alert("Hay un valor incorrecto")
      }
    }
    else {
      alert("Hay un valor incorrecto")
    }
  }
  else {
    alert("Hay un valor incorrecto")
  }


}

function edad() {
  let naci = new Date(document.getElementById("fechan").value);
  let fechactual = new Date();
  if (naci < fechactual) {
    let años = fechactual.getFullYear() - naci.getFullYear();
    let meses = fechactual.getMonth() - naci.getMonth();
    let dias = fechactual.getDate() - naci.getDate();
    if (meses < 0 || (meses === 0 && dias < 0)) {
      años--;
      meses += (dias < 0 ? 11 : 12);
    }

    if (dias < 0) {
      let mesesdias = new Date(fechactual.getFullYear(), fechactual.getMonth(), 0).getDate();
      dias += mesesdias;
      meses--;
    }

    let result = `Tienes ${años} años, ${meses} meses y ${dias} días de edad.`;
    document.getElementById('edadpersona').value = result;
  }
  else {
    alert("Esa fecha no es válida")
  }

}
function numeros() {
  let regnum = /^-?\d*\.?\d+$/;
  let nume1 = parseFloat(document.getElementById("nume1").value);
  let nume2 = parseFloat(document.getElementById("nume2").value);
  let resul;
  if (regnum.test(nume1)) {
    if (regnum.test(nume2)) {
      if (nume1 == nume2) {
        resul = (nume1) * (nume1);
      }
      if (nume1 > nume2) {
        resul = nume1 - nume2;
      }
      if (nume1 < nume2) {
        resul = nume1 + nume2;
      }
      document.getElementById("resul").value = resul;
    }
    else {
      alert("Verifique que los valores sean correctos")
    }
  }
  else {
    alert("Verifique que los valores sean correctos")
  }

}
function tresnumeros() {
  let regnumes = /^-?\d*\.?\d+$/;
  let nume1 = parseFloat(document.getElementById("nume1").value);
  let nume2 = parseFloat(document.getElementById("nume2").value);
  let nume3 = parseFloat(document.getElementById("nume3").value);
  if (regnumes.test(nume1)) {
    if (regnumes.test(nume2)) {
      if (regnumes.test(nume3)) {
        let mayor = 0;

        if (nume2 > mayor) {
          mayor = nume2;
        }
        if (nume3 > mayor) {
          mayor = nume3;
        }
        document.getElementById("resul").value = mayor;
      }
      else {
        alert("Verifique que los valores sean correctos")
      }
    }
    else {
      alert("Verifique que los valores sean correctos")
    }
  }
  else {
    alert("Verifique que los valores sean correctoss")
  }

}
function ejercicio9() {
  let rege1 = /^\d+$/;
  let rege2 = /^\d*\.?\d+$/;
  let horastotales = document.getElementById("horastotales").value;
  let salariohora = document.getElementById("salario").value;
  let horasnormalestrabajadas;
  let pagototal;
  let pagonormal;
  let horasextra;
  let salariohorasextra2;
  let pagohorasextra;
  let salarioenhoratriple;
  let horasextratrabajadasp;
  let horasdobletrabajadas;
  let horastripletrabajadas;
  if (rege1.test(horastotales)) {
    if (rege2.test(salariohora)) {
      if (horastotales <= 40) {
        pagototal = horastotales * salariohora;
      }
      else {
        pagonormal = 40 * salariohora;
        horasextra = horastotales - 40;
        if (horasextra <= 8) {
          pagohorasextra = salariohora * 2;
          salariohorasextra2 = pagohorasextra * horasextra;
          pagototal = pagonormal + salariohorasextra2;
        }
        else {
          pagohorasextra = salariohora * 2;
          salariohorasextra2 = pagohorasextra * 8;
          horastriple = horasextra - 8;
          salarioenhoratriple = salariohora * 3;
          pagohorastriple = horastriple * salarioenhoratriple;
          pagototal = pagohorastriple + pagonormal + salariohorasextra2;
        }
      }
      if (horastotales <= 40) {
        horasnormalestrabajadas = horastotales;
        horasdobletrabajadas = 0;
        horastripletrabajadas = 0;
      }
      else {
        horasnormalestrabajadas = 40;
        horasextratrabajadasp = horastotales - 40;
        if (horasextratrabajadasp <= 8) {
          horasdobletrabajadas = horasextratrabajadasp;
          horastripletrabajadas = 0;
        }
        else {
          horasnormalestrabajadas = 40;
          horasdobletrabajadas = 8;
          horastripletrabajadas = horasextratrabajadasp - 8;
        }

      }
      document.getElementById("salariofinal").value = pagototal;
      document.getElementById("horasnormales").value = horasnormalestrabajadas;
      document.getElementById("horasdobles").value = horasdobletrabajadas;
      document.getElementById("horastriples").value = horastripletrabajadas;
    }
    else {
      alert("Hay un valor incorrecto")
    }
  }
  else {
    alert("Hay un valor incorrecto")
  }

}

function utilidadTrabajador() {
  let regnum = /^-?\d*\.?\d+$/;
  let años = parseFloat(document.getElementById("años").value);
  let meses = parseFloat(document.getElementById("meses").value);
  let pagoxmes = parseFloat(document.getElementById("pagoxmes").value);
  let añostotales;
  let mesesxaaños;
  let salariototal;
  let utilidad;
  if (regnum.test(años)) 
  {
    if (regnum.test(meses)) 
    {
      if (regnum.test(meses)) 
      {
        mesesxaaños = meses / 12;
        añostotales = mesesxaaños + años;
        if (añostotales < 1) {
          utilidad = pagoxmes * 0.05;
        }
        if (añostotales >= 1 && añostotales < 2) {
          utilidad = pagoxmes * 0.07;
        }
        if (añostotales >= 2 && añostotales < 5) {
          utilidad = pagoxmes * 0.10;
        }
        if (añostotales >= 5 && añostotales < 10) {
          utilidad = pagoxmes * 0.15;
        }
        if (añostotales >= 10) {
          utilidad = pagoxmes * 0.20;
        }
        let utilidadb;
        utilidadb = utilidad * 12;
        let salariob;
        salariob = pagoxmes * 12;
        salariototal = salariob + utilidadb;
        document.getElementById("total").value = salariototal;
        document.getElementById("utilidad").value = utilidadb;
      }
      else {
        alert("Verifique que los valores sean correctos")
      }
    }
    else {
      alert("Verifique que los valores sean correctos")
    }
  }
  else {
    alert("Verifique que los valores sean correctos")
  }
}
