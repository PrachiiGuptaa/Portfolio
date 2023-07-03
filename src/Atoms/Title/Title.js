import React from "react";
import Typewriter from "typewriter-effect";

export const Title = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Front-End Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
