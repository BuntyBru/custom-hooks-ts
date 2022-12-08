import React, { useState } from "react";
import styled from "styled-components";

import { Card, StyledButton } from "../styles/CommonStyles";

import useMemoCompare from "../hooks/useMemoCompare";

const UseMemoCompareComponent = () => {
  const [state, setState] = useState();

  const objFinal = useMemoCompare({ id: 110 }, (prev: any, next: any) => {
    return prev && prev.id === next.id;
  });
  console.log(objFinal)
  return (
    <Card>
      <h3>UseMemoCompare</h3>
    </Card>
  );
};

export default UseMemoCompareComponent;
