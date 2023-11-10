import bcrypt from 'bcrypt'

export default class Encrypt{
    private static salt: string = bcrypt.genSaltSync(10); 

    constructor(){
        
    }

    public static hash(password: string){
        return bcrypt.hashSync(password, this.salt);

    }

    public static compare(password: string, encrypted: string){
        return bcrypt.compareSync(password, encrypted);

    }

}