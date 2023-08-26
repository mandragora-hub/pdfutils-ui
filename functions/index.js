import { loadDocument } from 'pdf-metadata';

const metadataExtractor = async (req, res) => {
  const { fileUrl } = req.body;
  
  const document = await loadDocument(fileUrl);
  const info = await document.getInfo();

  res.status(200).json(info);
};

export default metadataExtractor;
