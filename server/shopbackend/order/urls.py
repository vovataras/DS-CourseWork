from django.urls import include, path
from .apiviews import PollList, PollDetail, ChoiceList, CreateVote
from .views import OrderList, OrderDetail, CheckoutList, CheckoutDetail, CartViewSet, ProductList, ProductDetail, OrderViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'carts', CartViewSet)
router.register(r'orders', OrderViewSet)
# router.register(r'cities', views.CityViewSet)
# router.register(r'districts', views.DistrictViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path("polls/", PollList.as_view(), name="polls_list"),
    path("polls/<int:pk>/", PollDetail.as_view(), name="polls_detail"),
    path("choices/", ChoiceList.as_view(), name="choice_list"),
    path("vote/", CreateVote.as_view(), name="create_vote"), 
    # path("orders/", OrderList.as_view(), name="create_vote"), 
    # path("orders/<int:pk>/", OrderDetail.as_view(), name="create_vote"), 
    path("checkouts/", CheckoutList.as_view(), name="create_vote"), 
    path("checkouts/<int:pk>/", CheckoutDetail.as_view(), name="create_vote"), 
    # path("carts/", CartList.as_view(), name="create_vote"), 
    # path("carts/<int:pk>/", CartDetail.as_view(), name="create_vote"), 
    path("products/", ProductList.as_view(), name="create_vote"), 
    path("products/<int:pk>/", ProductDetail.as_view(), name="create_vote"), 
    # path("vote/", CreateVote.as_view(), name="create_vote"), 
]