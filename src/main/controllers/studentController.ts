import { NextFunction, Response } from "express";
import StudentService from "../services/studentsService";
import RequestRepository from "../repositories/requestRepository";

export default class StudentController {
  constructor() {}

  public async find(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await StudentService.find();

      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  public async create(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await StudentService.create({
        ...req.body,
        userId: req.currentUser?._id,
        createdBy: req.currentUser?._id,
      });

      return res.status(201).json({data});
    } catch (error) {
      next(error);
    }
  }

  public async findById(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await StudentService.findById(req.params.id);
      if (!data) throw new TypeError("Student not found");

      return res.status(200).json({data});
    } catch (error) {
      next(error);
    }
  }

  public async updateOne(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const findStudent = await StudentService.findOne({ _id: req.params.id });

      if (!findStudent) throw new TypeError("Student not found");

      const data = await StudentService.updateOne(
        { _id: findStudent._id },
        { ...req.body }
      );

      return res.status(200).json({data});
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const findStudent = await StudentService.findOne({ _id: req.params.id });

      if (!findStudent) throw new TypeError("Student not found");

      const deletedTeacher = await StudentService.deleteOne({
        _id: findStudent._id,
      });

      return res.status(200).json({data: deletedTeacher});
    } catch (error) {
      next(error);
    }
  }
}
