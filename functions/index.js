/* eslint-disable import/no-anonymous-default-export */
import { loadDocument } from "pdf-metadata";

export default (req, res) => {
  const { fileUrl } = req.body;

  if (!fileUrl)
    return res
      .status(400)
      .json({ errors: { message: "Must send a valid  fileUrl. " } });

  loadDocument(fileUrl)
    .then((document) => {
      document.getInfo().then((info) => {
        return res.status(200).json(info);
      });
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};
