import { NextFunction, Request, Response } from "express";
import StudentService from "../services/studentsService";

export default class StudentController{

    constructor(){

    }

    public async find(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const data = await StudentService.find();

            return res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const data = await StudentService.create({...req.body});

            return res.status(201).json(data);
        } catch (error) {
            next(error);

        }

    }

    public async findById(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const data = StudentService.findById(req.body.id)

            if(!data) throw new TypeError("Student not found")

            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    public async updateOne(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const findStudent = await StudentService.findOne({id: req.params.id });

            if(!findStudent) throw new TypeError("Student not found");
    
            const data = await StudentService.updateOne({_id: findStudent._id}, {...req.body});
            
            return res.status(200).json(data);

        } catch (error) {
            next(error)
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | undefined | NextFunction>{
        try {
            const findStudent = await StudentService.findOne({id: req.params.id });

            if(!findStudent) throw new TypeError("Student not found");
    
            const deletedTeacher = await StudentService.deleteOne({_id: findStudent._id});
            
            return res.status(200).json(deletedTeacher)
        } catch (error) {
            next(error)
        }
        
    }
}