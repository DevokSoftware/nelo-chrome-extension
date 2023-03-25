import http from "../http-common";
import IRecommendation from "../types/Recommendation";

const getMovieRecomendation = () => {
  return http.get<IRecommendation>(`/recommendation`);
};

const MovieRecommendationService = {
  getMovieRecomendation,
};

export default MovieRecommendationService;
