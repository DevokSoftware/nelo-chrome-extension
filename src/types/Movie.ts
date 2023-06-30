export default interface IMovie {
  externalId: string;
  title: string;
  originalTitle: string;
  genres: string[];
  overview: string;
  voteAverage: number;
  releaseYear: number;
  imageUrl: string;
}
