"use client";
import { useEffect, useState } from "react";

export default function PetsPage() {
  const [pets, setPets] = useState([]);

  async function loadPets() {
    const res = await fetch("/api/pets");
    const data = await res.json();
    setPets(data);
  }

  useEffect(() => {
    loadPets();
  }, []);

  async function adopt(id: number) {
    await fetch("/api/adoptPet", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadPets();
  }

  return (
    <div className="grid gap-5 p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {pets.map((pet: any) => (
        <div className="border rounded-xl p-4 shadow" key={pet.id}>
          {pet.image && <img src={pet.image} className="rounded-md mb-2" />}

          <h2 className="text-xl font-bold">{pet.name}</h2>
          <p>Tipo: {pet.type}</p>
          <p>Idade: {pet.age} anos</p>

          {!pet.adopted ? (
            <button
              onClick={() => adopt(pet.id)}
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
            >
              Marcar como adotado
            </button>
          ) : (
            <p className="mt-2 text-green-700 font-semibold">✓ Adotado</p>
          )}
        </div>
      ))}
    </div>
  );
}
