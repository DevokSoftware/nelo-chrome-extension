import IMovie from "./Movie";

export default interface IRecommendation {
  movie: IMovie;
  criteria: string;
}
