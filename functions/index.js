/* eslint-disable import/no-anonymous-default-export */
// import { loadDocument } from "pdf-metadata";

export default async (req, res) => {
  try {
    const { fileUrl } = req.body;
    if (!fileUrl) throw new Error("Must send a valid  fileUrl.");
    // const document = await loadDocument("https://litterarum.onrender.com/api/v1/files/el-hombre-que-calculaba-malba-tahan.pdf");
    // const info = await document.getInfo();
    res.status(200).json({ info: "fileUrl" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
