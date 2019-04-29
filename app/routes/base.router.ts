import {Request, Response} from 'express';

export abstract class Base {
    
    protected async handleAsync(res: Response, func: Function) {
        try {
            res.send(await func());
        }catch(ex) {
            res.status(500).send(ex);
        } 
    }

    public handle(res: Response, func: Function) {
        try {
            res.send(func());
        }catch(ex) {
            res.status(500).send(ex);
        } 
    }

}