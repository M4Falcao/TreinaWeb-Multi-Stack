import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/safeEnvironment/safeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha com seu endereço e veja os profissionais de sua localidade"
      />
      <UserInformation
        name={"Mateus Falcão"}
        picture={"https://github.com/M4Falcao.png"}
        rating={3}
        description={"Recife"}
      />
    </div>
  );
};

export default Home;
