// import request from 'supertest';
// import mongoose from 'mongoose';
// import app from '../src/app';
// import MovieModel from '../src/models/movieModel';

// describe('Movie API', () => {
//   beforeAll(async () => {
//     await mongoose.connect('mongodb://localhost:27017/test');
//   });

//   afterAll(async () => {
//     await mongoose.connection.dropDatabase();
//     await mongoose.connection.close();
//   });

//   beforeEach(async () => {
//     await MovieModel.create([
//       { title: 'Movie 1', genre: 'Action', rating: 8.5, streamingLink: 'link1' },
//       { title: 'Movie 2', genre: 'Comedy', rating: 7.5, streamingLink: 'link2' },
//     ]);
//   });

//   afterEach(async () => {
//     await MovieModel.deleteMany();
//   });

//   describe('GET /api/movies', () => {
//     it('should get all movies', async () => {
//       const response = await request(app).get('/api/movies');
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveLength(2);
//     });
//   });

//   describe('GET /api/search?q=Action', () => {
//     it('should search for movies by genre', async () => {
//       const response = await request(app).get('/api/search?q=Action');
//       expect(response.status).toBe(200);
//       expect(response.body).toHaveLength(1);
//     });
//   });

//   // Add tests for other endpoints

//   describe('DELETE /api/movies/:id', () => {
//     it('should delete a movie', async () => {
//       const movies = await MovieModel.find();
//       const movieId = movies[0]._id;

//       const response = await request(app).delete(`/api/movies/${movieId}`);
//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe('Movie deleted successfully');
//     });
//   });
// });
