import React from "react";
import { SafeEnvironmentContainer } from "./safeEnvironment.style";
import { Container } from "@mui/material"; //vai limitar as bordas para que ele não va ça para o canto quando a pagina for muito larga

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
