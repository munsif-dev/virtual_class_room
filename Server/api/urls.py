from django.urls import path,include
from .views import UserList

urlpatterns = [
    path('user-list', UserList.as_view()),
]

