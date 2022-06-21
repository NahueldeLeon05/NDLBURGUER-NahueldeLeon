
const MENU = [
    {
        id: 1,
        tipo:'Burguer',
        nombre:'Blue Chesse',
        descripcion:'Queso emmental, salsa queso azul, crocante de almendra glaseada.',
        precio:350,
        img:"../img/Burguers/BlueChese.jpg"
    },
    {
        id: 2,
        tipo:'Burguer',
        nombre:'NDL Cheese',
        descripcion:'Extra cheddar y salsa especial.Pan de Papa artesanal de NDL. 3 Carnes',
        precio:300,
        img: '../img/Burguers/NDLCheese.jpg'
    },
    {
        id: 3,
        tipo:'Burguer',
        nombre:'Pulled Pork Burguer',
        descripcion:'Carne, cheddar, pulled pork,salsa cheddar y cebolla crispy.',
        precio:300,
        img: "../img/Burguers/PulledPorkBurguer.jpg"
    },
    {
        id: 4,
        tipo:'Burguer',
        nombre:'Pulled Pork',
        descripcion:'Carne de cerdo desmenuzada en salsa barbacoa, salsa cheddar y bacon.',
        precio:350,
        img: "../img/Burguers/PulledPork.jpg"
    },
    {
        id: 5,
        tipo:'Burguer',
        nombre:'Classic NDL',
        descripcion:'Cheddar, cebolla, lechuga, tomate, pepinillo y mayonesa.',
        precio:270,
        img: "../img/Burguers/ClassicNDL.jpg"
    },
    {
        id: 6,
        tipo:'Burguer',
        nombre:'Dona Burguer',
        descripcion:'Dona glaseada, cheddar, bacon.',
        precio:370,
        img: "../img/Burguers/DonaBurguer.jpg"
    },
    {
        id: 7,
        tipo:'Burguer',
        nombre:'Egg Burguer',
        descripcion:'Cheddar, huevo a la plancha, lomito ahumado y alioli.',
        precio:370,
        img: "../img/Burguers/EggBurguer.jpg"
    },
    {
        id: 8,
        tipo:'Burguer',
        nombre:'Crispy Chicken',
        descripcion:'Pollo rebozado, salsa cheddar, lechuga, tomate y mayonesa.',
        precio:330,
        img: "../img/Burguers/CrispyChicken.jpg"
    },
    {
        id: 9,
        tipo:'HotDog',
        nombre:'Classic HotDog',
        descripcion:'Pancho con 3 gustos a elección.',
        precio:150,
        img: "../img/HotDogs/ClassicHotDog.jpg"
    },
    {
        id: 10,
        tipo:'HotDog',
        nombre:'BaconTres',
        descripcion:'Pancho con 3 gustos a elección, muzzarella, panceta.',
        precio:200,
        img: "../img/HotDogs/BaconTres.jpg"
    },
    {
        id: 11,
        tipo:'HotDog',
        nombre:'Pancholitano',
        descripcion:'Pancho con tomate, salsa pizzera, jamón, muzzarella y óregano.',
        precio:240,
        img: "../img/HotDogs/Pancholitano.jpg"
    },
    {
        id: 12,
        tipo:'HotDog',
        nombre:'Panchili',
        descripcion:'Pancho con Fetas de Cheddar y Salsa de carne picante.',
        precio:200,
        img: "../img/HotDogs/Panchili.jpg"
    },
    {
        id: 13,
        tipo:'Pizza',
        nombre:'Muzzarella',
        descripcion:'Salsa de tomate, muzzarella, aceitunas y oregano.',
        precio:300,
        img: "../img/Pizzas/Muzza.jpg"
    },
    {
        id: 14,
        tipo:'Pizza',
        nombre:'Panceta Y Huevos',
        descripcion:'Salsa de tomate, muzzarella, panceta salteada, huevos fritos, aceitunas.',
        precio:350,
        img: "../img/Pizzas/PancetaYHuevos.jpg"
    },
    {
        id: 15,
        tipo:'Pizza',
        nombre:'Peperoni',
        descripcion:'Salsa de tomate, muzzarella, chorizo español, aceitunas.',
        precio:350,
        img: "../img/Pizzas/PizzaPeperoni.jpg"
    },
    {
        id: 16,
        tipo:'Pizza',
        nombre:'Rúcula y Jamón',
        descripcion:'Salsa de tomate, muzzarella, jamón crudo y aceitunas negras.',
        precio:400,
        img: "../img/Pizzas/PizzaRúculayJamónCrudo.jpg"
    },
    {
        id: 17,
        tipo:'Pizza',
        nombre:'Cuatro Quesos',
        descripcion:'Salsa de tomate, muzzarella, queso provolone, azul, parmesano y aceitunas.',
        precio:350,
        img: "../img/Pizzas/CuatroQuesos.jpg"
    },
    {
        id: 18,
        tipo:'Pizza',
        nombre:'Fugazzeta 3 Cebollas',
        descripcion:'Muzzarella, cebolla blanca, cebolla morada, cebollita de verdeo y aceitunas negras.',
        precio:450,
        img: "../img/Pizzas/Fugazzeta3Cebollas.jpg"
    },
]
const carrito = [];

