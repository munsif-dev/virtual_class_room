from rest_framework import serializers
from .models import StudyRoom, UserProfile
# whenever the model is created we need to create a serializer for it
# and the id field is always included in the fields list, because it is the primary key of the model
# it is created automatically by Django when one model instance is created
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'role', 'bio', 'university', 'field_of_study', 'year_of_study']

class StudyRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyRoom
        fields = ['id', 'host', 'code', 'topic', 'description', 'created_at', 'is_active']

