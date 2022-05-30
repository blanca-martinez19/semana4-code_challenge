const StudentService = require('../../lib/services/StudentService');

describe("Test StudentService", ()=>{
    test("1) emailsWithCertification", () =>{
        const students = [{name:"1", haveCertification:true}, {name:"1", haveCertification:false}]
        const cert = StudentService.emailsWithCertification(students);

        expect(cert.length).toBe(1);
    });
    test("2) creditsMoreCredit", () =>{
        const students = [{name:"1", credits:100}, {name:"1", credits:600}]
        const credits = StudentService.creditsMoreCredit(students, 500);

        expect(credits.length).toBe(1);
    });
});