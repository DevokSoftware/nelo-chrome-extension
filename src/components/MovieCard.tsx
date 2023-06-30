import { EyeOpenIcon, GridViewIcon, Pane, StarEmptyIcon } from "evergreen-ui";
import React, { FC, MouseEventHandler, useEffect, useState } from "react";
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
  Button,
  Tooltip,
  SimpleGrid,
  Tag,
} from "@chakra-ui/react";

function MovieCard(): JSX.Element {
  const [movieRecommendation, setMovieRecommendation] =
    useState<IRecommendation>();

  useEffect(() => {
    fetchMovieRecommendation();
  }, []);

  const getRandomWatchedMovie = (): string => {
    let watchedMovies: string[] = JSON.parse(
      localStorage.getItem("watchedMovies") || "[]"
    );
    console.log(watchedMovies);
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
        h="xl"
        boxShadow="xl"
        rounded="xl"
        borderWidth="1px"
        borderColor="black"
        overflow="hidden"
        style={{ filter: "drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.2))" }}
      >
        <Button
          position="fixed"
          right={0}
          top={0}
          onClick={() => addWatchedMovie()}
          padding={0}
          background="none"
        >
          <Tooltip label="Watched!">
            <EyeOpenIcon size={25} />
          </Tooltip>
        </Button>
        <Tag position="fixed" left={0} top={0} size="md" textDecoration="none">
          {movieRecommendation?.criteria}
        </Tag>

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
          <Box mt="1vh">
            {movieRecommendation?.movie.genres.map(function (genre) {
              return (
                <Tag variant="outline" colorScheme="blue" mr="3px">
                  {genre}
                </Tag>
              );
            })}
          </Box>
        </CardBody>
        <CardFooter h="15%">
          <SimpleGrid w="100%">
            <Box margin="auto">{getMovieStars()}</Box>
          </SimpleGrid>
        </CardFooter>
      </Card>
    </>
  );
}

export default MovieCard;
