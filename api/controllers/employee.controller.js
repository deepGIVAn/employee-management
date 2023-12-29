import Employee from "../models/employee.js";

export const addEmployee = async (req, res) => {
  try {
    // const {
    //   employeeId,
    //   name,
    //   designation,
    //   joiningDate,
    //   dateOfBirth,
    //   salary,
    //   activeEmployee,
    //   phoneNumber,
    //   address,
    // } = req.body;
    res.send("Hello dhasjk");
  } catch (error) {
    console.log("Geeting Error while adding employee", error);
    res.status(500).json({ message: "Failed to add an Employee" });
  }
};
