import pdf from "pdf-parse";

const data = await pdf(buffer);

console.log(data.text);
