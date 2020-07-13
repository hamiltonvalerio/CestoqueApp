
export class ConverteListaIonItemDivider {


    /**
     * name
     */
    public retornaArrayGroup(responseSorte : Object[]):Object[] {


        let itens = [];
        let itensOrdenados = [];
        let letraAtual = "";
        let itensAtuaisDeRetorno = [];
        itensOrdenados = responseSorte;

        itensOrdenados.forEach((value, index) => {
            if(value.nome.charAt(0) != letraAtual){
              letraAtual = value.nome.charAt(0);
              let newGroup = {
                letra: letraAtual,
                arrayDeItens: []
            };
              itensAtuaisDeRetorno = newGroup.arrayDeItens;
              itens.push(newGroup);
            
            }
    
            itensAtuaisDeRetorno.push(value);
       
        
        });

        return itens;

    }
}