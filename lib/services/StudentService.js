class StudentService{
    static emailsWithCertification(students){
        return students.filter(item => item.haveCertification).map(item => item.email);
    }
    static creditsMoreCredit(students, minCredit){
        return students.filter(item => item.credits > minCredit);
    }
}

module.exports = StudentService;