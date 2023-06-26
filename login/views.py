from django.contrib.sessions.models import Session
from django.shortcuts import render, redirect
from django.http import HttpResponse, response
import mysql.connector
from django.contrib.auth import authenticate, login
from login.models import User


def signin(request):
    request.session.clear()
    global user, parola
    if request.method == "POST":
        mydb = mysql.connector.connect(
            host='127.0.0.1',
            database='licenta',
            user='root',
            password='P3lic@n27'
        )
        if request.method == 'POST':
            user = request.POST.get("user")
            pwd = request.POST.get("pwd")
            request.session['user'] = user
            cs = mydb.cursor()
            statement = "SELECT * FROM user WHERE user='{}' AND PWD='{}'".format(user, pwd)
            cs.execute(statement)
            t = tuple(cs.fetchall())
            if t == ():
                return render(request, '404Error.html')
            else:
                request.session['check'] = 1
                return redirect('http://127.0.0.1:8000/home/')
    return render(request, 'login.html')


def signup(request):
    request.session.clear()
    mydb = mysql.connector.connect(
        host='127.0.0.1',
        database='licenta',
        user='root',
        password='P3lic@n27'
    )
    if request.method == 'POST':
        user = request.POST.get("user")
        email = request.POST.get("email")
        pwd = request.POST.get("pwd")
        pwd2 = request.POST.get("pwd2")
        cs = mydb.cursor()
        statement = "SELECT * FROM user WHERE user='{}'".format(user)
        cs.execute(statement)
        t = tuple(cs.fetchall())
        if t == ():
            return render(request, '404Error.html')
        else:
            if pwd == pwd2:
                statement = "UPDATE user SET email='{}', pwd='{}' WHERE user='{}' ".format(email, pwd, user)
                cs.execute(statement)
                mydb.commit()
                statement = "INSERT INTO profilul (user, email) VALUES('{}', '{}') ".format(user, email)
                cs.execute(statement)
                mydb.commit()
            else:
                return render(request, '404Error.html')
        return render(request, 'login.html')
    return render(request, 'signup.html')


def error(request):
    return render(request, '404Error.html')


#1-prof // 2-stud
def home(request):
    try:
        use = request.session['user']
    except KeyError:
        return render(request, '404Error.html')
    if (User.objects.filter(user=use, optio=0).exists()):
        return render(request, 'homeAdmin.html')

    if(User.objects.filter(user=use, optio=1).exists()):
        return render(request, 'home.html')
    else:
        return render(request, 'Home2.html')


def logout(request):
    request.session.clear()
    return render(request, 'login.html')


def adminAdd(request):
    mydb = mysql.connector.connect(
        host='127.0.0.1',
        database='licenta',
        user='root',
        password='P3lic@n27'
    )
    if request.method == 'POST':
        userid = request.POST.get("userid")
        option = request.POST.get("tip")
        cs = mydb.cursor()
        statement = "INSERT INTO user(user, optio) VALUES ('{}','{}') ".format(userid, option)
        cs.execute(statement)
        mydb.commit()
        return redirect('http://127.0.0.1:8000/home/')
    return render(request, 'AddUser.html')

def Sterge(request):
    mydb = mysql.connector.connect(
        host='127.0.0.1',
        database='licenta',
        user='root',
        password='P3lic@n27'
    )
    if request.method == 'POST':
        userid = request.POST.get("userid")
        cs = mydb.cursor()
        statement = "DELETE FROM user WHERE user='{}' ".format(userid)
        cs.execute(statement)
        mydb.commit()
        return redirect('http://127.0.0.1:8000/home/')
    return render(request, 'Sterge.html')

def utilizatorii(request):
    mydb = mysql.connector.connect(
        host='127.0.0.1',
        database='licenta',
        user='root',
        password='P3lic@n27'
    )
    if request.method == 'POST':
        cs = mydb.cursor()
        statement = "SELECT user, option FROM user"
        cs.execute(statement)
        t = cs.fetchall()
    return render(request, 'VeziUtili.html', {'t': t})

def homeAdmin(request):
    return render(request, 'homeAdmin.html')

