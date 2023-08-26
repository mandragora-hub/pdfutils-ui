/* eslint-disable import/no-anonymous-default-export */
// import { loadDocument } from "pdf-metadata";

export default async (req, res) => {
  // const { fileUrl } = req.body;
  // return res
  // .status(400)
  // .json({ errors: { message: "Must send a valid  fileUrl. " } });
  // const document = await loadDocument(fileUrl);
  // const info = await document.getInfo();

  res.status(200).json({info: 'info'});
};
