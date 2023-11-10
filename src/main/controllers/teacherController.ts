import { NextFunction, Request, Response } from "express";
import TeacherService from "../services/teacherService";
export default class TeacherController{

    constructor(){

    }

    public async find(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const data = await TeacherService.find();

            return res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const data = await TeacherService.create({...req.body});

            return res.status(201).json(data);
        } catch (error) {
            next(error);

        }

    }

    public async findById(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const data = TeacherService.findById(req.body.id)

            if(!data) throw new TypeError("Author not found")

            return res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }

    public async updateOne(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const findTeacher = await TeacherService.findOne({id: req.params.id });

            if(!findTeacher) throw new TypeError("Teacher not found");
    
            const data = await TeacherService.updateOne({_id: findTeacher._id}, {...req.body});
            
            return res.status(200).json(data);

        } catch (error) {
            next(error)
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const findTeacher = await TeacherService.findOne({id: req.params.id });

            if(!findTeacher) throw new TypeError("Teacher not found");
    
            const deletedTeacher = await TeacherService.deleteOne({_id: findTeacher._id});
            
            return res.status(200).json(deletedTeacher)
        } catch (error) {
            next(error)
        }
        
    }
}