export class DateNow{

    getDateNow() {
        let today = new Date();
        let date = today.getFullYear() + '-' +
            (today.getMonth() + 1).toString().padStart(2, '0') + '-' +
            today.getDate().toString().padStart(2, '0');
        let time = today.getHours().toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0');
        return date + 'T' + time;
    }

    getDateFormatado(today : Date) {
        
        return today.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\//g, '-')
    }

    getDateFormatadoComHora(today : Date) {
        
        return today.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute:'2-digit',
            second:'2-digit'
        }).replace(/\//g, '-')
    }

    addDaysStartingNow(days : number){
        var futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + days);
        return futureDate;
    }

    addDays(futureDate: Date, days : number){
        futureDate.setDate(futureDate.getDate() + days);
        return futureDate;
    }

}