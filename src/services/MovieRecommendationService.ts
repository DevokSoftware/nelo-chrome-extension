import http from "../http-common";
import IRecommendation from "../types/Recommendation";

const getMovieRecomendation = (watchedMovieId: string) => {
  return http.get<IRecommendation>(
    `/recommendation?watchedMovieId=` + watchedMovieId
  );
};

const MovieRecommendationService = {
  getMovieRecomendation,
};

export default MovieRecommendationService;
