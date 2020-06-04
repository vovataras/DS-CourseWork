from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse


from rest_framework import generics, status, viewsets
from .models import Poll, Choice, Cart, Checkout, Order, Product
from .serializers import OrderSerializer, ProductSerializer, CartSerializer, CheckoutSerializer
from rest_framework.response import Response


class CheckoutViewSet(viewsets.ModelViewSet):
    queryset = Checkout.objects.all()
    serializer_class = CheckoutSerializer
    http_method_names = ['get', 'options']


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    http_method_names = ['get', 'options']


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ['get', 'options']


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # detail_serializer_class = OrderDetailSerializer

    # def get_serializer_class(self):
    #     if self.action == 'retrieve':
    #         if hasattr(self, 'detail_serializer_class'):
    #             return self.detail_serializer_class
    #     return super().get_serializer_class()

    # def get_queryset(self):
    #     queryset = Cart.objects.all()

    #     title = self.request.query_params.get('title', None)

    #     if title is not None:
    #         queryset = queryset.filter(title=title)

    #     return queryset

    def create(self, request):
        checkout_data = request.data["checkout"]
        cart_data = request.data["cart"]

        checkout = Checkout(
            phone=checkout_data["phone"],
            email=checkout_data["email"],
            name=checkout_data["name"],
            surname=checkout_data["surname"],
            address=checkout_data["address"],
            city=checkout_data["city"],
            index=checkout_data["index"]
        )
        cart = Cart(
            productsCount=cart_data["productsCount"],
            comment=cart_data["comment"],
            total=cart_data["total"],
        )

        try:
            checkout.save()
            cart.save()
            products_data = cart_data["products"]
            for product_data in products_data:
                product = Product(
                    product_id=product_data["product_id"],
                    name=product_data["name"],
                    price=product_data["price"],
                    image=product_data["image"],
                    category=product_data["category"],
                    size=product_data["size"],
                    quantity=product_data["quantity"],
                    totalPrice=product_data["totalPrice"],
                    cart=cart
                )
                product.save()
            order = Order(checkout=checkout, cart=cart)
            order.save()
            order_serializer = OrderSerializer(order)
            return Response(data=order_serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
