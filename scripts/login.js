
var a = document.getElementById('btnSesion');
if(a){
    btnSesion.addEventListener('click', addSesion, true);
}

function addSesion() {
    var usuario = document.getElementById('txtUsuario').value;
    var contra = document.getElementById('txtContra').value;
    localStorage.setItem('User',usuario)
    localStorage.setItem('Contra',contra)
}
