from django.urls import path
from . import views

urlpatterns = [
    path('', views.getBooks),
    path('tags/', views.getTags)
]
