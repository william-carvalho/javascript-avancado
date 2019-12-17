class NegociacoesView extends View {

    constructor(elemento){
        super(elemento);
    }

    template(model) {
        return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(obj =>
                     `
                        <tr>
                            <td>${DateHelper.dateToString(obj.data)}</td>
                            <td>${obj.quantidade}</td>
                            <td>${obj.valor}</td>
                            <td>${obj.volume}</td>
                        </tr>
                    `
                ).join('')}
            </tbody>
            
            <tfoot>
                    <td colspan="3"></td>
                    <td>${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
            </tfoot>
        </table>`;
    }


}

