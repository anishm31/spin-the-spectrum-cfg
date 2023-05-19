"""
Represents a student in the DJ class with either autism or neurodivergence.
"""
class Student(object):
    currentID = 0

    """
    Creates a Student instance with the given characteristics.

    :param name: The name of the student.
    :param baselineHeartRate: The baseline heart rate of the student (over 5 minutes).
    :param currentHeartRate: The current heart rate of the student.
    :param triggersDescription: A description of the student's triggers in everyday/DJing situations.
    :param bestSolutionDescription: A description of the best solution(s) to address the student's deregularization/energy level imbalance.
    :param profilePic: The path to the student's profile picture.
    :param calmingPic: The path to the picture that calms the student most during periods of deregularization.
    """
    def __init__(self, name, age, baselineHeartRate, currentHeartRate, triggersDescription, bestSolutionDescription, profilePic, calmingPic):
        self.name = name
        self.age = age
        self.baselineHeartRate = baselineHeartRate
        self.currentHeartRate = currentHeartRate
        self.triggersDescription = triggersDescription
        self.bestSolutionDescription = bestSolutionDescription
        self.profilePic = profilePic
        self.calmingPic = calmingPic
        self.studentID = Student.currentID
        self.severityColor = "green"
        Student.currentID += 1
    
    def getName(self):
        return self.name

    def getAge(self):
        return self.age
    
    def getBaselineHeartRate(self):
        return self.baselineHeartRate
    
    def getCurrentHeartRate(self):
        return self.currentHeartRate
    
    def getTriggersDescription(self):
        return self.triggersDescription

    def getBestSolutionDescription(self):
        return self.bestSolutionDescription
    
    def getProfilePic(self):
        return self.profilePic
    
    def getCalmingPic(self):
        return self.calmingPic
    
    def getSeverityColor(self):
        return self.severityColor
    
    def getID(self):
        return self.studentID

    def setBaselineHeartRate(self, baselineHeartRate):
        self.baselineHeartRate = baselineHeartRate
    
    def setCurrentHeartRate(self, currentHeartRate):
        self.currentHeartRate = currentHeartRate
    
    def setTriggersDescription(self, triggersDescription):
        self.triggersDescription = triggersDescription
    
    def setBestSolutionDescription(self, bestSolutionDescription):
        self.bestSolutionDescription = bestSolutionDescription
    
    def setProfilePic(self, profilePic):
        self.profilePic = profilePic
    
    def setCalmingPic(self, calmingPic):
        self.calmingPic = calmingPic

    def setSeverityColor(self, severityColor):
        self.severityColor = severityColor
    
    """
    Gets the absolute difference in heart rate between the student's baseline heart rate and the current heart rate.
    Used to determine if the student is deregularized and should be calmed down (and if we should alert the staff).
    """
    def getAbsDiffInHeartRate(self):
        return abs(self.baselineHeartRate - self.currentHeartRate)
    
    """
    Returns string representation of student for testing purposes in the format "<name>: <abs diff in heart rate>".
    """
    def __str__(self):
        return f'{self.name}: {self.getAbsDiffInHeartRate()}'
