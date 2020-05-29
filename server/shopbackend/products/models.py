from django.db import models


class Product(models.Model):
    CATEGORIES = (
        ('accessories', 'accessories'),
        ('footwear', 'footwear'),
        ('pants', 'pants'),
        ('shirts', 'shirts'),
        ('tshirts', 'tshirts'),
        ('shorts', 'shorts'),
    )

    product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    price = models.FloatField()
    image = models.CharField(max_length=250)
    category = models.CharField(max_length=12, choices=CATEGORIES)
    size = models.CharField(max_length=10)
    description = models.TextField()

    def __str__(self):
        return self.name
    
