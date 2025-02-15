const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


const companyData = {
    companyName: "Sopore",
    tagline: "Innovative IT Solutions for a Digital World"
};
// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Homepage route
app.get("/", (req, res) => {
    res.render("index", { companyName: "Sopore", tagline: "Building the Future of IT" });
});
app.get("/services/ai-ml", (req, res) => {
    res.render("services/ai-ml", companyData);
});
app.get("/services/cloud", (req, res) => {
    res.render("services/cloud", companyData);
});
app.get("/services/cybersecurity", (req, res) => {
    res.render("services/cybersecurity", companyData);
});
app.get("/services/software-dev", (req, res) => {
    res.render("services/software-dev", companyData);
});
// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
