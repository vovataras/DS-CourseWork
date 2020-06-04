from django.db import models


# class Checkout(models.Model):
#     phone = models.CharField(max_length=15)
#     email = models.CharField(max_length=50)
#     name = models.CharField(max_length=50)
#     surname = models.CharField(max_length=50)
#     address = models.CharField(max_length=200)
#     city = models.CharField(max_length=50)
#     index = models.CharField(max_length=10)

#     class Meta: 
#         verbose_name = 'Checkout'
#         verbose_name_plural = 'Checkcouts'

#     def __str__(self):
#         return f'{self.name} {self.surname} - phone: {self.phone}'


# class Cart(models.Model):
#     productsCount = models.IntegerField()
#     comment = models.TextField()
#     total = models.FloatField()

#     class Meta: 
#         verbose_name = 'Cart'
#         verbose_name_plural = 'Carts'

#     def __str__(self):
#         return f'Products count: {self.productsCount} - total:{self.total}'


# class Order(models.Model):
#     checkout = models.ForeignKey(to=Checkout, on_delete=models.CASCADE)
#     cart = models.ForeignKey(to=Cart, on_delete=models.CASCADE)

#     class Meta: 
#         verbose_name = 'Order'
#         verbose_name_plural = 'Orders'

#     def __str__(self):
#         return f'{self.checkout.name} {self.checkout.surname}, phone: {self.checkout.phone} - total: {self.cart.total}'



class Checkout(models.Model):
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    index = models.CharField(max_length=10)

    class Meta: 
        verbose_name = 'Checkout'
        verbose_name_plural = 'Checkcouts'

    def __str__(self):
        return f'{self.name} {self.surname} - phone: {self.phone}'


class Cart(models.Model):
    productsCount = models.IntegerField()
    comment = models.TextField()
    total = models.FloatField()
    

    class Meta: 
        verbose_name = 'Cart'
        verbose_name_plural = 'Carts'

    def __str__(self):
        return f'Products count: {self.productsCount} - total:{self.total}'


class Order(models.Model):
    checkout = models.ForeignKey(to=Checkout, on_delete=models.CASCADE)
    cart = models.ForeignKey(to=Cart, on_delete=models.CASCADE)

    class Meta: 
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    def __str__(self):
        return f'{self.checkout.name} {self.checkout.surname}, phone: {self.checkout.phone} - total: {self.cart.total}'


class Product(models.Model):
    cart = models.ForeignKey(Cart, related_name='products', on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    # unique_id = models.CharField(max_length=30)
    product_id = models.IntegerField()
    name = models.CharField(max_length=50)
    price = models.FloatField()
    image = models.CharField(max_length=250)
    category = models.CharField(max_length=12)
    size = models.CharField(max_length=10)
    quantity = models.IntegerField()
    totalPrice = models.FloatField()

    class Meta: 
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'{self.name} - price: {self.price}, quantity: {self.quantity}, total: {self.totalPrice}'







from django.contrib.auth.models import User


class Poll(models.Model):
    question = models.CharField(max_length=100)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question


class Choice(models.Model):
    poll = models.ForeignKey(Poll, related_name='choices', on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=100)

    def __str__(self):
        return self.choice_text


class Vote(models.Model):
    choice = models.ForeignKey(Choice, related_name='votes', on_delete=models.CASCADE)
    poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    voted_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("poll", "voted_by")