import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

export default async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      error: error.message,
    });
  }
  console.log(error.message);
  return response.status(500).json({
    error: 'internal server error',
  });
};
