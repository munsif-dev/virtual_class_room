from django.urls import path,include
from rest_framework import generics
from .models import User
from .serializers import UserProfileSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
