import { Request, Response } from 'express';
import MovieModel from '../models/movieModel';

export const getAllMovies = async (_req: Request, res: Response): Promise<void> => {
  try {
    const movies = await MovieModel.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const searchMovies = async (req: Request, res: Response): Promise<void> => {
  const q:any = req.query;
  try {
    const movies = await MovieModel.find({
      $or: [
        { title: { $regex: new RegExp(q, 'i') } },
        { genre: { $regex: new RegExp(q, 'i') } },
      ],
    });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, genre, rating, streamingLink } = req.body;
  try {
    const newMovie = new MovieModel({ title, genre, rating, streamingLink });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, genre, rating, streamingLink } = req.body;
  try {
    const movie = await MovieModel.findByIdAndUpdate(id, { title, genre, rating, streamingLink }, { new: true });
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const movie = await MovieModel.findByIdAndDelete(id);
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json({ message: 'Movie deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
