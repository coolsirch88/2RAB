export class UserHelper{
    constructor(){
        this.id = '';
        var name = 'userid=';
        console.log(document.cookie);
        var ca = document.cookie.split(';');
        for(var i = 0; i<ca.length; i++){
            var c = ca[i];
            while(c.charAt(0)==' ') c = c.substring(1);
            if(c.indexOf(name) == 0) this.id = c.substring(name.length, c.length);
        }
        if(this.id == '')
        {
            this.id = createUserId();
        }
    }

    configure(fn){
        fn();
    }

    get userId(){
        return this.id;
    }
}

function createUserId(){
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate()+1);
    console.log(tomorrow.toUTCString());
    var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    console.log(id);
    var cookieString = "userid="+id+"; expires="+tomorrow.toUTCString()+"; path=/"
    console.log(cookieString);
    document.cookie=cookieString;
    return id;
}