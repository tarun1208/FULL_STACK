const express = require("express");
const app = express();
app.set("abc", "abc");
app.use(express.urlencoded({ wheather: true }));
app.get("/", (req, res) => {
  res.send(`
    <h2>Enter Your Details</h2>
    <form action="/submit" method="POST">
      <label>Name:</label>
      <input type="text" name="name" required><br><br>
      <label>Email:</label>
      <input type="email" name="email" required><br><br>
      <label>Age:</label>
      <input type="number" name="age" required><br><br>
      <label>Gender:</label>
      <input type="radio" name="gender" value="Male" required> Male
      <input type="radio" name="gender" value="Female"> Female
      <input type="radio" name="gender" value="Other"> Other<br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});
app.post("/submit", (req, res) => {
  const { name, email, age, gender} = req.body;
  res.send(`
    <h2>Form Submitted Successfully!</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Gender:</b> ${gender}</p>
    <a href="http://localhost:3000/submit">Go Back</a>
  `);
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
