from django.urls import path
from .views import *

urlpatterns = [
    path('get_all_notes/', NoteList.as_view()),
    path('create_note/', NoteCreate.as_view()),
    path('drop_note/<int:pk>', NoteDetail.as_view()),

    path('get_my_profile_x_note/', SelfProfile_x_NoteList.as_view()),
    path('create_profile_x_note/', Profile_x_NoteCreate.as_view()),

    path('get_profiles/', ProfileList.as_view()),
    path('create_profile/', ProfileCreate.as_view()),
]