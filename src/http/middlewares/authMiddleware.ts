import { Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({message: 'token is required'})
    }
    
    const [_, token] = authHeader.split(' ');

    try {
        await jwt.verify(token, process.env.APP_SECRET as string)
        next();
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'})
    }
}