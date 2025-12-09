"use client";
import { useState } from "react";

export default function AddPet() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    age: "",
    image: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/addPet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Pet cadastrado com sucesso!");
      setForm({ name: "", type: "", age: "", image: "" });
    } else {
      alert("Erro ao cadastrar pet.");
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Cadastrar Pet</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          placeholder="Tipo (cachorro, gato...)"
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        />

        <input
          type="number"
          placeholder="Idade"
          value={form.age}
          onChange={e => setForm({ ...form, age: e.target.value })}
        />

        <input
          placeholder="URL da imagem"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
