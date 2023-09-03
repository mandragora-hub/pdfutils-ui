import express from "express";
import { validateBody } from "~/middleware";
import pdfPostSchema from "~/utils/validator/pdfPostSchema";
import { extractMetadataAndPages } from "pdf-metadata";

const router = express.Router();

router.post("/pdf", validateBody(pdfPostSchema), async (req, res) => {
  try {
    const { fileUrl } = req.body;
    if (!fileUrl) throw new Error("Must send a valid fileUrl.");

    console.log(`Processing ${fileUrl}.`);
    const info = await extractMetadataAndPages(fileUrl);
    return res.status(200).json(info);
  } catch (error) {
    return res.status(400).json(error);
  }
});

export default router;
