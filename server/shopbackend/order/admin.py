from django.contrib import admin

from .models import Checkout, Cart, Order, Product

admin.site.register(Checkout)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(Product)



from .models import Poll, Choice, Vote

admin.site.register(Poll)
admin.site.register(Choice)
admin.site.register(Vote)