import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb+srv://guaitasamuel:rafael202100@cluster0.zvgo80u.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB is connect");
  } catch (error) {
    console.error(error);
  }
})();
