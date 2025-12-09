import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { name, type, age, image } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Nome é obrigatório" });
    }

    const result = await pool.query(
      `INSERT INTO pets (name, type, age, image)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, type, age || null, image || null]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar pet:", error);
    res.status(500).json({ error: "Erro ao criar pet" });
  }
}
