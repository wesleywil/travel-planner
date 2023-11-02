from django.http import Http404
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from knox.auth import TokenAuthentication


from .models import Plan, ToDo
from .serializers import (
    PlanSerializer,
    ToDoSerializer
)


class PlansViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get(self, request, format=None):
        queryset = Plan.objects.all().order_by('-id')
        serializer = PlanSerializer(
            queryset, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PlanSerializer(
            data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PlansDetailsViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get_object(self, pk):
        try:
            return Plan.objects.get(pk=pk)
        except Plan.DoesNotExist:
            return Http404

    def get(self, request, pk, format=None):
        plan = self.get_object(pk)
        serializer = PlanSerializer(plan, context={"request": request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        plan = self.get_object(pk)
        serializer = PlanSerializer(plan, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        plan = self.get_object(pk)
        plan.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ToDoViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get(self, request, planId, format=None):
        queryset = ToDo.objects.filter(plan_id=planId)
        serializer = ToDoSerializer(
            queryset, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request, planId, format=None):
        serializer = ToDoSerializer(
            data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ToDoDetailsViewSet(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get_object(self, pk):
        try:
            return ToDo.objects.get(pk=pk)
        except ToDo.DoesNotExist:
            return Http404

    def get(self, request, pk, format=None):
        toDo = self.get_object(pk)
        serializer = ToDoSerializer(toDo, context={"request": request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        toDo = self.get_object(pk)
        serializer = ToDoSerializer(toDo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        toDo = self.get_object(pk)
        toDo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
