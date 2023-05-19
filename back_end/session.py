import os
import random
from Student import Student 
from numpy import random

class Session(Student):

    currentSession = None

    def __init__(self,studentList):
        self.studentList = studentList
        self.endSession = False
        Session.currentSession = self

    """
    Starts session for the Server
    """
    def startSession():
        #create session instance and call update
        if not Session.currentSession:
            Session([])
        return Session.currentSession

    """
    Ends Server
    """
    def endTheSession(self):
        self.endSession = True

    def getCurrentInstance():
        return Session.currentSession
    
    """
    Prints the List of Students
    """
    def printStudentList(self):
        for i in range(len(self.studentList)):
            print(self.studentList[i])

    """
    Return the list of the students sorted in descending order by absolute difference in heart rate.
    """
    def getSortedStudentList(self):
        for i in range(len(self.studentList)):
            self.updateStudent(self.studentList[i].getID())
        
        self.updateSelfServiceFile()

        return sorted(self.studentList, key=lambda student: student.getAbsDiffInHeartRate(), reverse=True)
    
    """
    Given the current statuses of the students, update the file listing the self-service actions we would
    have taken if we had been running apps for each student in conjunction with this one used by the staff.
    """
    def updateSelfServiceFile(self):
        if not os.path.exists(os.path.join('..', '..', 'Text Output')):
            os.makedirs(os.path.join('..', '..', 'Text Output'))
        f = open(os.path.join('..', '..', 'Text Output', "selfService.txt"), "a")
        for i in range(len(self.studentList)):
            if (self.studentList[i].getSeverityColor() == "yellow" or self.studentList[i].getSeverityColor() == "red"):
                f.write(f"Would have given student {self.studentList[i].getName()} their calming image: {self.studentList[i].getCalmingPic()}\n")
        f.close()

    """
    Adds a student to the list of students
    """
    def addToStudentList(self, student):
        self.studentList.append(student)
    
    """
    Update the given student (by ID) with the new student object.
    Simulates updates to student by a random number on a bell curve
    Uses standard deviation to keep track of their state
    Could/Would be implemented further with multithreading
    """
    def updateStudent(self, id):
            currentRate = self.studentList[id].getCurrentHeartRate()
            ageOfStudent = self.studentList[id].getAge()
            maxRate = 208 - ageOfStudent*0.7 
            randnormal = round(random.normal(loc=currentRate, scale= 9/6))
            if randnormal > self.studentList[id].getBaselineHeartRate() + 9 or randnormal < self.studentList[id].getBaselineHeartRate() - 9:
                self.studentList[id].setSeverityColor("yellow")
            if randnormal > self.studentList[id].getBaselineHeartRate() + 9*2 or randnormal < self.studentList[id].getBaselineHeartRate() - 9*2:
                self.studentList[id].setSeverityColor("red")
            self.studentList[id].setCurrentHeartRate(randnormal)
    
    """
    Delete the student with the given studentID.
    """
    def deleteStudent(self, studentID):
        for i in range(len(self.studentList)):
            if self.studentList[i].getID() == studentID:
                self.studentList.pop(i)
                break
    
if __name__ == "__main__":
    
    stu1 = Student("hi1",35,75,75,"loud noises", "put on headphones", 0,0)
    stu2 = Student("hi2",35,75,75,"loud noises", "put on headphones", 0,0)
    stu3 = Student("hi3",35,75,75,"loud noises", "put on headphones", 0,0)
    l = [stu2,stu3]
    newList = Session(l)
    newList.addToStudentList(stu1)
    Session.startSession()
    
    for i in range (50):
        #for i in range(len(newList.studentList)):
            #newList.updateStudent(newList.studentList[i].getID())
        sortedStudents = newList.getSortedStudentList()
        for student in sortedStudents:
            print(student)
    newList.endTheSession()
    #once requested for sort -> update and return sorted