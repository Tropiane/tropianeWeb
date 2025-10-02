import { Request, Response } from "express";
import formService from "./form.service";
import formInterface from "./form.interface";

class formController {
    private service = new formService();
    async getForms(req: Request, res: Response) {
        try {
            const forms = await this.service.getForms();
            res.json(forms);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    
    async createForm(req: Request<{}, {}, formInterface>, res: Response) {
        try {
            const form = req.body;
            
           return (await this.service.createForm(form), res.status(201));
            
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async deleteForm(req: Request, res: Response) {
        try {
            const formId = Number(req.body.id);
            return (await this.service.deleteForm(formId), res.status(200));
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async updateForm(req:Request<{},{}, {id: number, comment: string}>, res:Response){
        try {
            const formId = req.body.id;
            const comment = req.body.comment;
            
            
            return( await this.service.updateForm(formId, comment), res.status(200).send(JSON.stringify({message: "formulario actualizado"})))
        } catch (error) {
            
            console.log(error);
            throw new Error("Error al crear el formulario")
            
        }
    }
}

export default formController;