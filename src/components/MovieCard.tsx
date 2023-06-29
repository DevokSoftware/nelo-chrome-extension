import { Pane, StarEmptyIcon } from "evergreen-ui";
import React, { FC, useEffect, useState } from "react";
import IRecommendation from "../types/Recommendation";
import MovieRecommendationService from "../services/MovieRecommendationService";
import {
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  Box,
} from "@chakra-ui/react";

function MovieCard(): JSX.Element {
  const [movieRecommendation, setMovieRecommendation] =
    useState<IRecommendation>();

  useEffect(() => {
    fetchMovieRecommendation();
  }, []);

  const getRandomWatchedMovie = (): string => {
    localStorage.setItem("watchedMovies", JSON.stringify(["447365"]));
    let watchedMovies: string[] = JSON.parse(
      localStorage.getItem("watchedMovies") || "[]"
    );
    // watchedMovies.push(watecheMovie);
    // localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    return watchedMovies[Math.floor(Math.random() * watchedMovies.length)];
  };

  const fetchMovieRecommendation = () => {
    MovieRecommendationService.getMovieRecomendation(getRandomWatchedMovie())
      .then((response: any) => {
        setMovieRecommendation(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const buildImageUrl = () => {
    return (
      "https://image.tmdb.org/t/p/original" +
      movieRecommendation?.movie.imageUrl
    );
  };

  const getMovieStars = () => {
    if (movieRecommendation?.movie.voteAverage === undefined) return <></>;
    const numStars = Math.round(movieRecommendation?.movie.voteAverage);

    return (
      <Flex gap="1" alignItems="center" flexWrap="wrap" margin="auto">
        {Array.from({ length: numStars }, (_, i) => (
          <StarEmptyIcon size={13} key={i} />
        ))}
      </Flex>
    );
  };

  function addWatchedMovie() {
    let watchedMovies: string[] = JSON.parse(
      localStorage.getItem("watchedMovies") || "[]"
    );
    if (movieRecommendation?.movie) {
      watchedMovies.push(movieRecommendation?.movie.externalId);
    }
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
  }

  return (
    <>
      <Card
        maxW="md"
        // minH="md"
        // maxH="xl"
        h="xl"
        boxShadow="xl"
        rounded="xl"
        borderWidth="1px"
        borderColor="black"
        overflow="hidden"
        style={{ filter: "drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.2))" }}
      >
        <CardHeader padding={0} h="50%">
          <Image h="100%" w="100%" objectFit="cover" src={buildImageUrl()} />
        </CardHeader>
        <CardBody h="35%">
          <Stack spacing="3">
            <Heading size="sm">{movieRecommendation?.movie.title}</Heading>
            <Text noOfLines={[4, 5, 5]}>
              {movieRecommendation?.movie.overview}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter h="15%">{getMovieStars()}</CardFooter>
      </Card>
    </>
  );
}

export default MovieCard;
