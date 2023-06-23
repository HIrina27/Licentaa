from django.db import models
from login.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profil(models.Model):

    user = models.CharField(max_length=30, null=True)
    email = models.CharField(max_length=40, null=True)
    telefon = models.CharField(max_length=10, null=True)
    nume = models.CharField(max_length=20, null=True)
    profesie = models.CharField(max_length=50, null=True)
    despre = models.CharField(max_length=100, null=True)


    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        # save the profile first
        super().save(*args, **kwargs)

    @receiver(post_save, sender=User)  # add this
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profil.objects.create(user=instance)

    @receiver(post_save, sender=User)  # add this
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()

    class Meta:
        db_table = "profilul"
