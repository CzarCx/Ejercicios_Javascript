function capital()
{
  let cap=document.getElementById("cap").value;
   let capregex=/^\d+(\.\d+)?$/; 
  let resul;
  if (capregex.test(cap))
  {
    resul=cap*0.2
   document.getElementById("resul").value=resul;
  }
  else
  {
   alert("ERROR")
  }
   
}

//Ejercicio 2//

function ejercicio2()
{
   let checar=/^\d+(\.\d+)?$/;  
  let venta1=document.getElementById("venta1").value;
  let venta2=document.getElementById("venta2").value;
  let venta3=document.getElementById("venta3").value;
  let sueldo=document.getElementById("sueldobase").value;

  if (checar.test(venta1))
  {
     if(checar.test(venta2))
     {
       if(checar.test(venta3))
       {
         if(checar.test(sueldo))
         {
           let comision=(parseFloat(venta1)+parseFloat(venta2)+parseFloat(venta3))*0.1;
           let sueldototal=parseFloat(sueldo)+parseFloat(comision);
           document.getElementById("sueldobaseresul").value=sueldo;
           document.getElementById("comisionresul").value=comision;
           document.getElementById("sueldotresul").value=sueldototal;
         }
         else
         {
           alert("ERROR")
         }
       }
       else
       {
         alert("ERROR")
       }

     }
     else{
       alert("ERROR")
     }
  }
  else{
   alert("ERROR 404")
  }


///Ejercicio 3///
  
}
function descuento()
{
  let precio=document.getElementById("precio").value;
  let precioregex=/^\d+(\.\d+)?$/; 
  if(precioregex.test(precio))
  {
   let descuento=parseFloat(precio)*0.15;
   let preciof=parseFloat(precio)-descuento;
   document.getElementById("compraresu").value=preciof;
  }
  else
  {
   alert("Valor incorrecto")
  }
  
}
function promediofinal()
{
 let calificacionregex=/^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
  let cali1=document.getElementById("calificacion1").value;
  let cali2=document.getElementById("calificacion2").value;
  let cali3=document.getElementById("calificacion3").value;
  let examenfinal=document.getElementById("examen").value;
  let trabajofinal=document.getElementById("trabajofinal").value;
  if(calificacionregex.test(cali1))
  {
   if(calificacionregex.test(cali2))
   {
     if(calificacionregex.test(cali3))
     {
       if (calificacionregex.test(examenfinal))
       {
         if(calificacionregex.test(trabajofinal))
         {
           let promediocali=(parseFloat(cali1)+parseFloat(cali2)+parseFloat(cali3))/3;
           let promediofinal=(promediocali*0.55)+(parseFloat(examenfinal)*0.30)+(parseFloat(trabajofinal)*0.15);
           document.getElementById("calificacionfinal").value=promediofinal;
         }
         else
         {
           alert("Hay un valor incorrecto")
         }
       }
       else
       {
         alert("Hay un valor incorrecto")
       }
     }
     else
     {
       alert("Hay un valor incorrecto")
     }
   }
   else
   {
     alert("Hay un valor incorrecto")
   }
  }
  else
  {
   alert("Hay un valor incorrecto")
  }
  
}
function ejercicio5()
{
 let regex1=/^[1-9]\d*$/;
 let comprobar;
 let numeroalumnos=document.getElementById("numeroalumnos").value;
 let numeroalumnosh=document.getElementById("alumnosh").value;
 let numeroalumnosm=document.getElementById("alumnosm").value;
 if (regex1.test(numeroalumnos))
 {
   if (regex1.test(numeroalumnosh))
   {
     if (regex1.test(numeroalumnosm))
     {
       comprobar=parseInt(numeroalumnosh)+parseInt(numeroalumnosm);
       if (comprobar!=numeroalumnos)
       {
         alert("Los alumnos totales no son los mismos que los alumnos dados")
       }
       else{
         let porcentajealumnosh=(numeroalumnosh*100)/numeroalumnos;
         let porcentajealumnom=(numeroalumnosm*100)/numeroalumnos;
         document.getElementById("porcentajealumnos").value=porcentajealumnosh;
         document.getElementById("porcentajealumnas").value=porcentajealumnom;
       }
     }
     else
     {
       alert("Hay un valor incorrecto")
     }
   }
   else
   {
     alert("Hay un valor incorrecto")
   }
 }
 else{
   alert("Hay un valor incorrecto")
 }
 

}
function ejercicio6() {
 let fechan=new Date(document.getElementById("fechan").value);
 let fechaa=new Date();
 if (fechan<fechaa)
 {
   let años=fechaa.getFullYear()-fechan.getFullYear();
   let meses=fechaa.getMonth()-fechan.getMonth();
   let dias=fechaa.getDate()-fechan.getDate();
   if (meses<0 || (meses===0 && dias<0)) {
     años--;
     meses+=(dias<0?11:12);
   }
 
   if (dias<0) {
     let mesesdias=new Date(fechaa.getFullYear(), fechaa.getMonth(), 0).getDate();
     dias+=mesesdias;
     meses--;
   }
 
   let result= `Tienes ${años} años, ${meses} meses y ${dias} días de edad.`;
   document.getElementById('edadc').value = result;
 }
 else
 {
   alert("Esa fecha no es válida")
 }
 
}

