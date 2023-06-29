export default interface IMovie {
  externalId: string;
  title: string;
  originalTitle: string;
  genreIds: number[];
  overview: string;
  voteAverage: number;
  releaseYear: number;
  imageUrl: string;
}
