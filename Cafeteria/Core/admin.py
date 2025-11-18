from django.contrib import admin
from .models import Producto, Sucursal, Promociones, Comentario, Evento

# Register your models here.
admin.site.register(Producto)
admin.site.register(Sucursal)
admin.site.register(Promociones)
admin.site.register(Comentario)
admin.site.register(Evento)