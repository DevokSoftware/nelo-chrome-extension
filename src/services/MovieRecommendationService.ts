import http from "../http-common";
import IRecommendation from "../types/Recommendation";

const getMovieRecomendation = (watchedMovieId: string) => {
  return http.get<IRecommendation>(
    watchedMovieId
      ? `/recommendation?watchedMovieId=` + watchedMovieId
      : `/recommendation`
  );
};

const MovieRecommendationService = {
  getMovieRecomendation,
};

export default MovieRecommendationService;
