import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/safeEnvironment/safeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/Inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormElementContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/Pages/index.styled";
import useIndex from "data/hooks/Pages/useIndex.page";

const Home: NextPage = () => {
  const { cep, setCep, cepValido } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha com seu endereço e veja os profissionais de sua localidade"
      />
      <Container>
        <FormElementContainer>
          <TextFieldMask
            variant={"outlined"}
            label="Digite seu CEP"
            fullWidth
            mask={"99.999-999"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          <Typography color={"error"}>CEP invalido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar{" "}
          </Button>
        </FormElementContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Mateus Falcão"}
              picture={"https://github.com/M4Falcao.png"}
              rating={3}
              description={"Recife"}
            />
            <UserInformation
              name={"Mateus Falcão"}
              picture={"https://github.com/M4Falcao.png"}
              rating={3}
              description={"Recife"}
            />
            <UserInformation
              name={"Mateus Falcão"}
              picture={"https://github.com/M4Falcao.png"}
              rating={3}
              description={"Recife"}
            />
            <UserInformation
              name={"Mateus Falcão"}
              picture={"https://github.com/M4Falcao.png"}
              rating={3}
              description={"Recife"}
            />
            <UserInformation
              name={"Mateus Falcão"}
              picture={"https://github.com/M4Falcao.png"}
              rating={3}
              description={"Recife"}
            />
            <UserInformation
              name={"Mateus Falcão"}
              picture={"https://github.com/M4Falcao.png"}
              rating={3}
              description={"Recife"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
};

export default Home;
