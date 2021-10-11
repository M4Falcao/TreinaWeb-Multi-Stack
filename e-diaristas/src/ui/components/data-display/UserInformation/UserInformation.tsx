import React from "react";
import {
  UserInformationContainer,
  UserDescription,
  UserName,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";
import { Container } from "@mui/material";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <Container>
      <UserInformationContainer>
        <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
        <UserName>{props.name}</UserName>
        <RatingStyled readOnly value={props.rating} />
        <UserDescription> {props.description} </UserDescription>
      </UserInformationContainer>
    </Container>
  );
};

export default UserInformation;
