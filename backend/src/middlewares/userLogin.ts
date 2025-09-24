import { Request, Response, NextFunction } from "express";

import type { UserInterface } from "../modules/user/user.dao";

import { validateToken } from "../utils/jwt";

const validateUserLogin = (req: Request<{}, {}, UserInterface>, res: Response, next: NextFunction) => {
    const tokenCookie = req.signedCookies.token;
    
    !tokenCookie && res.status(401).send("No has iniciado sesion")

    const token = validateToken(tokenCookie)

    if(token === false){
        res.status(401).send("Acceso denegado")
    }
    
    next()
}

export {
    validateUserLogin
}