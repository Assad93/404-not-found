import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Header = styled.header`
  height: 10vh;
  padding: 1rem 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;

  @media (min-width: 992px) {
    justify-content: center;
    flex-direction: row;
    gap: 4rem;
  }
`;

export const Footer = styled.footer`
  height: 10vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const HeadTitle = styled.span`
  font-family: "Inconsolata", monospace;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--gray1);
`;

export const Image = styled.img`
  margin-top: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Info = styled.div``;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--gray1);
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: var(--gray2);
  margin: 2rem 0;
`;

export const Button = styled.button`
  background: var(--gray1);
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  transform: 0.2s filter;
  &:hover {
    filter: brightness(0.7);
  }
`;

export const Credit = styled.p`
  font-family: "Montserrat", sans-serif;
  color: var(--gray3);
  font-weight: 500;

  & > span {
    font-weight: bold;
  }
`;
