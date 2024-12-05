from django.urls import path
from .views import get_experimentos, create_experimentos

urlpatterns = [
    path('experimentos/', get_experimentos, name='get_experimentos'),
    path('experimentos/create/', create_experimentos, name='create_experimentos'),
]