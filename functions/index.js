/* eslint-disable import/no-anonymous-default-export */
import { loadDocument } from "pdf-metadata";

export default async (req, res) => {
  const { fileUrl } = req.body;

  const document = await loadDocument(fileUrl);
  const info = await document.getInfo();

  res.status(200).json(info);
};
