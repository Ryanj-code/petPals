import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  min-width: 250px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  background: ${(props) => (props.disabled ? "#cbd5e0" : "#4a90e2")};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:not(:disabled) {
    background: #357abd;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`;

export const PetCard = styled.div<{ selected?: boolean }>`
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;

  /* Define shadows based on selection state */
  ${({ selected }) => {
    const baseShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    const hoverShadow = "0 8px 12px rgba(0, 0, 0, 0.15)";
    const selectedBorder = "0 0 0 3px #4a90e2";

    return `
      box-shadow: ${
        selected ? `${selectedBorder}, ${hoverShadow}` : baseShadow
      };
      transform: ${selected ? "translateY(-4px)" : "none"};

      &:hover {
        transform: translateY(-4px);
        box-shadow: ${
          selected ? `${selectedBorder}, ${hoverShadow}` : hoverShadow
        };
      }
    `;
  }}
`;

export const PetImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #e2e8f0;
`;

export const PetInfo = styled.div`
  padding: 1rem;
`;

export const PetTitle = styled.h2`
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const PetDescription = styled.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1;
`;

export const LoadingText = styled.p`
  color: #4a5568;
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 0;
`;

export const ErrorText = styled.p`
  color: #e53e3e;
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 0;
`;
