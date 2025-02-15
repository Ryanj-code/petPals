import { useState, useEffect, useMemo, useCallback } from "react";

interface Pet {
  id: string;
  url: string;
  title: string;
  description: string;
  created: string;
}

const usePets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [originalPets, setOriginalPets] = useState<Pet[]>([]);
  const [selectedPets, setSelectedPets] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(
          "https://eulerity-hackathon.appspot.com/pets"
        );
        const data = await response.json();
        setPets(data);
        setOriginalPets(data);
      } catch (err) {
        setError("Failed to fetch pets");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const handleSelect = useCallback((title: string) => {
    // Sets selectedPets to all previous selectedPets with new pet based on title
    setSelectedPets((prevSelected) =>
      prevSelected.includes(title)
        ? prevSelected.filter((petTitle) => petTitle !== title)
        : [...prevSelected, title]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedPets(pets.map((pet) => pet.title));
  }, [pets]);

  const handleClearSelect = () => setSelectedPets([]);

  const handleSort = useCallback(
    (sortType: string) => {
      if (sortType === "AZ") {
        setPets((prevPets) =>
          [...prevPets].sort((a, b) => a.title.localeCompare(b.title))
        );
      } else if (sortType === "ZA") {
        setPets((prevPets) =>
          [...prevPets].sort((a, b) => b.title.localeCompare(a.title))
        );
      } else {
        setPets([...originalPets]);
      }
    },
    [originalPets]
  );

  const filteredPets = useMemo(() => {
    return pets.filter(
      (pet) =>
        pet.title.toLowerCase().includes(search.toLowerCase()) ||
        pet.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [pets, search]);

  const handleDownload = useCallback(async () => {
    try {
      const selected = pets.filter((pet) => selectedPets.includes(pet.title));

      for (const pet of selected) {
        const response = await fetch(pet.url);
        if (!response.ok) throw new Error(`Failed to download: ${pet.title}`);

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${pet.title.replace(/\s+/g, "_")}.jpg`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Download error:", error);
      setError("Failed to download selected images.");
    }
  }, [pets, selectedPets]);

  return {
    pets,
    setPets,
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
  };
};

export { usePets };
