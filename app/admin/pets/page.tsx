"use client";

import { useEffect, useState } from "react";

export default function AdminPets() {
  const [pets, setPets] = useState([]);

  async function loadPets() {
    const res = await fetch("/api/pets");
    setPets(await res.json());
  }

  async function deletePet(id: number) {
    await fetch(`/api/deletePet?id=${id}`, { method: "DELETE" });
    loadPets();
  }

  useEffect(() => {
    loadPets();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6 font-bold">Painel Admin</h1>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet: any) => (
          <div key={pet.id} className="border p-4 rounded-xl shadow">
            <img src={pet.image} className="rounded-md mb-2" />

            <h2 className="font-bold text-xl">{pet.name}</h2>

            <button
              onClick={() => deletePet(pet.id)}
              className="mt-3 bg-red-600 text-white px-3 py-1 rounded"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
