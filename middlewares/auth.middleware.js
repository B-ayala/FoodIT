import { verifyToken } from "../utils/jwt.js";

//El middleware authentication se encarga de verificar que el usuario haya iniciado sesión y enviado un
// token válido en el header Authorization antes de permitirle acceder a rutas protegidas.
export const authentication = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.sendStatus(401).json({ message: 'No token provided' });
    }
    const verificationResult = verifyToken(token);
    
    if (!verificationResult.valid) {
        return res.status(403).json({ message: 'Invalid token', error: verificationResult.message });
    }
    //si paso todo lo de arriba, guardo el usuario decodificado en la request
    // va a estar disponible en req.user user = {id: userData.id, email: userData.email'}
    req.user = verificationResult.decoded;//req.user = {id: userData.id, email: userData.email};
    next();
};