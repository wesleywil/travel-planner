from django.urls import path
from knox import views as knox_views
from accounts.views import (
    RegisterView,
    LoginView,
    UserProfileView,
    UserUpdatePictureView
)

app_name = "accounts_apis"

urlpatterns = [
    # Register, Login, Retrieve User and Logout
    path('register/', RegisterView.as_view(), name='register_user'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('retrieveUser/', UserProfileView.as_view(), name='retrieve'),
    path('updateUser/<int:pk>/', UserUpdatePictureView.as_view(), name='update_user')
]
