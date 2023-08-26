import { loadDocument } from "pdf-metadata";

exports.handler = async function (event, context) {
  try {
    const { fileUrl } = JSON.parse(event.body);
    if (!fileUrl) throw new Error("Must send a valid fileUrl.");

    console.log(`Processing ${fileUrl}.`);

    const document = await loadDocument(fileUrl);
    const info = await document.getInfo();
    
    return {
      statusCode: 200,
      body: JSON.stringify(info),
    };
  } catch (error) {
    return res.status(400).json(error);
  }
};


