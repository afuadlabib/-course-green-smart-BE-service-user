import JsonWebToken from 'jsonwebtoken'
import ConfigAppContext from '../config/configAppContext';

export default class GenerateToken{

    public static createToken(payload: object): string{
        return JsonWebToken.sign({...payload}, ConfigAppContext.Screat)
    }

    public static compareToken(token: string){
        return JsonWebToken.verify(token, ConfigAppContext.Screat)
    }

}