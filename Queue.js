//IMPLEMENTAÇÃO DE FILA EM JS ATRÁVES DE UM ARRAY
function Queue() {

    let items = [];
    //MÉTODO PARA ENFILEIRAR RECEBENDO ALGUME ELEMENTO COMO PARAMETRO
    this.enqueue = function (element) {
        items.push(element);
    }

    //MÉTODO PARA DESINFILEIRAR
    this.dequeue = function () {
        return items.shift();
    }
    //RETORNAR O VALOR DO PRIMEIRO ELEMENTO
    this.front = function () {
        return items[0];
    }
    //RETORNAR O TAMANHO DA LISTA
    this.size = function () {
        return items.length;
    }

}