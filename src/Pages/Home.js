import React from "react";
import { styled } from "styled-components";

export default function Home({ auth, userId }) {
  return (
    <Wrapper>
      <div className="home">
        <h1>This is simple home page...</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
