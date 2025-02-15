import {
  PetCard as Card,
  PetImage,
  PetInfo,
  PetTitle,
  PetDescription,
} from "../styles/PetComponentStyles";

interface PetCardProps {
  pet: {
    id: string;
    url: string;
    title: string;
    description: string;
  };
  selected: boolean;
  onSelect: (title: string) => void;
}

const PetCard = ({ pet, selected, onSelect }: PetCardProps) => {
  return (
    <Card onClick={() => onSelect(pet.title)} selected={selected}>
      <PetImage src={pet.url} alt={pet.title} />
      <PetInfo>
        <PetTitle>{pet.title}</PetTitle>
        <PetDescription>{pet.description}</PetDescription>
      </PetInfo>
    </Card>
  );
};

export default PetCard;
