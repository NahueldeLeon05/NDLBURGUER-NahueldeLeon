var precioCompra=0;
var arrayCarrito=[]
var nombreComida=""
var pedidoLista = []

var btnPedido = document.getElementById('btnPedido');

// Registramos el evento
btnPedido.addEventListener('click', IniciarJS);

function IniciarJS() {
    alert("PRESIONE ACEPTAR PARA VER EL MENU");

    menuPrincipal();
    alert(JSON.stringify(pedidoLista,null, 2)); //Muestra objeto en alert
}


function agregarPedido (arrayCarrito, monto){
    var miPedido = {
        "pedido": arrayCarrito,
        "monto": monto,
    }
    pedidoLista.push(miPedido);
}


//Menu Principal
function menuPrincipal(){
    var opcion=10;
    var x = 'true';

    while ((opcion < '1' || opcion > '3') || x == 'true'){
        opcion = prompt('NDL BURGUERS\n\n1- HAMBURGUESAS\n2- HOTDOGS\n3- PIZZAS');
        if(opcion < '1' || opcion > '3'){
            alert("ELIJA UNA OPCION CORRECTA!");        
        }else{
            x = 'false';
        }
    }
    switch (opcion) {
        case '1':
            menuHamburguesas();
        break;
        case '2':
            menuHotDogs();
        break;
        case '3':
            menuPizzas();
        break;
        default:
            alert("ELIJA UNA OPCION CORRECTA!");
        break;
    }
}
//Menu de hamburguesas
function menuHamburguesas (){
    var opcion=10;
    var x = 'true' ;
    alert("SELECCIONE SUS HAMBURGUESAS");

    while ((opcion < '1' || opcion > '8') || x == 'true'){
        opcion = prompt('HAMBURGUESAS\n\n1- Blue Chesse ($350)\n2- Cheese NDL ($300)\n3- Pulled Pork Burguer ($300)\n4- Pulled Pork ($350)\n5- Classic NDL ($270)\n6- Dona Burguer ($370)\n7- Egg Burguer ($370)\n8- Crispy Chicken ($330)');
        if(opcion < '1' || opcion > '8'){
            alert("ELIJA UNA OPCION CORRECTA");        
        }else{
            x = 'false';
        }
    }
    switch (opcion) {
        case '1':
           precioCompra = precioCompra + 350;
           nombreComida="Blue Chesse "
           arrayCarrito.push(nombreComida)
        break;
        case '2':
            precioCompra = precioCompra + 300;
            nombreComida="Cheese NDL "
            arrayCarrito.push(nombreComida)
        break;
        case '3':
            precioCompra = precioCompra + 300;
            nombreComida="Pulled Pork Burguer "
            arrayCarrito.push(nombreComida)
        break;
        case '4':
            precioCompra = precioCompra + 350;
            nombreComida="Pulled Pork "
            arrayCarrito.push(nombreComida)
        break;
        case '5':
            precioCompra = precioCompra + 270;
            nombreComida="Classic NDL "
            arrayCarrito.push(nombreComida)
        break;
        case '6':
            precioCompra = precioCompra + 370;
            nombreComida="Dona Burguer "
            arrayCarrito.push(nombreComida)
        break;
        case '7':
            precioCompra = precioCompra + 370;
            nombreComida="Egg Burguer "
            arrayCarrito.push(nombreComida)
        break;
        case '8':
            precioCompra = precioCompra + 330;
            nombreComida="Crispy Chicken "
            arrayCarrito.push(nombreComida)
        break;
        default:
            precioCompra = precioCompra;
        break;
    }
    seguirCompra();
}
//Menu de pizzas
function menuPizzas (){
    var opcion=10;
    var x = 'true' ;
    alert("SELECCIONE SUS PIZZAS");

    while ((opcion < '1' || opcion > '6') || x == 'true'){
        opcion = prompt('PIZZAS\n\n1-Muzzarella ($300)\n2-Panceta y Huevos ($350)\n3-Peperoni ($350)\n4-Rúcula y Jamón Crudo ($400)\n5-Cuatro Quesos ($350)\n6-Fugazzeta 3 Cebollas ($450)');
        if(opcion < '1' || opcion > '6'){
            alert("ELIJA UNA OPCION CORRECTA");        
        }else{
            x = 'false';
        }
    }
    switch (opcion) {
        case '1':
           precioCompra = precioCompra + 300;
           nombreComida="Muzzarella "
           arrayCarrito.push(nombreComida)
        break;
        case '2':
            precioCompra = precioCompra + 350;
            nombreComida="Panceta y Huevos "
            arrayCarrito.push(nombreComida)
        break;
        case '3':
            precioCompra = precioCompra + 350;
            nombreComida="Peperoni "
            arrayCarrito.push(nombreComida)
        break;
        case '4':
            precioCompra = precioCompra + 400;
            nombreComida="Rúcula y Jamón Crudo "
            arrayCarrito.push(nombreComida)
        break;
        case '5':
            precioCompra = precioCompra + 350;
            nombreComida="Cuatro Quesos "
            arrayCarrito.push(nombreComida)
        break;
        case '6':
            precioCompra = precioCompra + 450;
            nombreComida="Fugazzeta 3 Cebollas "
            arrayCarrito.push(nombreComida)
        break;
        default:
            precioCompra = precioCompra;
        break;
    }
    seguirCompra();
}
//Menu de hotdogs
function menuHotDogs (){
    var opcion=10;
    var x = 'true' ;
    alert("SELECCIONE SUS HOTDOGS");

    while ((opcion < '1' || opcion > '4') || x == 'true'){
        opcion = prompt('HOTDOGS\n\n1-Classic HotDog ($150)\n2-Bacontres ($200)\n3-Panchili ($240)\n4-Pancholitano ($200)');
        if(opcion < '1' || opcion > '4'){
            alert("ELIJA UNA OPCION CORRECTA");        
        }else{
            x = 'false';
        }
    }
    switch (opcion) {
        case '1':
           precioCompra = precioCompra + 150;
           nombreComida="Classic HotDog "
           arrayCarrito.push(nombreComida)
        break;
        case '2':
            precioCompra = precioCompra + 200;
            nombreComida="Bacontres "
            arrayCarrito.push(nombreComida)
        break;
        case '3':
            precioCompra = precioCompra + 240;
            nombreComida="Panchili "
            arrayCarrito.push(nombreComida)
        break;
        case '4':
            precioCompra = precioCompra + 200;
            nombreComida="Pancholitano "
            arrayCarrito.push(nombreComida)
        break;
        default:
            precioCompra = precioCompra;
        break;
    }
    seguirCompra();
}
//Opcion de volver al menu para seguir comprando o salir del programa.
function seguirCompra (){
    var x = 'true';
    var volverAlMenu = '0';
    while ((volverAlMenu < '1' || volverAlMenu > '2') || x == 'true'){
        volverAlMenu = prompt(`Su pedido es de $ ${precioCompra}\nDesea encargar algo mas?\n1-SI\n2-NO`);
        if(volverAlMenu < '1' || volverAlMenu > '3'){
            alert("ELIJA UNA OPCION CORRECTA!");        
        }else{
            x = 'false';
        }
    }
    switch (volverAlMenu) {
        case '1':
            menuPrincipal();
        break;
        case '2':
            alert("SELECCIONE SU METODO DE PAGO");
            precioCompra = totalAPagar()
            agregarPedido(arrayCarrito,precioCompra)
        break;
        default:
            alert("ELIJA UNA OPCION CORRECTA!");
        break;
    }
}
//Opcion para elegir metodo de pago
//EFECTIVO = VALOR REAL DE LA COMPRA
//DEBITO = VALOR REAL DE LA COMPRA - 2%
//CREDITO = VALOR REAL DE LA COMPRA + 10%


