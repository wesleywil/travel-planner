from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from PIL import Image

import os

from accounts.models import User


class Plan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    place = models.CharField(max_length=100, null=False, blank=False)
    country = models.CharField(max_length=200, null=False, blank=False)
    picture = models.ImageField(
        upload_to='plan_images/', default="plan_images/default.jpg")
    travel_date = models.DateField(null=True, blank=True)
    days = models.IntegerField(null=False, blank=False)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return "user: " + self.user.username + " plan to: " + self.place + "-" + self.country

    def save(self, *args, **kwargs):
        super().save()
        img = Image.open(self.picture.path)
        if img.height > 150 or img.width > 150:
            new_img = (150, 150)
            img.thumbnail(new_img)
            img.save(self.picture.path)


class ToDo(models.Model):
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    task = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateField(null=True, blank=True)
    completed = models.BooleanField(default=False)


@receiver(pre_delete, sender=Plan)
def delete_plan_picture(sender, instance, **kwargs):
    # Check if the instance has a picture and delete it
    if instance.picture and instance.picture.name != 'plan_images/default.jpg':
        if os.path.isfile(instance.picture.path):
            os.remove(instance.picture.path)
