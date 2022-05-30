const StudentController = require("../lib/controllers/StudentController");
const express = require("express");
const {response} = require('express');

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking API welcome!"});
});

app.get("/students", (request, response) => {
    const students = StudentController.allStudents();
    response.json(students)
});

app.get("/students/emails", (request, response) => {
    const students = StudentController.emailsWithCertification();
    response.json(students)
});

app.get("/students/credits", (request, response) => {
    const students = StudentController.creditsMoreCredit();
    response.json(students)
});

app.listen(port, ()=>{
    console.log(`app port ${port}`)
})
