import AuthError from 'errors/AuthError';
import express, {Request, Response, NextFunction} from 'express';

export function loginMiddleware(err: Error, req: Request, res: Response, _: NextFunction){
    if(err instanceof AuthError){
        return res.status(err.status).json({error: err.message})
    }

    return res.status(500).json({error: 'internal server error'})
}