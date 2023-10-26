from rest_framework import serializers

from plans.models import Plan, ToDo


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['id', 'user', 'place', 'country',
                  'picture', 'travel_date', 'days', 'completed']


class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ['id', 'plan', 'tank', 'description', 'due_date', 'completed']
