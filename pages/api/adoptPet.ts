import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID é obrigatório" });
    }

    const result = await pool.query(
      `UPDATE pets SET adopted = true WHERE id = $1 RETURNING *`,
      [id]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao marcar como adotado:", error);
    res.status(500).json({ error: "Erro ao atualizar pet" });
  }
}
