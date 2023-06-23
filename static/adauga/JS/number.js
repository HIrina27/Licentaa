function myFunction() {
            var selectElement = document.getElementById("oresap");
            var selectCurs = document.getElementById("nrcurs");
            var selectSeminar = document.getElementById("nrsem");
            var totOre = document.getElementById("oreplan");
            var totCurs = document.getElementById("orecurs");
            var totSem = document.getElementById("oresem");
            var manual = document.getElementById("manual");
            var supl = document.getElementById("suplimentar");
            var teme = document.getElementById("teme");
            var tutorial = document.getElementById("tutoriat");
            var examinări = document.getElementById("examinări");
            var alteActivităţi = document.getElementById("alteActivităţi");
            var nrcredite = document.getElementById("nrcredite");

            var orec1 = document.getElementById("orec1");
            var orec2 = document.getElementById("orec2");
            var orec3 = document.getElementById("orec3");
            var orec4 = document.getElementById("orec4");
            var orec5 = document.getElementById("orec5");
            var orec6 = document.getElementById("orec6");
            var orec7 = document.getElementById("orec7");
            var orec8 = document.getElementById("orec8");
            var orec9 = document.getElementById("orec9");
            var orec10 = document.getElementById("orec10");
            var orec11 = document.getElementById("orec11");
            var orec12 = document.getElementById("orec12");
            var orec13 = document.getElementById("orec13");
            var orec = document.getElementById("orec14");
            var lrec1 = document.getElementById("lrec1");
            var lrec2 = document.getElementById("lrec2");
            var lrec3 = document.getElementById("lrec3");
            var lrec4 = document.getElementById("lrec4");
            var lrec5 = document.getElementById("lrec5");
            var lrec6 = document.getElementById("lrec6");
            var lrec7 = document.getElementById("lrec7");
            var lrec8 = document.getElementById("lrec8");
            var lrec9 = document.getElementById("lrec9");
            var lrec10 = document.getElementById("lrec10");

    for (var i = 1; i <= 100; i++) {
        selectElement.add(new Option(i));
        selectCurs.add(new Option(i));
        selectSeminar.add(new Option(i));
        manual.add(new Option(i));
        supl.add(new Option(i));
        teme.add(new Option(i));
        tutorial.add(new Option(i));
        examinări.add(new Option(i));
        alteActivităţi.add(new Option(i));
        if(i<15){
        nrcredite.add(new Option(i));
        }
        if(i<50){
        orec1.add(new Option(i));
        orec2.add(new Option(i));
        orec3.add(new Option(i));
        orec4.add(new Option(i));
        orec5.add(new Option(i));
        orec6.add(new Option(i));
        orec7.add(new Option(i));
        orec8.add(new Option(i));
        orec9.add(new Option(i));
        orec10.add(new Option(i));
        orec11.add(new Option(i));
        orec12.add(new Option(i));
        orec13.add(new Option(i));
        orec.add(new Option(i));
        lrec1.add(new Option(i));
        lrec2.add(new Option(i));
        lrec3.add(new Option(i));
        lrec4.add(new Option(i));
        lrec5.add(new Option(i));
        lrec6.add(new Option(i));
        lrec7.add(new Option(i));
        lrec8.add(new Option(i));
        lrec9.add(new Option(i));
        lrec10.add(new Option(i));
        }
       }

    for (var i = 1; i <= 300; i++) {
        totOre.add(new Option(i));
        totCurs.add(new Option(i));
        totSem.add(new Option(i));
       }
 }