var tablaCarrito = document.getElementById('CarritoCompra')
var cargarBurguer = document.getElementById('contenedorBurguer');
var cargarHotDog = document.getElementById('contenedorHotDog')
var cargarPizza = document.getElementById('contenedorPizza')

var btnConfirmar = document.getElementById('btnConfirmar');
// Registramos el evento
btnConfirmar.addEventListener('click', () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pedido realizado con exito',
        showConfirmButton: false,
        timer: 1500
      })

    //Vaciar carrito
    for (let i = carrito.length; i > 0; i--) {
        carrito.pop();
    }
})

const card = (item)=>{
    return (
        `
            <div class="col-sm-4">
                  <div class="card">
                    <img src="${item.img}" class="card-img-top" alt="${item.nombre}" id="${item.tipo}">
                    <div class="card-body">
                      <h5 class="card-title">${item.nombre}</h5>
                      <p class="card-text">${item.descripcion}</p>
                      <button onclick=agregarCarrito(${item.id}) class="btn btn-danger">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `)
}
const getRow = (item) => {
    return (
        `   
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
            <td>${item.precio*item.cantidad}</td>
        </tr>
        `)
}


const cargarBurguers = (datos, contenedor, esTabla) => {
    let acumulador = ""
    datos.forEach((data)=>{
        if (data.tipo == 'Burguer'){
            acumulador += esTabla ? getRow(data) : card(data)
        }
    })
    contenedor.innerHTML = acumulador
}
const cargarHotDogs = (datos, contenedor, esTabla) => {
    let acumulador = ""
    datos.forEach((data)=>{
        if (data.tipo == 'HotDog'){
            acumulador += esTabla ? getRow(data) : card(data)
        }
    })
    contenedor.innerHTML = acumulador
}
const cargarPizzas = (datos, contenedor, esTabla) => {
    let acumulador = ""
    datos.forEach((data)=>{
        if (data.tipo == 'Pizza'){
            acumulador += esTabla ? getRow(data) : card(data)
        }
    })
    contenedor.innerHTML = acumulador
}
const cargarPedido = (datos,contenedor,esTabla) =>{
    let acumulador = ""
    datos.forEach((data)=>{
        acumulador += esTabla ? getRow(data) : card(data)
    })
    contenedor.innerHTML = acumulador
}

const agregarCarrito = (id) =>{
    const select = MENU.find(item => item.id === id);
    const buscar = carrito.findIndex(el => el.id === id);
    console.log(buscar)
    if( buscar === -1 ){
        carrito.push({
            id: select.id,
            tipo: select.tipo,
            nombre: select.nombre,
            precio: select.precio,
            cantidad: 1,
        })
    }else{
        carrito[buscar].cantidad = carrito[buscar].cantidad + 1
    }
    cargarPedido(carrito,tablaCarrito,true)   
    console.log(carrito)
}
cargarBurguers(MENU,cargarBurguer,false)
cargarHotDogs(MENU,cargarHotDog,false)
cargarPizzas(MENU,cargarPizza,false)


