from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image


class User(AbstractUser):
    profile_picture = models.ImageField(
        upload_to='profiles/', default='profiles/default.jpg')

    def __srt__(self):
        return "username: " + self.username

    def save(self, *args, **kwargs):
        super().save()
        img = Image.open(self.profile_picture.path)
        if img.height > 150 or img.width > 150:
            new_img = (150, 150)
            img.thumbnail(new_img)
            img.save(self.profile_picture.path)
