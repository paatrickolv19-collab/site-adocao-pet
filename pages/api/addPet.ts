import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../lib/db";
import { supabase } from "../../lib/supabase";

export const config = {
  api: {
    bodyParser: false,
  },
};

import formidable from "formidable";
import fs from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Erro no upload." });

    const { name, type, age } = fields;

    let imageURL = null;

    // Upload da imagem
    if (files.image) {
      const file = fs.readFileSync(files.image.filepath);
      const fileName = `pets_${Date.now()}.jpg`;

      const { data, error } = await supabase.storage
        .from("pets")
        .upload(fileName, file, { contentType: "image/jpeg" });

      if (error) return res.status(500).json({ error: "Erro ao enviar imagem." });

      imageURL =
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/pets/` +
        fileName;
    }

    // Inserir no banco
    const result = await pool.query(
      `INSERT INTO pets (name, type, age, image)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, type, age || null, imageURL]
    );

    res.status(200).json(result.rows[0]);
  });
}
