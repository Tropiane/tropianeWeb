import { Router, Request, Response } from "express";
import formController from "./form.controller";
import { validateAdmin } from "../../middlewares/userAuth";
import formInterface from "./form.interface";

const router = Router();
const controller = new formController();

router.get("/", (req: Request, res: Response) => {controller.getForms(req, res)});
router.post("/", (req: Request, res: Response)=>{controller.createForm(req, res);});
router.patch("/", async (req:Request<{},{}, {id: number, comment: string}>, res:Response)=>{await controller.updateForm(req, res)  });
router.put("/", (req: Request, res:Response)=>{
    res.send("Router Put")
})
router.delete("/:formId", (req:Request, res:Response)=>{controller.deleteForm(req, res);});
const formRouter = router;
export default formRouter;