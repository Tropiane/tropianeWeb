import { Router, Request, Response } from "express";
import type { UserInterface } from "./user.dao";

import UserController from "./user.controller";
import { validateUserLogin } from "../../middlewares/userLogin";

const router = Router();
const controller = new UserController();

router.post('/create', async (req: Request<{}, {}, UserInterface>, res: Response)=>{
    await controller.createUser(req, res)
});

router.post('/login', async (req: Request<{}, {}, UserInterface>, res: Response)=>{
    await controller.login(req, res)
})

router.get("/private", validateUserLogin, (req: Request, res:Response)=>{
    res.send("Estas en la zona privada")
})

export const userRouter = router