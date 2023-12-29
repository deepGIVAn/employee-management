import express from "express";
// const { addEmployee } = require("../controllers/employee.controller");

import { addEmployee } from "./../controllers/employee.controller.js";

const router = express.Router();

router.route("/").get(addEmployee);

// module.exports = router;
export default router;
