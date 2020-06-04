from django.contrib import admin

from .models import Checkout, Cart, Order, Product

admin.site.register(Checkout)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(Product)
