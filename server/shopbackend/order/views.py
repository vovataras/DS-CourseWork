from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse

from .models import Poll

def polls_list(request):
    MAX_OBJECTS = 20
    polls = Poll.objects.all()[:MAX_OBJECTS]
    data = {"results": list(polls.values("question", "created_by__username", "pub_date"))}
    return JsonResponse(data)


def polls_detail(request, pk):
    poll = get_object_or_404(Poll, pk=pk)
    data = {"results": {
        "question": poll.question,
        "created_by": poll.created_by.username,
        "pub_date": poll.pub_date
    }}
    return JsonResponse(data)



from rest_framework import generics, status, viewsets
from .models import Poll, Choice, Cart, Checkout, Order, Product
from .serializers import PollSerializer, ChoiceSerializer,\
    VoteSerializer, OrderSerializer, ProductSerializer, CartSerializer, CheckoutSerializer, CartSerializerWithoutProducts
from rest_framework.response import Response


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetail(generics.RetrieveDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class CheckoutList(generics.ListCreateAPIView):
    queryset = Checkout.objects.all()
    serializer_class = CheckoutSerializer


class CheckoutDetail(generics.RetrieveDestroyAPIView):
    queryset = Checkout.objects.all()
    serializer_class = CheckoutSerializer


# class CartList(generics.ListCreateAPIView):
#     queryset = Cart.objects.all()
#     serializer_class = CartSerializer


# class CartDetail(generics.RetrieveDestroyAPIView):
#     queryset = Cart.objects.all()
#     serializer_class = CartSerializer


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetail(generics.RetrieveDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer





class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializerWithoutProducts
    # detail_serializer_class = CartDetailSerializer

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
        print(request.data["comment"])
        cart_data = {
            "productsCount": request.data["productsCount"],
            "comment": request.data["comment"],
            "total": request.data["total"],
        }

        cart = Cart(
          productsCount=request.data["productsCount"],
          comment=request.data["comment"],
          total=request.data["total"],
        )
        try: 
            cart.save() 
            products_data = request.data["products"] 
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
            cart_serializer = CartSerializer(cart) 
            return Response(data=cart_serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
          print(e)
          return Response(status=status.HTTP_400_BAD_REQUEST)



class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # detail_serializer_class = CartDetailSerializer

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
