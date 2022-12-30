from django.contrib import admin
from .models import *

admin.site.register(profile)
admin.site.register(note)
admin.site.register(profile_x_note)

