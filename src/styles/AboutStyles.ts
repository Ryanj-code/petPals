import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 2rem;
`;

export const AboutHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
`;

export const Section = styled.div`
  margin: 2rem;
`;

export const SubHeader = styled.h2`
  color: #4a90e2;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 2;
  max-width: 700px;
  margin: 1rem auto;
  text-align: left;
`;

export const AboutIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 1.25rem;
    transition: all 0.3s ease;
    padding: 0.5rem;
  }

  a:hover {
    color: #4a90e2;
    transform: translateY(-4px);
  }
`;

export const HighlightSpan = styled.span`
  color: #4a90e2;
  font-weight: 600;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

export const SkillIcons = styled.span`
  border: 1px solid rgba(0, 114, 177, 0.5);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
