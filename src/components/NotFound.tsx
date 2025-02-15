import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 5rem 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #4a90e2;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem;
`;

const BackButton = styled(Link)`
  color: white;
  display: inline-block;
  padding: 1rem 1.5rem;
  background: #4a90e2;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: bold;

  &:hover {
    background: #357abd;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404 - Page Not Found</Title>
      <Message>
        The page you're looking for doesn't exist or there is a typo in your
        URL.
      </Message>
      <BackButton to="/">Return to Home</BackButton>
    </NotFoundContainer>
  );
};

export default NotFound;
