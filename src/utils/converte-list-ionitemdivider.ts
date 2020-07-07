
export class ConverteListaIonItemDivider {


    /**
     * name
     */
    public retornaArrayGroup(ordenado : Object[]) {
    

        Object.getOwnPropertyNames(ordenado).forEach(function(val, idx, array) {
            console.log('aqui: '+ordenado[val]);
        });
        

    }


}