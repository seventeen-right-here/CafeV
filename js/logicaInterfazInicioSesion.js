document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    var sCorreo='';
    var sContrasenna='';
    var bAcceso=false;


    sCorreo=document.querySelector('#txtCorreo').value;
    sContrasenna=document.querySelector('#txtContrasenna').value;

   bAcceso=validarCredenciales(sCorreo,sContrasenna);

   if(bAcceso==true){
       ingreasar();
   }
}
function ingreasar(){
    var rol=sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href='principal.html';
            
            break;
            case '2':
                window.location.href='principal.html';
                break;
        default:
            window.location.href='index.html';
            break;
    }
}