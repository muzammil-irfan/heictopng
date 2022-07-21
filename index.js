const { promisify } = require("util");
const fs = require("fs");
const convert = require("heic-convert");

const heicToPng = async (sourceFolderPath, fileName) => {
  const inputBuffer = await promisify(fs.readFile)(sourceFolderPath + fileName);
  const outputBuffer = await convert({
    buffer: inputBuffer, // the HEIC file buffer
    format: "PNG", // output format
  });
  await promisify(fs.writeFile)(
    `output/${fileName.slice(0, fileName.length - 5)}.png`,
    outputBuffer
  );
};
const sourceFolderPath = "source/";

heicToPng(sourceFolderPath, "IMG_1662.HEIC");
