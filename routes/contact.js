// // const express = require('express');
// // const router = express.Router();
// // const path = require('path');
// // const { handleContact } = require('../controllers/contact'); // Import feedback handler
// // // const authMiddleware = require('../middleware/auth'); // Authentication middleware


// // router.route('/feedback')
// // .get((req, res) => {
// //     res.sendFile(path.join(__dirname, '../public/feedback.html'));
// // })
// // .post(handleContact); // Protected route

// // module.exports = router;



// const express = require("express");
// const router = express.Router();
// const path = require("path");
// const { handleContact } = require("../controllers/contact"); // Import feedback handler

// // Log incoming requests
// router.post("/feedback", (req, res, next) => {
//     console.log("📩 Feedback POST Request Received:", req.body);
//     next();
// });

// // Routes
// router.get("/feedback", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/feedback.html"));
// });

// router.post("/feedback", handleContact);

// module.exports = router;


const express = require("express");
const router = express.Router();
const path = require("path");
const { handleContact } = require("../controllers/contact");

// Log incoming requests
router.post("/feedback", (req, res, next) => {
    console.log("📩 Feedback POST Request Received:", req.body);
    next();
});

// Serve Feedback Form
router.get("/feedback", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact/feedback.html"));
});

// Handle Form Submission
router.post("/feedback", handleContact);

module.exports = router;
