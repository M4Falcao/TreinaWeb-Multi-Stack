import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";
import { maxWidth } from "@mui/system";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle> Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            dolore suscipit voluptatibus natus dolores, illum necessitatibus
            porro, exercitationem, quo quae rerum. Voluptates enim asperiores
            quasi dolorem tempore fugit deleniti error!{" "}
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                {/* _blank para abrir em uma nova guia e rel... para medida de segurança */}
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                {/* _blank para abrir em uma nova guia e rel... para medida de segurança */}
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
