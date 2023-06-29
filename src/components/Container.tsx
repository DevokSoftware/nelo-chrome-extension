import React, { FC } from "react";
import MovieCard from "./MovieCard";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

function Container(): JSX.Element {
  return (
    <div className="mainContainer">
      <SimpleGrid columns={{ sm: 2, md: 4 }} gap={4} w="90%">
        <GridItem>
          <MovieCard />
        </GridItem>
        <GridItem>
          <MovieCard />
        </GridItem>
        <GridItem>
          <MovieCard />
        </GridItem>
        <GridItem>
          <MovieCard />
        </GridItem>
      </SimpleGrid>
    </div>
  );
}

export default Container;
