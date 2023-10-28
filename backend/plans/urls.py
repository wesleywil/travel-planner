from django.urls import path
from .views import (
    PlansViewSet,
    PlansDetailsViewSet,
    ToDoViewSet,
    ToDoDetailsViewSet
)

app_name = "plans_apis"

urlpatterns = [
    # Crud plans and toDo
    path('', PlansViewSet.as_view(), name='plans'),
    path('<int:pk>/', PlansDetailsViewSet.as_view(), name="plans_details"),
    path('toDo/', ToDoViewSet.as_view(), name='toDo'),
    path('toDo/<int:pk>/', ToDoDetailsViewSet.as_view(), name="toDo_details"),
]
