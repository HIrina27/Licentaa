import pdfkit
from django.core.mail import EmailMessage, send_mail
from django.shortcuts import render, redirect
import mysql.connector
from django.http import HttpResponse,  FileResponse
from django.template.loader import render_to_string, get_template
from django.views.generic import View
from xhtml2pdf import pisa
from .process import html_to_pdf
from .models import Disciplina
path_wkhtmltopdf = r'C:\Program Files (x86)\wkhtmltopdf\bin\wkhtmltopdf.exe'
config = pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf)



def lista(request):
    try:
        user = request.session['user']
    except KeyError:
        return render(request, '404Error.html')
    mydb = mysql.connector.connect(
        host='127.0.0.1',
        database='licenta',
        user='root',
        password='P3lic@n27'
    )
    if request.method == 'POST':
        facultate = request.POST['source']
        departament = request.POST.get("status", None)
        catedra = request.POST.get("catedra", None)
        denumireDomeniuStud = request.POST.get("denumire")
        codDenumireStud = request.POST.get("cod")
        ciclu = request.POST.get("ciclu", None)
        denumireProgStud = request.POST.get("denumire2")
        codProgStud = request.POST.get("cod2")
        calificare = request.POST.get("calificare", None)
        disciplina = request.POST.get("disciplina")
        request.session['disciplina'] = disciplina
        titularCurs = request.POST.get("titularcurs", None)
        titularLab = request.POST.get("titularactivitati", None)
        an = request.POST.get("an", None)
        semestru = request.POST.get("semestru", None)
        tipevaluare = request.POST.get("evaluare", None)
        regimdis = request.POST.get("regim", None)
        totoresap = request.POST.get("oresap", None)
        cursresap = request.POST.get("nrcurs", None)
        labresap = request.POST.get("nrsem", None)
        totorean = request.POST.get("oreplan", None)
        cursrean = request.POST.get("orecurs", None)
        labrean = request.POST.get("oresem", None)
        studiu = request.POST.get("manual", None)
        documentare = request.POST.get("suplimentar", None)
        pregatire = request.POST.get("teme", None)
        tutoriat = request.POST.get("tutoriat", None)
        examinari = request.POST.get("examinări", None)
        alteactivitati = request.POST.get("alteActivităţi", None)
        nrcredite = request.POST.get("nrcredite", None)
        precondCurr = request.POST.get("curriculum")
        precondCom = request.POST.get("competente")
        condDesCurs = request.POST.get("desfcurs")
        condDesLab = request.POST.get("desflab")
        comProf = request.POST.get("compprof")
        comTrans = request.POST.get("comptrans")
        obiecGeneral = request.POST.get("obiecgeneral")
        obiecSpeci = request.POST.get("obiecspecific")
        curs1 = request.POST.get("curs1")
        curs2 = request.POST.get("curs2")
        curs3 = request.POST.get("curs3")
        curs4 = request.POST.get("curs4")
        curs5 = request.POST.get("curs5")
        curs6 = request.POST.get("curs6")
        curs7 = request.POST.get("curs7")
        curs8 = request.POST.get("curs8")
        curs9 = request.POST.get("curs9")
        curs10 = request.POST.get("curs10")
        curs11 = request.POST.get("curs11")
        curs12 = request.POST.get("curs12")
        curs13 = request.POST.get("curs13")
        curs14 = request.POST.get("curs14")
        orec1 = request.POST.get("orec1", None)
        orec2 = request.POST.get("orec2", None)
        orec3 = request.POST.get("orec3", None)
        orec4 = request.POST.get("orec4", None)
        orec5 = request.POST.get("orec5", None)
        orec6 = request.POST.get("orec6", None)
        orec7 = request.POST.get("orec7", None)
        orec8 = request.POST.get("orec8", None)
        orec9 = request.POST.get("orec9", None)
        orec10 = request.POST.get("orec10", None)
        orec11 = request.POST.get("orec11", None)
        orec12 = request.POST.get("orec12", None)
        orec13 = request.POST.get("orec13", None)
        orec14 = request.POST.get("orec14", None)
        bibliografCurs = request.POST.get("cbibliografie")
        metpredcurs = request.POST.get("metpred")
        lab1 = request.POST.get("lab1")
        lab2 = request.POST.get("lab2")
        lab3 = request.POST.get("lab3")
        lab4 = request.POST.get("lab4")
        lab5 = request.POST.get("lab5")
        lab6 = request.POST.get("lab6")
        lab7 = request.POST.get("lab7")
        lab8 = request.POST.get("lab8")
        lab9 = request.POST.get("lab9")
        lab10 = request.POST.get("lab10", None)
        orel1 = request.POST.get("lrec1", None)
        orel2 = request.POST.get("lrec2", None)
        orel3 = request.POST.get("lrec3", None)
        orel4 = request.POST.get("lrec4", None)
        orel5 = request.POST.get("lrec5", None)
        orel6 = request.POST.get("lrec6", None)
        orel7 = request.POST.get("lrec7", None)
        orel8 = request.POST.get("lrec8", None)
        orel9 = request.POST.get("lrec9", None)
        orel10 = request.POST.get("lrec10", None)
        bibliografLab = request.POST.get("lbibliografie")
        metpredlab = request.POST.get("metpredl")
        coroborare = request.POST.get("coroborarea")
        criterievalc = request.POST.get("curscri")
        metvalc = request.POST.get("cursmet")
        ponderenotc = request.POST.get("curspro")
        criterievalac = request.POST.get("labscri")
        metvalac = request.POST.get("labsmet")
        ponderenotac = request.POST.get("labspro")
        criterievall = request.POST.get("lscri")
        metvall = request.POST.get("lsmet")
        ponderenotl = request.POST.get("lspro")
        criterievalp = request.POST.get("pscri")
        metvalp = request.POST.get("psmet")
        ponderenotp = request.POST.get("pspro")
        criterievalpr = request.POST.get("prscri")
        metvalpr = request.POST.get("prsmet")
        ponderenotpr = request.POST.get("prspro")
        standar = request.POST.get("standard")
        date = request.POST.get("date", None)
        titcurs = request.POST.get("titcurs", None)
        titac = request.POST.get("titlab", None)
        directordep = request.POST.get("directdep", None)
        decan = request.POST.get("decanat", None)
        cs = mydb.cursor()

        statement = "INSERT INTO discipline(user, facultate, departament, catedra, denumireDomeniuStud, codDenumireStud, ciclu, denumireProgStud, codProgStud, calificare, disciplina, titularCurs, titularLab, an, semestru, tipevaluare, regimdis, totoresap, cursresap, labresap, totorean, cursrean, labrean, studiu, documentare, pregatire, tutoriat, examinari, alteactivitati, nrcredite, precondCurr, precondCom, condDesCurs, condDesLab, comProf, comTrans, obiecGeneral, obiecSpeci, curs1, curs2, curs3, curs4, curs5, curs6, curs7, curs8, curs9, curs10, curs11, curs12, curs13, curs14, orec1, orec2, orec3, orec4, orec5, orec6, orec7, orec8, orec9, orec10, orec11, orec12, orec13, orec14, bibliografCurs, metpredcurs, lab1, lab2, lab3, lab4, lab5, lab6, lab7, lab8, lab9, lab10, orel1, orel2, orel3, orel4, orel5, orel6, orel7, orel8, orel9, orel10, bibliografLab, metpredlab, coroborare, criterievalc, metvalc, ponderenotc, criterievalac, metvalac, ponderenotac, criterievall, metvall, ponderenotl, criterievalp, metvalp, ponderenotp, criterievalpr, metvalpr, ponderenotpr, standar, date, titcurs, titac, directordep, decan) VALUES('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', {}, {}, {},'{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', {}, '{}', '{}', '{}', '{}')".format(user, facultate, departament, catedra, denumireDomeniuStud, codDenumireStud, ciclu, denumireProgStud, codProgStud, calificare, disciplina, titularCurs, titularLab, an, semestru, tipevaluare, regimdis, totoresap, cursresap, labresap, totorean, cursrean, labrean, studiu, documentare, pregatire, tutoriat, examinari, alteactivitati, nrcredite, precondCurr, precondCom, condDesCurs, condDesLab, comProf, comTrans, obiecGeneral, obiecSpeci, curs1, curs2, curs3, curs4, curs5, curs6, curs7, curs8, curs9, curs10, curs11, curs12, curs13, curs14, orec1, orec2, orec3, orec4, orec5, orec6, orec7, orec8, orec9, orec10, orec11, orec12, orec13, orec14, bibliografCurs, metpredcurs, lab1, lab2, lab3, lab4, lab5, lab6, lab7, lab8, lab9, lab10, orel1, orel2, orel3, orel4, orel5, orel6, orel7, orel8, orel9, orel10, bibliografLab, metpredlab, coroborare, criterievalc, metvalc, ponderenotc, criterievalac, metvalac, ponderenotac, criterievall, metvall, ponderenotl, criterievalp, metvalp, ponderenotp, criterievalpr, metvalpr, ponderenotpr, standar, date, titcurs, titac, directordep, decan)
        cs.execute(statement)
        mydb.commit()
        return redirect("http://127.0.0.1:8000/Mail/")
    return render(request, 'AdaugaLista.html')


