from django.shortcuts import render, redirect
from .models import Producto, Sucursal, Promociones, Comentario

# Create your views here.
def index(request):
    return render(request, "index.html")
def menu(request):
    productos = Producto.objects.all()
    return render(request, "menu.html", {"productos": productos})
def sucursales(request):
    lista = Sucursal.objects.all()
    return render(request, "sucursales.html", {"sucursales": lista})
def promociones(request):
    promos = Promociones.objects.all()  # ✔ USA EL MODELO
    return render(request, "promociones.html", {"promos": promos})
def comentarios(request):
    lista = Comentario.objects.all()
    return render(request, "comentarios.html", {"comentarios": lista})
def guardar_comentario(request):
    if request.method == "POST":
        nombre = request.POST["nombre"]
        texto = request.POST["comentario"]
        Comentario.objects.create(nombre=nombre, comentario=texto)
        return redirect("index")