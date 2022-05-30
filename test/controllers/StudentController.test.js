const StudentController = require('../../lib/controllers/StudentController');

describe("Test StudentController", ()=>{
    const students = StudentController.allStudents();
    test("1) allStudents", () =>{
        expect(students.length).toBe(51);
    });
    test("2) emailsWithCertification", () =>{
        const emails = StudentController.emailsWithCertification();

        expect(emails[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("3) creditsMoreCredit", () =>{
        const credits = StudentController.creditsMoreCredit();

        expect(credits.length).toBe(27);
    });
});