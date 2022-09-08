class Utils {
    

    static dateFormat(date){
        //return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
        return moment().format('DD/MM/YYYY HH:mm');
    }

}