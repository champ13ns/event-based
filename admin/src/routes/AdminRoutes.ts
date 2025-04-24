import express, { Request } from 'express'
import { AdminController } from '../controller/AdminController';
const router = express.Router();

const Admin = new AdminController(); 

router.get('/v1/admin/users-list',(req : Request , res : any) => {
    return res.status({ data : Admin.getAllUsers() })
})