function totalAPagar(){
    var opcion = 10;
    var x = 'true';
    while ((opcion < '1' || opcion > '3') || x == 'true'){
        opcion = prompt('METODOS DE PAGO\n1- EFECTIVO\n2- DEBITO (Descuento del 2%)\n3- CREDITO (Impuesto del 10%)');
        if(opcion < '1' || opcion > '3'){
            alert("ELIJA UNA METODO DE PAGO CORRECTO!");        
        }else{
            x = 'false';
        }
    }
    var precioFinal=0;
    switch (opcion) {
        case '1':
            precioFinal = precioCompra
        break;
        case '2':
            precioFinal = precioCompra - (precioCompra*0.02)
        break;
        case '3':
            var opcionCredito = 10;
            var x = 'true';
            while ((opcionCredito < '1' || opcionCredito > '6') || x == 'true'){
                opcionCredito = prompt('Ingrese cantidad de cuotas\nMAXIMO 6 CUOTAS');
                if(opcionCredito < '1' || opcionCredito > '6'){
                    alert("ELIJA UNA CANTIDAD DE CUOTAS MENOR A 6!");        
                }else{
                    x = 'false';
                }
            }
            var cuota = precioCuota(opcionCredito);
            alert(`El precio de cada cuota es de ${cuota}`);
            precioFinal = precioCompra + (precioCompra*0.10);
        break;
        default:
            alert("ELIJA UNA OPCION CORRECTA!");
        break;
    }
    return precioFinal
}
function precioCuota (x){
    var precioCompraCredito = precioCompra + (precioCompra*0.10);
    var precioXCuota = (precioCompraCredito / x);
    return precioXCuota;
    // alert('El precio de cada cuota es de', precioCuota(precioXCuota));
}
