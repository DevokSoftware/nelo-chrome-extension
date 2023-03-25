import { Card, Text, Pane, StarEmptyIcon } from "evergreen-ui";
import React, { FC, useEffect, useState } from "react";
import IRecommendation from "../types/Recommendation";
import MovieRecommendationService from "../services/MovieRecommendationService";

const MovieCard: FC = () => {
  const [movieRecommendation, setMovieRecommendation] =
    useState<IRecommendation>();

  useEffect(() => {
    fetchMovieRecommendation();
  }, []);

  function fetchMovieRecommendation(): void {
    MovieRecommendationService.getMovieRecomendation()
      .then((response: any) => {
        setMovieRecommendation(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  function StarSequence() {
    if (movieRecommendation?.movie.voteAverage === undefined) return <></>;
    const numStars = Math.round(movieRecommendation?.movie.voteAverage);
    const starArray = Array.from({ length: numStars }, (_, i) => (
      <StarEmptyIcon margin={3} key={i} />
    ));
    return <div>{starArray}</div>;
  }

  return (
    <>
      <Pane className="card" width={600} height={220} margin={24}>
        <Text marginBottom={20}>{movieRecommendation?.movie.title}</Text>
        <Text marginBottom={20} size={300}>
          {movieRecommendation?.movie.overview}
        </Text>
        <StarSequence />
      </Pane>
    </>
  );
};

export default MovieCard;
