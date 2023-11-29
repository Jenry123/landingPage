function procesar(){

    alert("se esta realizando el proceso de compra espere porfa :/:/:/:/:/:/:/://:/::/")

    var name=prompt("ingrese su nombre para procesar la compra: ")

    if(name==="" || name.length<=4){
        alert("no se ha ingresado un nombre valido")
    }
    else {
        var pago=prompt("ingrese su numero de tarjeta para finalizar el pago: ")
        if(pago<=0 || pago.length<0){
            alert("el pago no es correcto, vuelva a intentarlo")
        }else{
            alert("gracias "+name+" por comprar en nuestra tienda")
            window.location.href="./index.html"
        }
    }

}