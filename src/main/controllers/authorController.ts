import { NextFunction, Response } from "express";
import AuthorService from "../services/authorService";
import RequestRepository from "../repositories/requestRepository";

export default class AuthorController {
  constructor() {}

  public async find(
    req: RequestRepository,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await AuthorService.find();

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
      const data = await AuthorService.create({
        ...req.body,
        userId: req.currentUser?._id,
        createdBy: req.currentUser?._id,
      });

      return res.status(201).json({ data });
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
      const data = await AuthorService.findById(req.params.id);
      if (!data) throw new TypeError("Author not found");

      return res.status(200).json({ data });
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
      const findAuthor = await AuthorService.findOne({ _id: req.params.id });

      if (!findAuthor) throw new TypeError("Author not found");

      const data = await AuthorService.updateOne(
        { _id: findAuthor._id },
        { ...req.body }
      );

      return res.status(200).json({ data });
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
      const findAuthor = await AuthorService.findOne({ _id: req.params.id });

      if (!findAuthor) throw new TypeError("Author not found");

      const deletedAuthor = await AuthorService.deleteOne({
        _id: findAuthor._id,
      });

      return res.status(200).json({ data: deletedAuthor });
    } catch (error) {
      next(error);
    }
  }
}
