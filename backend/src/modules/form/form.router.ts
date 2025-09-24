import { Router, Request, Response } from "express";
import formController from "./form.controller";

const router = Router();
const controller = new formController();

router.get("/", (req: Request, res: Response) => {controller.getForms(req, res)});
router.post("/", (req: Request, res: Response)=>{controller.createForm(req, res);});
router.patch("/", (req:Request, res:Response)=>{
    res.send("Router Patch")
 });
router.put("/", (req: Request, res:Response)=>{
    res.send("Router Put")
})
router.delete("/:formId", (req:Request, res:Response)=>{controller.deleteForm(req, res);});
const formRouter = router;
export default formRouter;