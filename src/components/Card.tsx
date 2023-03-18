import { Card, Text, Pane } from "evergreen-ui";
import React, { FC } from "react";

interface MovieCardProps {
  title: string;
}

const MovieCard: FC<MovieCardProps> = ({ title }) => {
  return (
    <>
      <Pane
        elevation={4}
        float="left"
        width={800}
        height={220}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Where does it come</Text>
        <Text size={300}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Text>
      </Pane>
    </>
  );
};

export default MovieCard;
