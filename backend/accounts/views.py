from django.contrib.auth import login
from django.http import Http404

from rest_framework import generics, permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response

from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication


from accounts.models import User
from accounts.serializers import (
    UserModelSerializer,
    RegisterSerializer,
)


class RegisterView(generics.GenericAPIView):
    permission_classes = ([permissions.AllowAny])
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserModelSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginView(KnoxLoginView):
    permission_classes = ([permissions.AllowAny])

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)


class UserProfileView(generics.RetrieveAPIView):
    permission_classes = ([permissions.IsAuthenticated])
    authentication_classes = (TokenAuthentication,)
    serializer_class = UserModelSerializer

    def get_object(self):
        try:
            return self.request.user
        except User.DoesNotExist:
            raise Http404
