<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio Fibonnaci</title>
</head>
<body>
    <h1>Serie Fabonnaci</h1>
    Primer numero: <input type="text" name="primerNumero" id="primerNumero">
    <br><br>
    Segundo numero: <input type="text" name="segundoNumero" id="segundoNumero">
    <br><br>
    Maximo: <input type="text" name="maximoNumero" id="maximoNumero">
    <br><br>
    <input type="button" value="Generar" id="btnGenerar">
    <div id="tabla">
        <hr>
        <table id="table" border="1">
                   
        </table>
    </div>
</body>
<script>
/* autor: Steven Rocha
descripcion: Steven Rocha*/
var divTabla =  document.getElementById('tabla');
divTabla.style.display = 'none';

//la Classe
class Solver {
    constructor(anterior,ultimo,maximo) {
    
        this.ant = anterior;
        this.ult = ultimo;
        this.max = maximo;
        this.serie = [];
        this.serie.push(this.ant);
        this.serie.push(this.ult); 
        //metodo
        this.saludar = function saludar() {
            
            console.log(mensaje);
        };

        this.generador = function generador() {

        var anterior1 = this.ant;
        var ultimo2 = this.ult;
        var maximo = this.max;
        var array = this.serie;   

        var generadorFibonacci = function(anterior, ultimo) {
        if (anterior + ultimo > maximo) {
            return array;
            
            }else {
            var nuevo = anterior + ultimo;
           
            array.push(nuevo);
            return generadorFibonacci(ultimo, nuevo);

            } 
        } 
        generadorFibonacci(anterior1,ultimo2);
        };
        
        this.muestraDatos = function muestraDatos() {

            var tabla = document.getElementById('table');
            var indice = 0;
            var array = this.serie;

            var muestraTabla = function(indice){
            if(indice===array.length){
            
            }else{
                var fila = document.createElement("tr"+'td'+'td');
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(array[indice]));
                fila.appendChild(td);
                tabla.appendChild(fila);
                return muestraTabla(indice+1);
                } 
            }
            muestraTabla(indice)
        };
    }
}




//se recupera el boton de generar 
document.getElementById('btnGenerar').addEventListener('click',function () {

    var nuevoSolver = new Solver(parseInt(document.getElementById('primerNumero').value),
                                parseInt(document.getElementById('segundoNumero').value),
                                parseInt(document.getElementById('maximoNumero').value));

            
            
            nuevoSolver.generador();
            nuevoSolver.muestraDatos()
            divTabla.style.display = 'block';

})

</script>
</html>
