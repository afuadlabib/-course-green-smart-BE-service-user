import bcrypt from 'bcrypt'

export default class Encrypt{
    static salt = bcrypt.genSaltSync(10);

    static hash(password: string){
        return bcrypt.hashSync(password, this.salt)
    }

    static compare(password: string, encrypted: string){
        return bcrypt.compareSync(password, encrypted)
    }

}