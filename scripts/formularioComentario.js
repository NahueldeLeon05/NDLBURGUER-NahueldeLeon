
const comentarios = []
function guardarComentario(){
    var nombre = document.getElementById('txtNombre').value;
    var email = document.getElementById('txtEmail').value;
    var comentario = document.getElementById('txtComentario').value;
    if(nombre != "" & email != "" & comentario != ""){
        alert('Tu comentario sera tenido en cuenta!')
        comentarios.push({
            nombre : nombre,
            email : email,
            comentario : comentario
        })
        document.getElementById('txtNombre').value = ""
        document.getElementById('txtEmail').value = ""
        document.getElementById('txtComentario').value = ""
        console.log(comentarios)
    }else{
        alert('Existe algun campo sin completar!')
    }
}