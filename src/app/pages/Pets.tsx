import { useEffect, useState } from "react";
import { api } from "../core/http/api";

type Pet = {
  id: number;
  nome: string;
  especie: string;
};

export default function Pets() {
  console.log("TELA PETS RENDERIZOU");
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    api.get("/v1/pets")
      .then(res => setPets(res.data))
      .catch(() => alert("Erro ao carregar pets"));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Pets</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>{pet.nome} - {pet.especie}</li>
        ))}
      </ul>
    </div>
  );
}
