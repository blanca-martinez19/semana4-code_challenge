const Reader = require("../../../week4-practicas/lib/utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController{
    static allStudents(){
        return Reader.readJsonFile("visualpartners.json");
    }
    static emailsWithCertification(){
        return StudentService.emailsWithCertification(Reader.readJsonFile("visualpartners.json"));
    }
    static creditsMoreCredit(){
        return StudentService.creditsMoreCredit(Reader.readJsonFile("visualpartners.json"), 500);
    }
}

module.exports = StudentController;