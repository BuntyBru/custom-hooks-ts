import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useOnScreen from "../hooks/useOnScreen";

const StyledNewsSection = styled.div`
  font-size: 12px;
  margin: 0px;
`;

const NewsDetails = ({ id }: { id: number }) => {
  const [details, setDetails] = useState(null);
  const ref: any = useRef<HTMLDivElement>();
  const getNow: boolean = useOnScreen<HTMLDivElement>(ref, "0px");
  const getNewsDetails = () => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      {
        method: "GET",
      }
    )
      .then((r) => r.json())
      .then((r) => r)
      .catch((error) => {
        return [];
      });
  };

  useEffect(() => {
    if (getNow) {
      getNewsDetails().then((response) => {
        setDetails(response.text);
      });
    }
  }, [getNow]);

  return <StyledNewsSection ref={ref}>{details}</StyledNewsSection>;
};

export default NewsDetails;
