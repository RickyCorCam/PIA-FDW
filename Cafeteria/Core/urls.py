from django.urls import path
from . import views

urlspatterns = [
    path('', views.inicio, name='index'),
    path('menu/', views.menu, name='menu'),
    path('sucursales/', views.sucursales, name='sucursales'),
    path('promociones/', views.promociones, name='promociones'),
    path('comentarios/', views.comentarios, name='comentarios'),
    path('comentarios/nuevo/', views.guardar_comentario, name='guardar_comentario'),
]