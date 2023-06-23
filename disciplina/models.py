from django.db import models


# Create your models here.


class Disciplina(models.Model):
    user = models.CharField(max_length=10, null=True, default=" ")
    facultate = models.CharField(max_length=70, null=True, default=" ")
    departament = models.CharField(max_length=50, null=True, default=" ")
    catedra = models.CharField(max_length=10, null=True, default=" ")
    denumireDomeniuStud = models.CharField(max_length=50, null=True, default=" ")
    codDenumireStud = models.CharField(max_length=10, null=True, default=" ")
    ciclu = models.CharField(max_length=20, null=True, default=" ")
    denumireProgStud = models.CharField(max_length=50, null=True, default=" ")
    codProgStud = models.CharField(max_length=10, null=True, default=" ")
    calificare = models.CharField(max_length=20, null=True, default=" ")
    disciplina = models.CharField(max_length=70, null=True, default=" ")
    titularCurs = models.CharField(max_length=80, null=True, default=" ")
    titularLab = models.CharField(max_length=80, null=True, default=" ")
    an = models.CharField(max_length=20, null=True, default=" ")
    semestru = models.CharField(max_length=20, null=True, default=" ")
    tipevaluare = models.CharField(max_length=20, null=True, default=" ")
    regimdis = models.CharField(max_length=20, null=True, default=" ")
    totoresap = models.CharField(max_length=20, null=True, default=" ")
    cursresap = models.CharField(max_length=20, null=True, default=" ")
    labresap = models.CharField(max_length=20, null=True, default=" ")
    totorean = models.CharField(max_length=20, null=True, default=" ")
    cursrean = models.CharField(max_length=20, null=True, default=" ")
    labrean = models.CharField(max_length=20, null=True, default=" ")
    studiu = models.CharField(max_length=20, null=True, default=" ")
    documentare = models.CharField(max_length=20, null=True, default=" ")
    pregatire = models.CharField(max_length=20, null=True, default=" ")
    tutoriat = models.CharField(max_length=20, null=True, default=" ")
    examinari = models.CharField(max_length=20, null=True, default=" ")
    alteactivitati = models.CharField(max_length=20, null=True, default=" ")
    nrcredite = models.CharField(max_length=20, null=True, default=" ")
    precondCurr = models.CharField(max_length=150, null=True, default=" ")
    precondCom = models.CharField(max_length=150, null=True, default=" ")
    condDesCurs = models.CharField(max_length=100, null=True, default=" ")
    condDesLab = models.CharField(max_length=100, null=True, default=" ")
    comProf = models.CharField(max_length=100, null=True, default=" ")
    comTrans = models.CharField(max_length=100, null=True, default=" ")
    obiecGeneral = models.CharField(max_length=100, null=True, default=" ")
    obiecSpeci = models.CharField(max_length=100, null=True, default=" ")

    curs1 = models.CharField(max_length=300, null=True, default=" ")
    curs2 = models.CharField(max_length=300, null=True, default=" ")
    curs3 = models.CharField(max_length=300, null=True, default=" ")
    curs4 = models.CharField(max_length=300, null=True, default=" ")
    curs5 = models.CharField(max_length=300, null=True, default=" ")
    curs6 = models.CharField(max_length=300, null=True, default=" ")
    curs7 = models.CharField(max_length=300, null=True, default=" ")
    curs8 = models.CharField(max_length=300, null=True, default=" ")
    curs9 = models.CharField(max_length=300, null=True, default=" ")
    curs10 = models.CharField(max_length=300, null=True, default=" ")
    curs11 = models.CharField(max_length=300, null=True, default=" ")
    curs12 = models.CharField(max_length=300, null=True, default=" ")
    curs13 = models.CharField(max_length=300, null=True, default=" ")
    curs14 = models.CharField(max_length=300, null=True, default=" ")

    orec1 = models.CharField(max_length=20, null=True, default=" ")
    orec2 = models.CharField(max_length=20, null=True, default=" ")
    orec3 = models.CharField(max_length=20, null=True, default=" ")
    orec4 = models.CharField(max_length=20, null=True, default=" ")
    orec5 = models.CharField(max_length=20, null=True, default=" ")
    orec6 = models.CharField(max_length=20, null=True, default=" ")
    orec7 = models.CharField(max_length=20, null=True, default=" ")
    orec8 = models.CharField(max_length=20, null=True, default=" ")
    orec9 = models.CharField(max_length=20, null=True, default=" ")
    orec10 = models.CharField(max_length=20, null=True, default=" ")
    orec11 = models.CharField(max_length=20, null=True, default=" ")
    orec12 = models.CharField(max_length=20, null=True, default=" ")
    orec13 = models.CharField(max_length=20, null=True, default=" ")
    orec14 = models.CharField(max_length=20, null=True, default=" ")
    bibliografCurs = models.CharField(max_length=300, null=True, default=" ")
    metpredcurs = models.CharField(max_length=200, null=True, default=" ")

    lab1 = models.CharField(max_length=300, null=True, default=" ")
    lab2 = models.CharField(max_length=300, null=True, default=" ")
    lab3 = models.CharField(max_length=300, null=True, default=" ")
    lab4 = models.CharField(max_length=300, null=True, default=" ")
    lab5 = models.CharField(max_length=300, null=True, default=" ")
    lab6 = models.CharField(max_length=300, null=True, default=" ")
    lab7 = models.CharField(max_length=300, null=True, default=" ")
    lab8 = models.CharField(max_length=300, null=True, default=" ")
    lab9 = models.CharField(max_length=300, null=True, default=" ")
    lab10 = models.CharField(max_length=300, null=True, default=" ")

    orel1 = models.CharField(max_length=20, null=True, default=" ")
    orel2 = models.CharField(max_length=20, null=True, default=" ")
    orel3 = models.CharField(max_length=20, null=True, default=" ")
    orel4 = models.CharField(max_length=20, null=True, default=" ")
    orel5 = models.CharField(max_length=20, null=True, default=" ")
    orel6 = models.CharField(max_length=20, null=True, default=" ")
    orel7 = models.CharField(max_length=20, null=True, default=" ")
    orel8 = models.CharField(max_length=20, null=True, default=" ")
    orel9 = models.CharField(max_length=20, null=True, default=" ")
    orel10 = models.CharField(max_length=20, null=True, default=" ")

    bibliografLab = models.CharField(max_length=300, null=True, default=" ")
    metpredlab = models.CharField(max_length=200, null=True, default=" ")
    coroborare = models.CharField(max_length=300, null=True, default=" ")

    criterievalc = models.CharField(max_length=100, null=True, default=" ")
    metvalc = models.CharField(max_length=100, null=True, default=" ")
    ponderenotc = models.CharField(max_length=20, null=True, default=" ")

    criterievalac = models.CharField(max_length=100, null=True, default=" ")
    metvalac = models.CharField(max_length=100, null=True, default=" ")
    ponderenotac = models.CharField(max_length=20, null=True, default=" ")

    criterievall = models.CharField(max_length=100, null=True, default=" ")
    metvall = models.CharField(max_length=100, null=True, default=" ")
    ponderenotl = models.CharField(max_length=20, null=True, default=" ")

    criterievalp = models.CharField(max_length=100, null=True, default=" ")
    metvalp = models.CharField(max_length=100, null=True, default=" ")
    ponderenotp = models.CharField(max_length=20, null=True, default=" ")

    criterievalpr = models.CharField(max_length=100, null=True, default=" ")
    metvalpr = models.CharField(max_length=100, null=True, default=" ")
    ponderenotpr = models.CharField(max_length=20, null=True, default=" ")

    standar = models.CharField(max_length=300, null=True, default=" ")
    date = models.CharField(max_length=300, null=True, default=" ")
    titcurs = models.CharField(max_length=80, null=True, default=" ")
    titac = models.CharField(max_length=80, null=True, default=" ")
    directordep = models.CharField(max_length=80, null=True, default=" ")
    decan = models.CharField(max_length=80, null=True, default=" ")


    class Meta:
        db_table = "discipline"


class Cauta(models.Model):
    cauta = models.CharField(max_length=50, default=" ")

    class Meta:
        db_table = "cauta"
