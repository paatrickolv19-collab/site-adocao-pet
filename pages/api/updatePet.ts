import pool from "../../lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") return res.status(405).end();

  const { id, name, type, age, adopted } = req.body;

  const result = await pool.query(
    `UPDATE pets
     SET name=$1, type=$2, age=$3, adopted=$4
     WHERE id=$5
     RETURNING *`,
    [name, type, age, adopted, id]
  );

  res.status(200).json(result.rows[0]);
}
