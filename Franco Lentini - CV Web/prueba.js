class Usuario{
    constructor( nombre ,company, email, telefono, roleName, diasContrato ){

        this.nombre = nombre
        this.company = company;
        this.email = email;
        this.telefono = telefono;
        this.roleName = roleName;
        this.diasContrato = diasContrato;
        
    }

    
}



function nuevosDatos() {

    

    var usuario1 = new Usuario( nombre = prompt("Ingrese su nombre"),company = prompt("Ingrese su compañía"), email = prompt("Ingrese su email"), telefono = prompt("Ingrese su numero de telefono"), roleName = prompt("Ingrese el nombre del puesto"), diasContrato = parseInt(prompt("Ingrese los dias que se necesita cubrir el rol")));



    localStorage.setItem ("Nuevas Ofertas", JSON.stringify(usuario1))

    
    
    if ((this.company == "Accenture") ||  (this.company == "accenture")) {
        alert("Hola " + this.nombre +", actualmente trabajo para Accenture y estoy interesado de cambiar de empresa. De todas maneras, agradezco el contacto. Gracias!");
    }
    else if (this.company == "") {
        alert("No he podido registrar tu compañia. Por favor vuelva a ingresar sus datos. Gracias");
    } 
    else{
        alert("Gracias " + this.nombre + "!. Estaré procesando la oferta y te contactare a " + this.email + " o a este telefono "+ this.telefono + " en caso de que la oferta me interese. Gracias por tu tiempo!");
    };


    if (this.diasContrato >= 700) {
        alert("Actualmente, no me puedo comprometer a " + this.diasContrato + " dias de contrato. Sin embargo, estoy dispuesto a negociar. Te estare contactando a " + this.email + ". Gracias!")
    }
    else{
        alert("Los dias de la oferta se ajustan a mi busqueda!")
    }

    

    return usuario1;

    
}



console.log(nuevosDatos());
