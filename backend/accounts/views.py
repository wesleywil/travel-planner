from django.contrib.auth import login
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status, generics, permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView


from accounts.models import User
from accounts.serializers import (
    UserModelSerializer,
    RegisterSerializer,
    LoginSerializer
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


class RetrieveUserProfileByToken(APIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get_object(self, pk):
        try:
            return AuthToken.objects.get(token_key=pk)
        except AuthToken.DoesNotExist:
            raise Http404

    def post(self, request, format=None):
        data = request.data["token_key"]
        converted = data[:8]
        Auth = AuthToken.objects.get(token_key=converted)
        user = User.objects.get(id=Auth.user.id)
        serializer = UserModelSerializer(user)
        return Response(serializer.data)
