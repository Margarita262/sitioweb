//alert('Hola mundo');

console.log('Hola desde la console de javascript');

function login(){
    var usuario= document.getElementById('txtusuario').value;
    var passwd= document.getElementById('txtpassword').value;
    alert('Usuario:' +usuario+ ', contraseña'+passwd);
}