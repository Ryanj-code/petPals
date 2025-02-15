import { usePets } from "../hooks/usePets";
import PetCard from "../components/PetCard";
import PetControls from "./PetControls";
import {
  Container,
  Gallery,
  LoadingText,
  ErrorText,
} from "../styles/PetComponentStyles";

const PetGallery = () => {
  const {
    loading,
    error,
    search,
    setSearch,
    selectedPets,
    handleSelect,
    handleSelectAll,
    handleClearSelect,
    handleSort,
    filteredPets,
    handleDownload,
  } = usePets();

  if (error) return <ErrorText>{error}</ErrorText>;

  return (
    <Container>
      <PetControls
        search={search}
        setSearch={setSearch}
        handleSort={handleSort}
        selectedPets={selectedPets}
        handleSelectAll={handleSelectAll}
        handleClearSelect={handleClearSelect}
        handleDownload={handleDownload}
      />

      {loading ? (
        <LoadingText>Loading pets...</LoadingText>
      ) : (
        <Gallery>
          {filteredPets.map((pet, index) => (
            <PetCard
              key={index}
              pet={pet}
              selected={selectedPets.includes(pet.title)}
              onSelect={handleSelect}
            />
          ))}
        </Gallery>
      )}
    </Container>
  );
};

export default PetGallery;
