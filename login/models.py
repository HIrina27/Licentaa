from django.db import models
from django.contrib.auth.models import User


class User(models.Model):

    user = models.CharField(max_length=50, null=True)
    email = models.CharField(max_length=40, null=True)
    pwd = models.CharField(max_length=50, null=True)
    option = models.CharField(max_length=10, null=True)

    class Meta:
        db_table = "user"



