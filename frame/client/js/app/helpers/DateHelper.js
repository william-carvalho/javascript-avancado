class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada')
    }

    static stringToDate(date){
      return new Date(...date
            .split('-')
            .map((item, index) => item - index % 2)
        );
    }

    static dateToString(date){
        
        if(/\d{4}-\d{2}-\d{2}/.test(date))
         throw new Error('A data deve estar no formato aaaa-mm-dd')
        return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`
        
    }

}