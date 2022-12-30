from rest_framework import serializers
from .models import *


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = note
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = '__all__'


class CreateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = 'username'


class Profile_x_NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile_x_note
        fields = '__all__'
