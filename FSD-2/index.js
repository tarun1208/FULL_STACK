const mongoose = require("mongoose");

const url = "mongodb+srv://23pa1a05i0_db_user:8BAaA2o2u8L6kAIT@cluster0.volnfjv.mongodb.net/";

const StudentSchema = new mongoose.Schema({
  Name: String,
  Roll: Number,
  Marks: Number,
});

const Student = mongoose.model("Student", StudentSchema);

async function Crud() {
  try {
    await mongoose.connect(url);
    console.log("✅ MongoDB connected");

    // Create
    const newStudent = await Student.create({
      Name: "Tarun",
      Roll: 21,
      Marks: 100,
    });
    console.log("Inserted:", newStudent);

    // Read
    const allStudents = await Student.find({ Name: "Tarun" });
    console.log("Read:", allStudents);

    // Update
    await Student.updateOne({ Name: "Tarun" }, { Marks: 99 });
    console.log("Updated Marks to 99");

    // Delete
    await Student.deleteOne({ Name: "Tarun" });
    console.log("Deleted!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

Crud();
