class User {

    constructor(name, gender, birth, country, email, password, photo, admin,register){

        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    

    get register(){ //GET É CONSULTA SET É DEFINIR
        return this._register;
    }

    get name(){

        return this._name;

    }

    get gender(){

        return this._gender;
        
    }

    get birth(){

        return this._birth;
        
    }

    get country(){

        return this._country;
        
    }

    get email(){

        return this._email;
        
    }

    get password(){

        return this._password;
        
    }

    get photo(){

        return this._photo;
        
    }

    get admin(){

        return this._admin;
        
    }

    set photo(value){ //SET é definir

        this._photo = value;

    }

    

    

}