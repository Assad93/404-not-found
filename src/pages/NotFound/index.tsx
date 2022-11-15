import React from "react";
import notFound from "../../assets/images/not-found.jpg";
import {
  Button,
  Container,
  Credit,
  Description,
  Footer,
  Header,
  HeadTitle,
  Image,
  Info,
  Main,
  Title,
} from "./styles";

export default function NotFound() {
  return (
    <Container>
      <Header>
        <HeadTitle>404 Not Found</HeadTitle>
      </Header>
      <Main>
        <Image src={notFound} />
        <Info>
          <Title>I Have bad news for you</Title>
          <Description>
            The page you are looking for might be removed or is temporarily
            unavailable
          </Description>
          <Button>Back to Homepage</Button>
        </Info>
      </Main>
      <Footer>
        <Credit>
          created by <span>Samir</span> - <a href="">devChallenges.io</a>
        </Credit>
      </Footer>
    </Container>
  );
}
