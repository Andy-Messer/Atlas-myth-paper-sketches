from django.db import models
from django.contrib.auth.models import User


class note(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    title = models.TextField(max_length=256)
    text = models.TextField(max_length=5000)

    def __str__(self):
        return self.title


class profile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE)
    username = models.CharField(max_length=50)

    def __str__(self):
        return self.user.__str__()


class profile_x_note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.ForeignKey(note, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.__str__() + ': ' + self.note.__str__()
