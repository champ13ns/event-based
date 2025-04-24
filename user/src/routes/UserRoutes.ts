import express, { Response } from "express";
import { UserController } from "../controller/User";
const router = express.Router();

const User = new UserController();

router.post("/v1/user/add-details", (req: Request, res : any) => {
    let user =  User.addUser(req.body);
    return res.status(201).json({data : user , message : "User added succesfully"})
});


router.delete("/v1/user/delete-user",(req : Request , res : any) => {
     let id = req.body;
     let user =  User.deleteUser(id);
    return res.status(201).json({data : user , message : "User added succesfully"})
})

router.get('/v1/user/list',(req : Request , res : any) => {
    return res.status(200).json({
        data : User.usersList()
    })
})

export default router;