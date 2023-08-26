import { loadDocument } from "pdf-metadata";

export default async function handler(req, res) {
  if (req.method === "POST") {
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
  } else {
    res.status(400).send("Http method must be POST");
  }
}
