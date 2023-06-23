"""
URL configuration for Licenta project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from login.views import signin, error, home, signup, logout, adminAdd, Sterge, homeAdmin
from prof.views import profil, updateprofil, insta
from disciplina.views import lista, GeneratePdf, Cautare, Afisare, Mail
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', signin,),
    path('Error/', error),
    path('login/', signin),
    path('signup/', signup),
    path('home/', home),
    path('profil/', profil),
    path('update/', updateprofil),
    path('Adauga/', lista),
    path('pdf/', GeneratePdf.as_view()),
    path('cauta/', Cautare),
    path('logout/', logout),
    path('Afisare/', Afisare),
    path('Mail/', Mail),
    path('AdminAdd/', adminAdd),
    path('Sterge/', Sterge),
    path('Acasa/', homeAdmin),
    path('Insta/', insta),
]


