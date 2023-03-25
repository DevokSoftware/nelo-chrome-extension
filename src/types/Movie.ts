export default interface IMovie {
  id: string;
  externalId: string;
  title: string;
  originalTitle: string;
  genreIds: number[];
  overview: string;
  voteAverage: number;
  releaseYear: number;
}
