/* eslint-disable import/no-anonymous-default-export */
import { Request, Response } from "express";
import { loadDocument } from "pdf-metadata";

export default async (req: Request, res: Response) => {
  try {
    const { fileUrl } = req.body;
    if (!fileUrl) throw new Error("Must send a valid fileUrl.");

    console.log(`Processing ${fileUrl}.`);

    const document = await loadDocument(fileUrl);
    const info = await document.getInfo();
    return res.status(200).json(info);
  } catch (error) {
    return res.status(400).json(error);
  }
};