class GeneratePdf(View):
    def get(self, request, *args, **kwargs):
        use = request.session['cauta']
        data = Disciplina.objects.filter(disciplina=use)
        if(data):
            open('templates/temp.html', "w").write(render_to_string('pdf.html', {'data': data}))
            pdf = html_to_pdf('temp.html')
        else:
            return render(request, '404Error.html')
        # rendering the template
        return HttpResponse(pdf, content_type='application/pdf')


def Cautare(request):
    try:
        user = request.session['user']
    except KeyError:
        return render(request, '404Error.html')
    if request.method == 'POST':
        cauta = request.POST.get("cauta")
        request.session['cauta'] = cauta
        return redirect("http://127.0.0.1:8000/pdf/")
    return render(request, 'Discipline.html')


def Afisare(request):
    try:
        user = request.session['user']
    except KeyError:
        return render(request, '404Error.html')
    mydb = mysql.connector.connect(
        host='127.0.0.1',
        database='licenta',
        user='root',
        password='P3lic@n27'
    )
    cs = mydb.cursor()
    statement = "SELECT disciplina FROM discipline WHERE user='{}'".format(user)
    cs.execute(statement)
    t = tuple(cs.fetchall())
    return render(request, 'Vezilista.html', {'t': t})


def convertTuple(tup):
    str = ''
    for item in tup:
        str = str + item
    return str

source_html = "templates/temp.html"
output_filename = "1.pdf"

def Mail(request):
    use = request.session['disciplina']
    data = Disciplina.objects.filter(disciplina=use)
    open('templates/temp.html', "w").write(render_to_string('pdf.html', {'data': data}))
    pdfkit.from_file('templates/temp.html', "out.pdf", configuration=config)
    use = request.session['user']
    mydb = mysql.connector.connect(
        host='127.0.0.1',
        database='licenta',
        user='root',
        password='P3lic@n27'
    )
    cs = mydb.cursor()
    statement = "SELECT * FROM user WHERE user='{}'".format(use)
    cs.execute(statement)
    t = tuple(cs.fetchall())
    elements = [tupleObj[2] for tupleObj in t]
    mail = convertTuple(elements)
    email = EmailMessage('PDF creat', 'Mai jos este atasat PDF-ul disciplinei', 'portal@yahoo.com', to=[mail])
    email.attach_file('out.pdf')
    email.send()
    return render(request, 'home.html')


