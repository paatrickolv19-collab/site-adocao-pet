import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type } = req.query;

    let query = 'SELECT * FROM pets';
    const values: any[] = [];

    // Se tiver filtro ?type=algum-tipo
    if (type) {
      query += ' WHERE type = $1';
      values.push(String(type));
    }

    const result = await pool.query(query, values);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    res.status(500).json({ error: 'Erro ao buscar pets' });
  }
}
