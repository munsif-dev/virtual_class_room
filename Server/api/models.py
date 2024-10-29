from django.db import models
from django.contrib.auth.models import User
from django.db import models
import random
import string

def generate_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if StudyRoom.objects.filter(code=code).count() == 0:
            break
    return code

## Models,below here are classes that inherit from django.db.models.Model

class UserProfile(models.Model):
    #user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    user = models.OneToOneField(User, on_delete=models.CASCADE, default="user1", related_name="profile")
    ROLE_CHOICES = [('student', 'Student'), ('lecturer', 'Lecturer')]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    bio = models.TextField(blank=True, null=True)
    university = models.CharField(max_length=255, blank=True, null=True)
    field_of_study = models.CharField(max_length=255, blank=True, null=True)
    year_of_study = models.IntegerField(blank=True, null=True)



class StudyRoom(models.Model):
    host = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="hosted_rooms")
    code = models.CharField(max_length=8, unique=True)
    topic = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.topic} by {self.host.user.username}"
