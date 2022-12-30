from django.utils.timezone import now
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import *


class NoteList(generics.ListAPIView):
    serializer_class = NoteSerializer
    queryset = note.objects.all()


class NoteCreate(generics.CreateAPIView):
    serializer_class = NoteSerializer


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer
    queryset = note.objects.all()


class Profile_x_NoteList(generics.ListAPIView):
    serializer_class = Profile_x_NoteSerializer
    queryset = profile_x_note.objects.all()


class SelfProfile_x_NoteList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = Profile_x_NoteSerializer
    queryset = profile_x_note.objects.all()

    def get_queryset(self):
        queryset = super(SelfProfile_x_NoteList, self).get_queryset()
        return queryset.filter(user=self.request.user)


class Profile_x_NoteCreate(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = Profile_x_NoteSerializer
    queryset = profile_x_note.objects.all()

    def perform_create(self, serializer):
        user = profile_x_note.objects.get(user=self.request.user)
        serializer.save(user=self.request.user)


class ProfileList(generics.ListAPIView):
    serializer_class = ProfileSerializer
    queryset = profile.objects.all()


class SelfProfile(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer
    queryset = profile.objects.all()

    def get_queryset(self):
        queryset = super(SelfProfile, self).get_queryset()
        return queryset.filter(user=self.request.user)


class ProfileCreate(generics.CreateAPIView):
    serializer_class = CreateProfileSerializer
    queryset = profile.objects.all()

    def perform_create(self, serializer):
        u = User.objects.create_user(username=self.request.data["username"], email=self.request.data["email"],
                                     password=self.request.data["password"])
        serializer.save(user=u)
