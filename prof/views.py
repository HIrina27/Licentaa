from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.checks import messages
from django.shortcuts import render, redirect
from django.views import View
from .models import Profil
import mysql.connector
from django.contrib.auth.decorators import login_required


def profil(request):
   try:
      use = request.session['user']
   except KeyError:
      return render(request, '404Error.html')
   pr = Profil.objects.filter(user=use)
   return render(request, 'Profil.html', {'pr': pr})


def updateprofil(request):
   try:
      use = request.session['user']
   except KeyError:
      return render(request, '404Error.html')
   pr = Profil.objects.filter(user=use)
   mydb = mysql.connector.connect(
      host='127.0.0.1',
      database='licenta',
      user='root',
      password='P3lic@n27'
   )
   if request.method == 'POST':
      nume =request.POST.get("nume")
      telefon = request.POST.get("telefon")
      profesie = request.POST.get("profesie")
      despre = request.POST.get("despre")
      optional = request.POST.get("optional")
      cs = mydb.cursor()
      statement = "SELECT * FROM profilul WHERE user='{}'".format(use)
      cs.execute(statement)
      t = tuple(cs.fetchall())
      if t == ():
         return render(request, '404Error.html')
      else:
         statement = "UPDATE profilul SET nume='{}',telefon='{}', profesie='{}', despre='{}' WHERE user='{}'".format(nume, telefon, profesie, despre, use)
         cs.execute(statement)
         mydb.commit()
      return redirect('http://127.0.0.1:8000/profil/')
   return render(request, 'updateprofil.html', {'pr': pr})



def schimba(request):
   return render(request, 'parola.html')
