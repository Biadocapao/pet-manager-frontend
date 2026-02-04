import { api } from "../core/http/api";

export type Pet = {
  id: number;
  nome: string;
  especie: string;
};

export async function getPets(): Promise<Pet[]> {
  try {
    const response = await api.get("/v1/pets");
    return response.data;
  } catch (error) {
    console.warn("API indisponível, usando mock");
    return [
      { id: 1, nome: "Rex (mock)", especie: "Cachorro" },
      { id: 2, nome: "Mimi (mock)", especie: "Gato" },
    ];
  }
}
