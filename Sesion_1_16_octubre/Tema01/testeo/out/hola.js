/* suma , resta , multiplica , divide */
var aux = {
    "nombre": "Antonio",
    "apellido": "Lopez",
    "edad": 78,
    "sexo": "Hombre"
};
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    ;
    Calculadora.prototype.opera = function (a, b, op) {
        var nRet = -1;
        switch (op) {
            case 'suma':
                nRet = this.suma(a, b);
                break;
            case 'resta':
                nRet = this.resta(a, b);
                break;
            case 'multiplica':
                nRet = this.multiplica(a, b);
                break;
            case 'divide':
                nRet = this.divide(a, b);
                break;
            default:
                break;
        }
        return nRet;
    };
    Calculadora.prototype.suma = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.resta = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.divide = function (a, b) {
        return a / b;
    };
    Calculadora.prototype.multiplica = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.prueba = function (a, b) {
        if (a > 10 && b > 10) {
            return "El valor es muy alto";
        }
        else {
            return a + b;
        }
    };
    Calculadora.prototype.prueba2 = function (cliente) {
        if (cliente.nombre == "Antonio") {
            return "Es Antonio";
        }
        else {
            return "No es Antonio";
        }
    };
    return Calculadora;
}());
var oCalc = new Calculadora();
console.log("prueba de suma ", oCalc.opera(5, 4, 'suma'));
console.log("prueba de divide ", oCalc.opera(5, 4, 'divide'));
console.log("prueba con error", oCalc.opera(5, 0, 'divide'));
console.log("prueba menor", oCalc.prueba(5, 0));
console.log("prueba mayor", oCalc.prueba(25, 15));
console.log("prueba Antonio", oCalc.prueba2(aux));
console.log("prueba NO ", oCalc.prueba2({ nombre: "luis", edad: 88, sexo: "Hombre" }));
