//Calculadora de IVA

let iva = 0.19;
var precioFinal;
let precioGlobal;


function CalcularIVA(precio){
    console.log(precioGlobal);
    precio = document.getElementById("precio").value;

    let ivaproducto = precio * iva;     

    console.log('El IVA del producto es' + '  ' + (ivaproducto))
    precioFinal = precio - ivaproducto
    precioGlobal = precio;

    document.getElementById("iva").value = ivaproducto;

    document.getElementById("total").value = precioFinal; 

    document.getElementById("ivaproducto").value = ivaproducto;

    document.getElementById("neto").value = precio;
    console.log(precioGlobal);
}


//Calculadora de descuento

let nombredeproducto;
let referenciaproducto;

function descuentoCategoria (categoria){

    categoria = document.getElementById("categorias").value;

    switch(categoria){
        case "Televisores":
            document.getElementById("descuentoproduct").value = "Descuento del 10%";
            document.getElementById("preciofinalproduct").value = precioGlobal - ((precioGlobal*10)/100) ;
            console.log(precioGlobal);
            console.log("Descuento del 10%");
            break;
        case "Freidoras de aire":
            document.getElementById("descuentoproduct").value = "Descuento del 15%";
            document.getElementById("preciofinalproduct").value = precioGlobal - ((precioGlobal*15)/100) ;
            console.log(precioGlobal);
            console.log("Descuento del 15%");
            break;
        case "Escritorios":
            document.getElementById("descuentoproduct").value = "Descuento del 20%";
            document.getElementById("preciofinalproduct").value = precioGlobal - ((precioGlobal*20)/100) ;
            console.log(precioGlobal);
            console.log("Descuento del 20%");
            break;
        case "Neveras":
            document.getElementById("descuentoproduct").value = "Descuento del 25%";
            document.getElementById("preciofinalproduct").value = precioGlobal - ((precioGlobal*25)/100) ;
            console.log(precioGlobal);
            console.log("Descuento del 15%");
            break;  
    }

    console.log(categoria)
    nombredeproducto = document.getElementById("nombre").value;
    referenciaproducto = document.getElementById("referencia").value;
    document.getElementById("categoriaproducto").value = categoria;
    document.getElementById("nombreproduct").value = nombredeproducto;
    document.getElementById("referenciap").value = referenciaproducto;
}









