import AuthError from 'errors/AuthError';
import express, {Request, Response, NextFunction} from 'express';

export function loginMiddleware(err: Error, req: Request, res: Response, _: NextFunction){
    if(err instanceof AuthError){
        return res.status(err.status).json({message: err.message})
    }

    return res.status(500).json({message: 'internal server error'})
}