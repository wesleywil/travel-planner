from django.db import models
from accounts.models import User


class Plan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    place = models.CharField(max_length=100, null=False, blank=False)
    country = models.CharField(max_length=200, null=False, blank=False)
    picture = models.ImageField(upload_to='plan_images/')
    travel_date = models.DateField(null=True, blank=True)
    days = models.IntegerField(null=False, blank=False)
    completed = models.BooleanField(default=False)


class ToDo(models.Model):
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    tank = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateField(null=True, blank=True)
    completed = models.BooleanField(default=False)
