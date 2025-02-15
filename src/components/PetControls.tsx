import {
  Controls,
  SearchInput,
  Button,
  Select,
} from "../styles/PetComponentStyles";

interface PetControlProps {
  search: string;
  setSearch: (value: string) => void;
  handleSort: (sortType: string) => void;
  selectedPets: string[];
  handleSelectAll: () => void;
  handleClearSelect: () => void;
  handleDownload: () => void;
}

const PetControls = ({
  search,
  setSearch,
  handleSort,
  selectedPets,
  handleSelectAll,
  handleClearSelect,
  handleDownload,
}: PetControlProps) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSort(e.target.value);
  };

  return (
    <Controls>
      <SearchInput
        type="text"
        placeholder="Search pets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select onChange={handleSortChange}>
        <option value="">Sort by: Default</option>
        <option value="AZ">Sort by: Name A-Z</option>
        <option value="ZA">Sort by: Name Z-A</option>
      </Select>
      <Button onClick={handleSelectAll}>Select All</Button>
      <Button onClick={handleClearSelect} disabled={selectedPets.length === 0}>
        Clear Selection
      </Button>
      <Button onClick={handleDownload} disabled={selectedPets.length === 0}>
        Download Selected
      </Button>
    </Controls>
  );
};

export default PetControls;
