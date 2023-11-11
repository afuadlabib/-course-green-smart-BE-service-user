import { NextFunction, Request, Response } from "express";
import AuthorService from "../services/authorService";

export default class AuthorController {
  constructor() {}

  public async find(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await AuthorService.find();

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await AuthorService.create({
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
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const data = await AuthorService.findById(req.params.id);
      if (!data) throw new TypeError("Author not found");

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async updateOne(
    req: Request,
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

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined | NextFunction> {
    try {
      const findAuthor = await AuthorService.findOne({ _id: req.params.id });

      if (!findAuthor) throw new TypeError("Author not found");

      const deletedAuthor = await AuthorService.deleteOne({
        _id: findAuthor._id,
      });

      return res.status(200).json(deletedAuthor);
    } catch (error) {
      next(error);
    }
  }
}
