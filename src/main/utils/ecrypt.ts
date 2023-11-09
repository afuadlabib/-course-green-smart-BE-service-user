import bcrypt from 'bcrypt'

export default class Encrypt{
    private static salt = bcrypt.genSaltSync(10);

    public static hash(password: string){
        return bcrypt.hashSync(password, this.salt);

    }

    public static compare(password: string, encrypted: string){
        return bcrypt.compareSync(password, encrypted);

    }

}