from rest_framework import serializers
from .models import Checkout, Cart, Product, Order


class CheckoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checkout
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Cart
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    checkout = CheckoutSerializer()
    cart = CartSerializer()

    class Meta:
        model = Order
        fields = '__all__'
