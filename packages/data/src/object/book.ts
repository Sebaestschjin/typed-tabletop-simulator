import { ObjectDataBase } from "./base.js";

export const BookData = ObjectDataBase.and({
  Name: "'Custom_PDF'",
  CustomPDF: {
    PDFUrl: "string",
    PDFPage: "number",
    PDFPageOffset: "number",
  },
});