function ejercicio7()
{
 let regc=/^-?\d*\.?\d+$/;
 let n1=parseFloat(document.getElementById("n1").value);
 let n2=parseFloat(document.getElementById("n2").value);
 let resuk;
 if(regc.test(n1))
 {
   if(regc.test(n2))
   {
     if(n1==n2)
     {
       resuk=n1*n2;
     }
     if (n1>n2)
     resuk=n1-n2;
     else
     {
       resuk=n1+n2;
     }
     document.getElementById("resuk").value=resuk;
   }
   else
   {
     alert("Hay un valor incorrecto")
   }
 }
 else{
   alert("Hay un valor incorrecto")
 }
 
}
function ejercicio8()
{
 let regd=/^-?\d*\.?\d+$/;
 let nu1=parseFloat(document.getElementById("nu1").value);
 let nu2=parseFloat(document.getElementById("nu2").value);
 let nu3=parseFloat(document.getElementById("nu3").value);
 if(regd.test(nu1))
 {
   if(regd.test(nu2))
   {
     if(regd.test(nu3))
     {
       let mayor=nu1;
       if (nu2>mayor) 
       {
         mayor=nu2;
       }
       if (nu3>mayor) {
         mayor=nu3;
       }
         document.getElementById("resup").value=mayor;
     }
     else{
       alert("Hay un valor incorrecto")
     }
   }
   else
   {
     alert("Hay un valor incorrecto")
   }
 }
 else{
   alert("Hay un valor incorrecto")
 }

 }
function ejercicio9()
{
 let rege1=/^\d+$/;
 let rege2=/^\d*\.?\d+$/;
 let horastotales=document.getElementById("horastotales").value;
 let salariohora=document.getElementById("salario").value;
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
 if(rege1.test(horastotales))
 {
   if(rege2.test(salariohora))
   {
     if (horastotales<=40)
     {
       pagototal=horastotales*salariohora;
     }
     else
     {
       pagonormal=40*salariohora;
       horasextra=horastotales-40;
       if(horasextra<=8)
       {
         pagohorasextra=salariohora*2;
         salariohorasextra2=pagohorasextra*horasextra;
         pagototal=pagonormal+salariohorasextra2;
       }
       else
       {
         pagohorasextra=salariohora*2;
         salariohorasextra2=pagohorasextra*8;
         horastriple=horasextra-8;
         salarioenhoratriple=salariohora*3;
         pagohorastriple=horastriple*salarioenhoratriple;
         pagototal=pagohorastriple+pagonormal+salariohorasextra2;
       }
     }
     if(horastotales<=40)
     {
       horasnormalestrabajadas=horastotales;
       horasdobletrabajadas=0;
       horastripletrabajadas=0;
     }
     else
     {
       horasnormalestrabajadas=40;
       horasextratrabajadasp=horastotales-40;
       if(horasextratrabajadasp<=8)
       {
         horasdobletrabajadas=horasextratrabajadasp;
         horastripletrabajadas=0;
       }
       else
       {
         horasnormalestrabajadas=40;
         horasdobletrabajadas=8;
         horastripletrabajadas=horasextratrabajadasp-8;
       }

     }
     document.getElementById("salariofinal").value=pagototal;
     document.getElementById("horasnormales").value=horasnormalestrabajadas;
     document.getElementById("horasdobles").value=horasdobletrabajadas;
     document.getElementById("horastriples").value=horastripletrabajadas;
   }
   else
   {
     alert("Hay un valor incorrecto")
   }
 }
 else{
   alert("Hay un valor incorrecto")
 }
 
}
  
function ejercicio10(){
 let años=parseFloat(document.getElementById("años").value);
 let meses=parseFloat(document.getElementById("meses").value);
 let pagomes=parseFloat(document.getElementById("pagomes").value);
 let mesesaaños;
 let utilidad;
 let añostotales;
 let salariototal;
 mesesaaños=meses/12;
 añostotales=mesesaaños+años; 
 if(añostotales<1){
     utilidad=pagomes*0.05;
 }
 if(añostotales>=1 && añostotales<2){
     utilidad=pagomes*0.07;
 }
 if(añostotales>=2 && añostotales<5){
     utilidad=pagomes*0.10;
 }
 if(añostotales>=5 && añostotales<10){
     utilidad=pagomes*0.15;
 }
 if(añostotales>=10){
     utilidad=pagomes*0.20;
 }
 let utilidadb;
 utilidadb=utilidad*12;
 let salariob;
 salariob=pagomes*12;
 salariototal=salariob+utilidadb;
 document.getElementById("sutilidad").value=salariototal;
 document.getElementById("utilidad").value=utilidadb;
}
