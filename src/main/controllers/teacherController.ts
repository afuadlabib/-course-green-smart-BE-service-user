import { NextFunction, Response } from "express";
import TeacherService from "../services/teacherService";
import RequestRepository from "../repositories/requestRepository";
export default class TeacherController {
  constructor() {}

  public async find(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await TeacherService.find();

      return res.status(200).json(data);
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
      const data = await TeacherService.create({
        ...req.body,
        userId: req.currentUser?._id,
        createdBy: req.currentUser?._id,
      });

      return res.status(201).json(data);
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
      const data = await TeacherService.findById(req.params.id);

      if (!data) throw new TypeError("Teacher not found");

      return res.status(200).json(data);
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
      const findTeacher = await TeacherService.findOne({ _id: req.params.id });

      if (!findTeacher) throw new TypeError("Teacher not found");

      const data = await TeacherService.updateOne(
        { _id: findTeacher._id },
        { ...req.body }
      );

      return res.status(200).json(data);
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
      const findTeacher = await TeacherService.findOne({ _id: req.params.id });

      if (!findTeacher) throw new TypeError("Teacher not found");

      const deletedTeacher = await TeacherService.deleteOne({
        _id: findTeacher._id,
      });

      return res.status(200).json(deletedTeacher);
    } catch (error) {
      next(error);
    }
  }
}
