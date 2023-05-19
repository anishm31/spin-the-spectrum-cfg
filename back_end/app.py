from typing import OrderedDict
from flask import Flask, request
from session import Session
from Student import Student
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

"""
Create session instance that manages student list.
"""
@app.get('/onstart')
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def start():
   Session.startSession()
   return {}

"""
Get request for the student list sorted in descending order by absolute difference in heart rate.
"""
@app.get('/students')
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def list_sorted_students():
   sortedStudentsList = Session.getCurrentInstance().getSortedStudentList()
   sortedStudentsDict = OrderedDict()
   for i, student in enumerate(sortedStudentsList):
       sortedStudentsDict[i] = {"currentID": student.getID(), "name": student.getName(), "age": student.getAge(), "baselineHeartRate": student.getBaselineHeartRate(), "currentHeartRate": student.getCurrentHeartRate(), "triggersDescription": student.getTriggersDescription(), "bestSolutionDescription": student.getBestSolutionDescription(), "profilePic": student.getProfilePic(), "calmingPic": student.getCalmingPic(), "severityColor": student.getSeverityColor()}
   return {"students":list(sortedStudentsDict.values())}

"""
Post request for inserting a new student into the student list.

Returns true if the student was successfully added.
"""
@app.route('/addstudent', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def add_student():
   name, age, baselineHeartRate, currentHeartRate, triggersDescription, bestSolutionDescription, profilePic, calmingPic = map(request.json.get, ['name', 'age', 'baselineHeartRate', 'currentHeartRate', 'triggersDescription', 'bestSolutionDescription', 'profilePic', 'calmingPic'])
   student = Student(name, age, baselineHeartRate, currentHeartRate, triggersDescription, bestSolutionDescription, profilePic, calmingPic)
   Session.getCurrentInstance().addToStudentList(student)
   return student.__str__()

app.run()
