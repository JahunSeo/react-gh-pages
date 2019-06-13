import uuidv5 from "uuid/v5";
export default function generateID(text) {
  if (text) {
    const namespace = "5ff73aab-891b-4420-ada0-e27b771fc0b1";
    const id = uuidv5(text, namespace);
    return id;
  } else {
    return "";
  }
}
