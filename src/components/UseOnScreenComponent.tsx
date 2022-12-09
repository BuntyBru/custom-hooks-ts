import React, { useCallback, useEffect, useState } from "react";
import { Card } from "../styles/CommonStyles";
import styled from "styled-components";

import NewsDetails from "./NewsDetails";

const StyledScrollDiv = styled.div`
  height: 300px;
  overflow: auto;
`;

const StyledElement = styled.div`
  border-bottom: 0.5px solid white;
  padding: 5px;
`;

const UseOnScreenComponent = () => {
  const [state, setState] = useState<number[] | any>([]);
  const searchCharacters = useCallback(() => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`,
      {
        method: "GET",
      }
    )
      .then((r) => r.json())
      .then((r) => r)
      .catch((error) => {
        console.error(error);
        return [];
      });
  }, []);

  useEffect(() => {
    searchCharacters().then((response) => {
      setState(response);
    });
  }, [searchCharacters]);
  return (
    <Card>
      <StyledScrollDiv>
        {state.map((elem: number) => (
          <StyledElement key={elem}>
            <p>{elem}</p>
            <NewsDetails id={elem}/>
          </StyledElement>
        ))}
      </StyledScrollDiv>
    </Card>
  );
};

export default UseOnScreenComponent;
