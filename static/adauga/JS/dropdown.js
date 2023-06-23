function dynamicdropdown(listindex)
    {
        document.getElementById("status").options.length = 0;
        document.getElementById("titularcurs").options.length = 0;

        document.getElementById("titularactivitati").options.length = 0;
        document.getElementById("titcurs").options.length = 0;
        document.getElementById("titlab").options.length = 0;
        document.getElementById("directdep").options.length = 0;

        switch (listindex)
        {
        case "Automatica si Calculatoare" :
            document.getElementById("status").options[0]=new Option("Select","");
            document.getElementById("status").options[1]=new Option("Automatica si Informatica Aplicata","Automatica si Informatica Aplicata");
            document.getElementById("status").options[2]=new Option("Calculatoare(romana)","Calculatoare(romana)");
            document.getElementById("status").options[3]=new Option("Calculatoare(engleza)","Calculatoare(engleza)");
            document.getElementById("status").options[4]=new Option("Tehnologia Informtiei","Tehnologia Informtiei");
            document.getElementById("status").options[5]=new Option("Informatica","Informatica");
            document.getElementById("status").options[6]=new Option("Informatica(ID)","Informatica(ID)");

            //Titulari curs
            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("S.l.dr.inf. Cristian ZIMBRU","S.l.dr.inf. Cristian ZIMBRU");
            document.getElementById("titularcurs").options[2]=new Option("S.l.dr.inf. Oana-Sorina CHIRILA","S.l.dr.inf. Oana-Sorina CHIRILA");
            document.getElementById("titularcurs").options[3]=new Option("Conf.dr.ing.Adriana ALBU ","Conf.dr.ing.Adriana ALBU");
            document.getElementById("titularcurs").options[4]=new Option("Conf.dr.ing. Ovidiu BANIAS","Conf.dr.ing. Ovidiu BANIAS");
            document.getElementById("titularcurs").options[5]=new Option("Conf.dr.ing. Pal-Stefan MURVAY","Conf.dr.ing. Pal-Stefan MURVAY");
            document.getElementById("titularcurs").options[6]=new Option("S.l.dr.ing. Raul ROBU","S.l.dr.ing. Raul ROBU");
            document.getElementById("titularcurs").options[7]=new Option("Conf.dr.ing. Adrian KORODI","Conf.dr.ing. Adrian KORODI");
            document.getElementById("titularcurs").options[8]=new Option("Prof.dr.ing. Nicolae ROBU","Prof.dr.ing. Nicolae ROBU");
            document.getElementById("titularcurs").options[9]=new Option("Conf.dr.ing. Iosif SZEIDERT-SUBERT","Conf.dr.ing. Iosif SZEIDERT-SUBERT");
            document.getElementById("titularcurs").options[10]=new Option("S.l.dr.ing. Mihaela CRISAN-VIDA","S.l.dr.ing. Mihaela CRISAN-VIDA");

            //Titularul activitaţilor aplicative:
            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("S.l.dr.inf. Cristian ZIMBRU","S.l.dr.inf. Cristian ZIMBRU");
            document.getElementById("titularactivitati").options[2]=new Option("S.l.dr.inf. Oana-Sorina CHIRILA","S.l.dr.inf. Oana-Sorina CHIRILA");
            document.getElementById("titularactivitati").options[3]=new Option("Conf.dr.ing.Adriana ALBU ","Conf.dr.ing.Adriana ALBU");
            document.getElementById("titularactivitati").options[4]=new Option("Conf.dr.ing. Ovidiu BANIAS","Conf.dr.ing. Ovidiu BANIAS");
            document.getElementById("titularactivitati").options[5]=new Option("Conf.dr.ing. Pal-Stefan MURVAY","Conf.dr.ing. Pal-Stefan MURVAY");
            document.getElementById("titularactivitati").options[6]=new Option("S.l.dr.ing. Raul ROBU","S.l.dr.ing. Raul ROBU");
            document.getElementById("titularactivitati").options[7]=new Option("Conf.dr.ing. Adrian KORODI","Conf.dr.ing. Adrian KORODI");
            document.getElementById("titularactivitati").options[8]=new Option("Prof.dr.ing. Nicolae ROBU","Prof.dr.ing. Nicolae ROBU");
            document.getElementById("titularactivitati").options[9]=new Option("Conf.dr.ing. Iosif SZEIDERT-SUBERT","Conf.dr.ing. Iosif SZEIDERT-SUBERT");
            document.getElementById("titularactivitati").options[10]=new Option("S.l.dr.ing. Mihaela CRISAN-VIDA","S.l.dr.ing. Mihaela CRISAN-VIDA");

            //Titular curs
            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("S.l.dr.inf. Cristian ZIMBRU","S.l.dr.inf. Cristian ZIMBRU");
            document.getElementById("titcurs").options[2]=new Option("S.l.dr.inf. Oana-Sorina CHIRILA","S.l.dr.inf. Oana-Sorina CHIRILA");
            document.getElementById("titcurs").options[3]=new Option("Conf.dr.ing.Adriana ALBU ","Conf.dr.ing.Adriana ALBU");
            document.getElementById("titcurs").options[4]=new Option("Conf.dr.ing. Ovidiu BANIAS","Conf.dr.ing. Ovidiu BANIAS");
            document.getElementById("titcurs").options[5]=new Option("Conf.dr.ing. Pal-Stefan MURVAY","Conf.dr.ing. Pal-Stefan MURVAY");
            document.getElementById("titcurs").options[6]=new Option("S.l.dr.ing. Raul ROBU","S.l.dr.ing. Raul ROBU");
            document.getElementById("titcurs").options[7]=new Option("Conf.dr.ing. Adrian KORODI","Conf.dr.ing. Adrian KORODI");
            document.getElementById("titcurs").options[8]=new Option("Prof.dr.ing. Nicolae ROBU","Prof.dr.ing. Nicolae ROBU");
            document.getElementById("titcurs").options[9]=new Option("Conf.dr.ing. Iosif SZEIDERT-SUBERT","Conf.dr.ing. Iosif SZEIDERT-SUBERT");
            document.getElementById("titcurs").options[10]=new Option("S.l.dr.ing. Mihaela CRISAN-VIDA","S.l.dr.ing. Mihaela CRISAN-VIDA");

            //Titular activitate practica
            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("S.l.dr.inf. Cristian ZIMBRU","S.l.dr.inf. Cristian ZIMBRU");
            document.getElementById("titlab").options[2]=new Option("S.l.dr.inf. Oana-Sorina CHIRILA","S.l.dr.inf. Oana-Sorina CHIRILA");
            document.getElementById("titlab").options[3]=new Option("Conf.dr.ing.Adriana ALBU ","Conf.dr.ing.Adriana ALBU");
            document.getElementById("titlab").options[4]=new Option("Conf.dr.ing. Ovidiu BANIAS","Conf.dr.ing. Ovidiu BANIAS");
            document.getElementById("titlab").options[5]=new Option("Conf.dr.ing. Pal-Stefan MURVAY","Conf.dr.ing. Pal-Stefan MURVAY");
            document.getElementById("titlab").options[6]=new Option("S.l.dr.ing. Raul ROBU","S.l.dr.ing. Raul ROBU");
            document.getElementById("titlab").options[7]=new Option("Conf.dr.ing. Adrian KORODI","Conf.dr.ing. Adrian KORODI");
            document.getElementById("titlab").options[8]=new Option("Prof.dr.ing. Nicolae ROBU","Prof.dr.ing. Nicolae ROBU");
            document.getElementById("titlab").options[9]=new Option("Conf.dr.ing. Iosif SZEIDERT-SUBERT","Conf.dr.ing. Iosif SZEIDERT-SUBERT");
            document.getElementById("titlab").options[10]=new Option("S.l.dr.ing. Mihaela CRISAN-VIDA","S.l.dr.ing. Mihaela CRISAN-VIDA");

            //Director departament
            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("S.l.dr.inf. Cristian ZIMBRU","S.l.dr.inf. Cristian ZIMBRU");
            document.getElementById("directdep").options[2]=new Option("S.l.dr.inf. Oana-Sorina CHIRILA","S.l.dr.inf. Oana-Sorina CHIRILA");
            document.getElementById("directdep").options[3]=new Option("Conf.dr.ing.Adriana ALBU ","Conf.dr.ing.Adriana ALBU");
            document.getElementById("directdep").options[4]=new Option("Conf.dr.ing. Ovidiu BANIAS","Conf.dr.ing. Ovidiu BANIAS");
            document.getElementById("directdep").options[5]=new Option("Conf.dr.ing. Pal-Stefan MURVAY","Conf.dr.ing. Pal-Stefan MURVAY");
            document.getElementById("directdep").options[6]=new Option("S.l.dr.ing. Raul ROBU","S.l.dr.ing. Raul ROBU");
            document.getElementById("directdep").options[7]=new Option("Conf.dr.ing. Adrian KORODI","Conf.dr.ing. Adrian KORODI");
            document.getElementById("directdep").options[8]=new Option("Prof.dr.ing. Nicolae ROBU","Prof.dr.ing. Nicolae ROBU");
            document.getElementById("directdep").options[9]=new Option("Conf.dr.ing. Iosif SZEIDERT-SUBERT","Conf.dr.ing. Iosif SZEIDERT-SUBERT");
            document.getElementById("directdep").options[10]=new Option("S.l.dr.ing. Mihaela CRISAN-VIDA","S.l.dr.ing. Mihaela CRISAN-VIDA");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Prof.dr.ing. Marius-George MARCU","Prof.dr.ing. Marius-George MARCU");
            document.getElementById("decanat").options[2]=new Option("Conf.dr.ing. Ciprian-Bogdan CHIRILA","Conf.dr.ing. Ciprian-Bogdan CHIRILA");
            document.getElementById("decanat").options[3]=new Option("S.l.dr.ing. Alexandra-Iulia SZEDLAK-STINEAN","S.l.dr.ing. Alexandra-Iulia SZEDLAK-STINEAN");
            document.getElementById("decanat").options[4]=new Option("Conf.dr.ing. Ovidiu BANIAS","Conf.dr.ing. Ovidiu BANIAS");
            break;

        case "Arhitectura si Urbanism" :
            document.getElementById("status").options[0]=new Option("Select","");
            document.getElementById("status").options[1]=new Option("Matematica","Matematica");
            document.getElementById("status").options[2]=new Option("Management","Management");
            document.getElementById("status").options[3]=new Option("Comunicare si Limbi Straine","Comunicare si Limbi Straine");
            document.getElementById("status").options[4]=new Option("Catedra de Educatie Fizica si Sport","Catedra de Educatie Fizica si Sport");
            document.getElementById("status").options[5]=new Option("Centru de Educatie Permanenta","Centru de Educatie Permanenta");
            document.getElementById("status").options[6]=new Option("Constructii civile şi instalatii","Constructii civile si instalatii");
            document.getElementById("status").options[7]=new Option("Cai de comunicatii terestre, fundatii şi cadastru","Cai de comunicatii terestre, fundatii si cadastru");
            document.getElementById("status").options[8]=new Option("Mecanica si rezistenta materialelor","Mecanica si rezistenta materialelor");
            document.getElementById("status").options[9]=new Option("Centru de pregatire a personalului didactic","Centru de pregatire a personalului didactic");
            //
            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("S.l. dr. arh. Anghel Andreea","S.l. dr. arh. Anghel Andreea");
            document.getElementById("titularcurs").options[2]=new Option("S.l.dr.art.pl. Ardeleanu Vlad","S.l.dr.art.pl. Ardeleanu Vlad");
            document.getElementById("titularcurs").options[3]=new Option("As. dr. arh. Badescu Stefana","As. dr. arh. Badescu Stefana");
            document.getElementById("titularcurs").options[4]=new Option("Conf. dr. arh.  Branea Ana-Maria","Conf. dr. arh.  Branea Ana-Maria");
            //
            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("S.l. dr. arh. Anghel Andreea","S.l. dr. arh. Anghel Andreea");
            document.getElementById("titularactivitati").options[2]=new Option("S.l.dr.art.pl. Ardeleanu Vlad","S.l.dr.art.pl. Ardeleanu Vlad");
            document.getElementById("titularactivitati").options[3]=new Option("As. dr. arh. Badescu Stefana ","As. dr. arh. Badescu Stefana");
            document.getElementById("titularactivitati").options[4]=new Option("Conf. dr. arh.  Branea Ana-Maria","Conf. dr. arh.  Branea Ana-Maria");
            //
            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("S.l. dr. arh. Anghel Andreea","S.l. dr. arh. Anghel Andreea");
            document.getElementById("titcurs").options[2]=new Option("S.l.dr.art.pl. Ardeleanu Vlad","S.l.dr.art.pl. Ardeleanu Vlad");
            document.getElementById("titcurs").options[3]=new Option("As. dr. arh. Badescu Stefana ","As. dr. arh. Badescu Stefana");
            document.getElementById("titcurs").options[4]=new Option("Conf. dr. arh.  Branea Ana-Maria","Conf. dr. arh.  Branea Ana-Maria");
            //
            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("S.l. dr. arh. Anghel Andreea","S.l. dr. arh. Anghel Andreea");
            document.getElementById("titlab").options[2]=new Option("S.l.dr.art.pl. Ardeleanu Vlad","S.l.dr.art.pl. Ardeleanu Vlad");
            document.getElementById("titlab").options[3]=new Option("CAs. dr. arh. Badescu Stefana ","As. dr. arh. Badescu Stefana");
            document.getElementById("titlab").options[4]=new Option("Conf. dr. arh.  Branea Ana-Maria","Conf. dr. arh.  Branea Ana-Maria");
            //
            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("S.l. dr. arh. Anghel Andreea","S.l. dr. arh. Anghel Andreea");
            document.getElementById("directdep").options[2]=new Option("S.l.dr.art.pl. Ardeleanu Vlad","S.l.dr.art.pl. Ardeleanu Vlad");
            document.getElementById("directdep").options[3]=new Option("As. dr. arh. Badescu Stefana ","As. dr. arh. Badescu Stefana");
            document.getElementById("directdep").options[4]=new Option("Conf. dr. arh.  Branea Ana-Maria","Conf. dr. arh.  Branea Ana-Maria");
            //
            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Conf. dr. arh. Cristian BLIDARIU","Conf. dr. arh. Cristian BLIDARIU");
            document.getElementById("decanat").options[2]=new Option("Conf.dr.arh. Catalina BOCAN","Conf.dr.arh. Catalina BOCAN");
            break;

        case "Chimie Industriala si Ingineria Mediului" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Chimie Aplicata si Ingineria Compusilor Anorganici si a Mediului","Chimie Aplicata si Ingineria Compusilor Anorganici si a Mediului");
            document.getElementById("status").options[2]=new Option("Chimie Aplicata si Ingineria Compusilor Organici si Naturali","Chimie Aplicata si Ingineria Compusilor Organici si Naturali");

            //

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("S.l.dr.ing. DAN Mircea Laurentiu ","s.l.dr.ing. DAN Mircea Laurentiu ");
            document.getElementById("titularcurs").options[2]=new Option("Prof.dr.ing. NEGREA Petru","Prof.dr.ing. NEGREA Petru");
            document.getElementById("titularcurs").options[3]=new Option("Conf.dr.ing. LUPA Lavinia","Conf.dr.ing. LUPA Lavinia");
            document.getElementById("titularcurs").options[4]=new Option("Conf.dr.ing. LAZAU Radu-Ioan","Conf.dr.ing. LAZAU Radu-Ioan");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("S.l.dr.ing. DAN Mircea Laurentiu ","S.l.dr.ing. DAN Mircea Laurentiu ");
            document.getElementById("titularactivitati").options[2]=new Option("Prof.dr.ing. NEGREA Petru","Prof.dr.ing. NEGREA Petru");
            document.getElementById("titularactivitati").options[3]=new Option("Conf.dr.ing. LUPA Lavinia","Conf.dr.ing. LUPA Lavinia");
            document.getElementById("titularactivitati").options[4]=new Option("Conf.dr.ing. LAZAU Radu-Ioan","Conf.dr.ing. LAZAU Radu-Ioan");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("S.l.dr.ing. DAN Mircea Laurentiu ","S.l.dr.ing. DAN Mircea Laurentiu ");
            document.getElementById("titcurs").options[2]=new Option("Prof.dr.ing. NEGREA Petru","Prof.dr.ing. NEGREA Petru");
            document.getElementById("titcurs").options[3]=new Option("Conf.dr.ing. LUPA Lavinia","Conf.dr.ing. LUPA Lavinia");
            document.getElementById("titcurs").options[4]=new Option("Conf.dr.ing. LAZAU Radu-Ioan","Conf.dr.ing. LAZAU Radu-Ioan");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("S.l.dr.ing. DAN Mircea Laurentiu ","S.l.dr.ing. DAN Mircea Laurentiu ");
            document.getElementById("titlab").options[2]=new Option("Prof.dr.ing. NEGREA Petru","Prof.dr.ing. NEGREA Petru");
            document.getElementById("titlab").options[3]=new Option("Conf.dr.ing. LUPA Lavinia","Conf.dr.ing. LUPA Lavinia");
            document.getElementById("titlab").options[4]=new Option("Conf.dr.ing. LAZAU Radu-Ioan","Conf.dr.ing. LAZAU Radu-Ioan");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("S.l.dr.ing. DAN Mircea Laurentiu ","S.l.dr.ing. DAN Mircea Laurentiu ");
            document.getElementById("directdep").options[2]=new Option("Prof.dr.ing. NEGREA Petru","Prof.dr.ing. NEGREA Petru");
            document.getElementById("directdep").options[3]=new Option("Conf.dr.ing. LUPA Lavinia","Conf.dr.ing. LUPA Lavinia");
            document.getElementById("directdep").options[4]=new Option("Conf.dr.ing. LAZAU Radu-Ioan","Conf.dr.ing. LAZAU Radu-Ioan");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Conf. dr. ing. Mihai Aurel MEDELEANU","Conf. dr. ing. Mihai Aurel MEDELEANU");
            document.getElementById("decanat").options[2]=new Option("Conf. dr. ing. Cornelia-Veronica MUNTEAN","Conf. dr. ing. Cornelia-Veronica MUNTEAN");

            break;

        case "Constructii" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Constructii Civile si Instalatii","Constructii Civile si Instalatii");
            document.getElementById("status").options[2]=new Option("Cai de Comunicatie Terestre, Fundatii si Cadastru","Cai de Comunicatie Terestre, Fundatii si Cadastru");
            document.getElementById("status").options[3]=new Option("Constructii Metalice si Mecanica Constructiilor","Constructii Metalice si Mecanica Constructiilor");
            document.getElementById("status").options[4]=new Option("Hidrotehnica","Hidrotehnica");

            //

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Adam Marius","Adam Marius");
            document.getElementById("titularcurs").options[2]=new Option("Badea Catalin","Badea Catalin");
            document.getElementById("titularcurs").options[3]=new Option("Bancea Olga","Bancea Olga");
            document.getElementById("titularcurs").options[4]=new Option("Bota Adrian","Bota Adrian");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("Adam Marius","Adam Marius");
            document.getElementById("titularactivitati").options[2]=new Option("Badea Catalin","Badea Catalin");
            document.getElementById("titularactivitati").options[3]=new Option("Bancea Olga","Bancea Olga");
            document.getElementById("titularactivitati").options[4]=new Option("Bota Adrian","Bota Adrian");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("Adam Marius","Adam Marius");
            document.getElementById("titcurs").options[2]=new Option("Badea Catalin","Badea Catalin");
            document.getElementById("titcurs").options[3]=new Option("Bancea Olga","Bancea Olga");
            document.getElementById("titcurs").options[4]=new Option("Bota Adrian","Bota Adrian");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("Adam Marius","Adam Marius");
            document.getElementById("titlab").options[2]=new Option("Badea Catalin","Badea Catalin");
            document.getElementById("titlab").options[3]=new Option("Bancea Olga","Bancea Olga");
            document.getElementById("titlab").options[4]=new Option("Bota Adrian","Bota Adrian");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("Adam Marius","Adam Marius");
            document.getElementById("directdep").options[2]=new Option("Badea Catalin","Badea Catalin");
            document.getElementById("directdep").options[3]=new Option("Bancea Olga","Bancea Olga");
            document.getElementById("directdep").options[4]=new Option("Bota Adrian","Bota Adrian");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Prof. dr. ing. Raul Zaharia","Prof. dr. ing. Raul Zaharia");
            document.getElementById("decanat").options[2]=new Option("Prof. dr. ing. Sorin Herban","Prof. dr. ing. Sorin Herban");

            break;

        case "Electronica, Telecomunicatii si Tehnologii Informationale" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Electronica Aplicata","Electronica Aplicata");
            document.getElementById("status").options[2]=new Option("Comunicatii","Comunicatii");
            document.getElementById("status").options[3]=new Option("Masurari si Electronica Optica","Masurari si Electronica Optica");

            //

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Prof. Dr. Ing .ALEXA Florin","Prof. Dr. Ing .ALEXA Florin");
            document.getElementById("titularcurs").options[2]=new Option("Prof. Dr. Ing. ANCUTI Codruta	","Prof. Dr. Ing. ANCUTI Codruta");
            document.getElementById("titularcurs").options[3]=new Option("Sl. Dr. Ing. AVRAM  Adrian","Sl. Dr. Ing. AVRAM  Adrian");
            document.getElementById("titularcurs").options[4]=new Option("Conf. Dr. Ing. BABAITA Mircea","Conf. Dr. Ing. BABAITA Mircea");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("Prof. Dr. Ing .ALEXA Florin","Prof. Dr. Ing .ALEXA Florin");
            document.getElementById("titularactivitati").options[2]=new Option("Prof. Dr. Ing. ANCUTI Codruta	","Prof. Dr. Ing. ANCUTI Codruta");
            document.getElementById("titularactivitati").options[3]=new Option("Sl. Dr. Ing. AVRAM  Adrian","Sl. Dr. Ing. AVRAM  Adrian");
            document.getElementById("titularactivitati").options[4]=new Option("Conf. Dr. Ing. BABAITA Mircea","Conf. Dr. Ing. BABAITA Mircea");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("Prof. Dr. Ing .ALEXA Florin","Prof. Dr. Ing .ALEXA Florin");
            document.getElementById("titcurs").options[2]=new Option("Prof. Dr. Ing. ANCUTI Codruta	","Prof. Dr. Ing. ANCUTI Codruta");
            document.getElementById("titcurs").options[3]=new Option("Sl. Dr. Ing. AVRAM  Adrian","Sl. Dr. Ing. AVRAM  Adrian");
            document.getElementById("titcurs").options[4]=new Option("Conf. Dr. Ing. BABAITA Mircea","Conf. Dr. Ing. BABAITA Mircea");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("Prof. Dr. Ing .ALEXA Florin","Prof. Dr. Ing .ALEXA Florin");
            document.getElementById("titlab").options[2]=new Option("Prof. Dr. Ing. ANCUTI Codruta	","Prof. Dr. Ing. ANCUTI Codruta");
            document.getElementById("titlab").options[3]=new Option("Sl. Dr. Ing. AVRAM  Adrian","Sl. Dr. Ing. AVRAM  Adrian");
            document.getElementById("titlab").options[4]=new Option("Conf. Dr. Ing. BABAITA Mircea","Conf. Dr. Ing. BABAITA Mircea");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("Prof. Dr. Ing .ALEXA Florin","Prof. Dr. Ing .ALEXA Florin");
            document.getElementById("directdep").options[2]=new Option("Prof. Dr. Ing. ANCUTI Codruta	","Prof. Dr. Ing. ANCUTI Codruta");
            document.getElementById("directdep").options[3]=new Option("Sl. Dr. Ing. AVRAM  Adrian","Sl. Dr. Ing. AVRAM  Adrian");
            document.getElementById("directdep").options[4]=new Option("Conf. Dr. Ing. BABAITA Mircea","Conf. Dr. Ing. BABAITA Mircea");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Prof.dr.ing. Dan Lascu","Prof.dr.ing. Dan Lascu");
            document.getElementById("decanat").options[2]=new Option("Conf.dr.ing. Muguras Mocofan","Conf.dr.ing. Muguras Mocofan");

            break;

        case "Inginerie Electrica si Energetica" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Electroenergetica","Electroenergetica");
            document.getElementById("status").options[2]=new Option("Inginerie Electrica","Inginerie Electrica");
            document.getElementById("status").options[3]=new Option("Bazele Fizice ale Ingineriei","Bazele Fizice ale Ingineriei");

            //
            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Prof.dr.ing. Marius Babescu","Prof.dr.ing. Marius Babescu");
            document.getElementById("titularcurs").options[2]=new Option("Prof.dr.ing. Ion Boldea","Prof.dr.ing. Ion Boldea");
            document.getElementById("titularcurs").options[3]=new Option("Conf.dr.ing. Floricica Barvinsch","Conf.dr.ing. Floricica Barvinsch");
            document.getElementById("titularcurs").options[4]=new Option("S.l.dr.ing. Delia Gabriela Trif-Tordai","S.l.dr.ing. Delia Gabriela Trif-Tordai");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("Prof.dr.ing. Marius Babescu","Prof.dr.ing. Marius Babescu");
            document.getElementById("titularactivitati").options[2]=new Option("Prof.dr.ing. Ion Boldea","Prof.dr.ing. Ion Boldea");
            document.getElementById("titularactivitati").options[3]=new Option("Conf.dr.ing. Floricica Barvinsch","Conf.dr.ing. Floricica Barvinsch");
            document.getElementById("titularactivitati").options[4]=new Option("S.l.dr.ing. Delia Gabriela Trif-Tordai","S.l.dr.ing. Delia Gabriela Trif-Tordai");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("Prof.dr.ing. Marius Babescu","Prof.dr.ing. Marius Babescu");
            document.getElementById("titcurs").options[2]=new Option("Prof.dr.ing. Ion Boldea","Prof.dr.ing. Ion Boldea");
            document.getElementById("titcurs").options[3]=new Option("Conf.dr.ing. Floricica Barvinsch","Conf.dr.ing. Floricica Barvinsch");
            document.getElementById("titcurs").options[4]=new Option("S.l.dr.ing. Delia Gabriela Trif-Tordai","S.l.dr.ing. Delia Gabriela Trif-Tordai");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("Prof.dr.ing. Marius Babescu","Prof.dr.ing. Marius Babescu");
            document.getElementById("titlab").options[2]=new Option("Prof.dr.ing. Ion Boldea","Prof.dr.ing. Ion Boldea");
            document.getElementById("titlab").options[3]=new Option("Conf.dr.ing. Floricica Barvinsch","Conf.dr.ing. Floricica Barvinsch");
            document.getElementById("titlab").options[4]=new Option("S.l.dr.ing. Delia Gabriela Trif-Tordai","S.l.dr.ing. Delia Gabriela Trif-Tordai");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("Prof.dr.ing. Marius Babescu","Prof.dr.ing. Marius Babescu");
            document.getElementById("directdep").options[2]=new Option("Prof.dr.ing. Ion Boldea","Prof.dr.ing. Ion Boldea");
            document.getElementById("directdep").options[3]=new Option("Conf.dr.ing. Floricica Barvinsch","Conf.dr.ing. Floricica Barvinsch");
            document.getElementById("directdep").options[4]=new Option("S.l.dr.ing. Delia Gabriela Trif-Tordai","S.l.dr.ing. Delia Gabriela Trif-Tordai");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Prof.dr.ing. Dan Lascu","Prof.dr.ing. Dan Lascu");
            document.getElementById("decanat").options[2]=new Option("Conf.dr.ing. Muguras Mocofan","Conf.dr.ing. Muguras Mocofan");
            break;

        case "Inginerie din Hunedoara" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Inginerie si Management","Inginerie si Management");
            document.getElementById("status").options[2]=new Option("Inginerie Electrica si Informatica Industriala","Inginerie Electrica si Informatica Industriala");

            //

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Prof. dr. ing. Ana Virginia SOCALICI","Prof. dr. ing. Ana Virginia SOCALICI");
            document.getElementById("titularcurs").options[2]=new Option("Conf. dr. ing. Lucia VILCEANU","Conf. dr. ing. Lucia VILCEANU");
            document.getElementById("titularcurs").options[3]=new Option("Conf. dr. ing. Imre KISS ","Conf. dr. ing. Imre KISS ");
            document.getElementById("titularcurs").options[4]=new Option("Conf. dr. ing. Camelia PINCA BRETOTEAN","Conf. dr. ing. Camelia PINCA BRETOTEAN");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("Prof. dr. ing. Ana Virginia SOCALICI","Prof. dr. ing. Ana Virginia SOCALICI");
            document.getElementById("titularactivitati").options[2]=new Option("Conf. dr. ing. Lucia VILCEANU","Conf. dr. ing. Lucia VILCEANU");
            document.getElementById("titularactivitati").options[3]=new Option("Conf. dr. ing. Imre KISS ","Conf. dr. ing. Imre KISS ");
            document.getElementById("titularactivitati").options[4]=new Option("Conf. dr. ing. Camelia PINCA BRETOTEAN","Conf. dr. ing. Camelia PINCA BRETOTEAN");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("Prof. dr. ing. Ana Virginia SOCALICI","Prof. dr. ing. Ana Virginia SOCALICI");
            document.getElementById("titcurs").options[2]=new Option("Conf. dr. ing. Lucia VILCEANU","Conf. dr. ing. Lucia VILCEANU");
            document.getElementById("titcurs").options[3]=new Option("Conf. dr. ing. Imre KISS ","Conf. dr. ing. Imre KISS ");
            document.getElementById("titcurs").options[4]=new Option("Conf. dr. ing. Camelia PINCA BRETOTEAN","Conf. dr. ing. Camelia PINCA BRETOTEAN");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("Prof. dr. ing. Ana Virginia SOCALICI","Prof. dr. ing. Ana Virginia SOCALICI");
            document.getElementById("titlab").options[2]=new Option("Conf. dr. ing. Lucia VILCEANU","Conf. dr. ing. Lucia VILCEANU");
            document.getElementById("titlab").options[3]=new Option("Conf. dr. ing. Imre KISS ","Conf. dr. ing. Imre KISS ");
            document.getElementById("titlab").options[4]=new Option("Conf. dr. ing. Camelia PINCA BRETOTEAN","Conf. dr. ing. Camelia PINCA BRETOTEAN");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("Prof. dr. ing. Ana Virginia SOCALICI","Prof. dr. ing. Ana Virginia SOCALICI");
            document.getElementById("directdep").options[2]=new Option("Conf. dr. ing. Lucia VILCEANU","Conf. dr. ing. Lucia VILCEANU");
            document.getElementById("directdep").options[3]=new Option("Conf. dr. ing. Imre KISS ","Conf. dr. ing. Imre KISS ");
            document.getElementById("directdep").options[4]=new Option("Conf. dr. ing. Camelia PINCA BRETOTEAN","Conf. dr. ing. Camelia PINCA BRETOTEAN");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Conf. dr. ing. ec. Gelu Ovidiu TIRIAN","Conf. dr. ing. ec. Gelu Ovidiu TIRIAN");
            document.getElementById("decanat").options[2]=new Option("Conf. dr. ing. Sorin Aurel RATIU","Conf. dr. ing. Sorin Aurel RATIU");

            break;

        case "Management in Productie si Transporturi" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Management","Management");

            //

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Prof.dr. ALBULESCU CLAUDIU","Prof.dr. ALBULESCU CLAUDIU");
            document.getElementById("titularcurs").options[2]=new Option("Prof.dr.ing. DRAGHICI ANCA","Prof.dr.ing. DRAGHICI ANCA");
            document.getElementById("titularcurs").options[3]=new Option("Conf. dr. ARTENE ALIN","Conf. dr. ARTENE ALIN");
            document.getElementById("titularcurs").options[4]=new Option("Conf.dr.ing. TURC CRISTIAN","Conf.dr.ing. TURC CRISTIAN");

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Prof.dr. ALBULESCU CLAUDIU","Prof.dr. ALBULESCU CLAUDIU");
            document.getElementById("titularcurs").options[2]=new Option("Prof.dr.ing. DRAGHICI ANCA","Prof.dr.ing. DRAGHICI ANCA");
            document.getElementById("titularcurs").options[3]=new Option("Conf. dr. ARTENE ALIN","Conf. dr. ARTENE ALIN");
            document.getElementById("titularcurs").options[4]=new Option("Conf.dr.ing. TURC CRISTIAN","Conf.dr.ing. TURC CRISTIAN");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("Prof.dr. ALBULESCU CLAUDIU","Prof.dr. ALBULESCU CLAUDIU");
            document.getElementById("titularactivitati").options[2]=new Option("Prof.dr.ing. DRAGHICI ANCA","Prof.dr.ing. DRAGHICI ANCA");
            document.getElementById("titularactivitati").options[3]=new Option("Conf. dr. ARTENE ALIN","Conf. dr. ARTENE ALIN");
            document.getElementById("titularactivitati").options[4]=new Option("Conf.dr.ing. TURC CRISTIAN","Conf.dr.ing. TURC CRISTIAN");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("Prof.dr. ALBULESCU CLAUDIU","Prof.dr. ALBULESCU CLAUDIU");
            document.getElementById("titcurs").options[2]=new Option("Prof.dr.ing. DRAGHICI ANCA","Prof.dr.ing. DRAGHICI ANCA");
            document.getElementById("titcurs").options[3]=new Option("Conf. dr. ARTENE ALIN","Conf. dr. ARTENE ALIN");
            document.getElementById("titcurs").options[4]=new Option("Conf.dr.ing. TURC CRISTIAN","Conf.dr.ing. TURC CRISTIAN");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("Prof.dr. ALBULESCU CLAUDIU","Prof.dr. ALBULESCU CLAUDIU");
            document.getElementById("titlab").options[2]=new Option("Prof.dr.ing. DRAGHICI ANCA","Prof.dr.ing. DRAGHICI ANCA");
            document.getElementById("titlab").options[3]=new Option("Conf. dr. ARTENE ALIN","Conf. dr. ARTENE ALIN");
            document.getElementById("titlab").options[4]=new Option("Conf.dr.ing. TURC CRISTIAN","Conf.dr.ing. TURC CRISTIAN");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("Prof.dr. ALBULESCU CLAUDIU","Prof.dr. ALBULESCU CLAUDIU");
            document.getElementById("directdep").options[2]=new Option("Prof.dr.ing. DRAGHICI ANCA","Prof.dr.ing. DRAGHICI ANCA");
            document.getElementById("directdep").options[3]=new Option("Conf. dr. ARTENE ALIN","Conf. dr. ARTENE ALIN");
            document.getElementById("directdep").options[4]=new Option("Conf.dr.ing. TURC CRISTIAN","Conf.dr.ing. TURC CRISTIAN");


            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Prof.dr.ing. MOCAN MARIAN","Prof.dr.ing. MOCAN MARIAN");
            document.getElementById("decanat").options[2]=new Option("Conf.dr.ing. Ilie TAUCEAN","Conf.dr.ing. Ilie TAUCEAN");
            break;

        case "Mecanica" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Mecanica si Rezistenta Materialelor","Mecanica si Rezistenta Materialelor");
            document.getElementById("status").options[2]=new Option("Mecatronica si Robotica","Mecatronica si Robotica");
            document.getElementById("status").options[3]=new Option("Ingineria Materialelor si Fabricatiei","Ingineria Materialelor si Fabricatiei");
            document.getElementById("status").options[4]=new Option("Masini Mecanice, Utilaje si Transporturi","Masini Mecanice, Utilaje si Transporturi");

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Ghita Eugen","Ghita Eugen");
            document.getElementById("titularcurs").options[2]=new Option("Binzar Tudor","Binzar Tudor");
            document.getElementById("titularcurs").options[3]=new Option("Farkas Cristian","Farkas Cristian");
            document.getElementById("titularcurs").options[4]=new Option("Binzar Tudor","Binzar Tudor");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("Ghita Eugen","Ghita Eugen");
            document.getElementById("titularactivitati").options[2]=new Option("Binzar Tudor","Binzar Tudor");
            document.getElementById("titularactivitati").options[3]=new Option("Farkas Cristian","Farkas Cristian");
            document.getElementById("titularactivitati").options[4]=new Option("Binzar Tudor","Binzar Tudor");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("Ghita Eugen","Ghita Eugen");
            document.getElementById("titcurs").options[2]=new Option("Binzar Tudor","Binzar Tudor");
            document.getElementById("titcurs").options[3]=new Option("Farkas Cristian","Farkas Cristian");
            document.getElementById("titcurs").options[4]=new Option("Binzar Tudor","Binzar Tudor");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("Ghita Eugen","Ghita Eugen");
            document.getElementById("titlab").options[2]=new Option("Binzar Tudor","Binzar Tudor");
            document.getElementById("titlab").options[3]=new Option("Farkas Cristian","Farkas Cristian");
            document.getElementById("titlab").options[4]=new Option("Binzar Tudor","Binzar Tudor");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("Ghita Eugen","Ghita Eugen");
            document.getElementById("directdep").options[2]=new Option("Binzar Tudor","Binzar Tudor");
            document.getElementById("directdep").options[3]=new Option("Farkas Cristian","Farkas Cristian");
            document.getElementById("directdep").options[4]=new Option("Binzar Tudor","Binzar Tudor");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Conf.Dr.Ing. Virgil STOICA","Conf.Dr.Ing. Virgil STOICA");
            document.getElementById("decanat").options[2]=new Option("Conf.Dr.Ing. Cosmin CODREAN","Conf.Dr.Ing. Cosmin CODREAN");

            break;

        case "Stiinte ale Comunicarii" :
            document.getElementById("status").options[0]=new Option("Select departament","");
            document.getElementById("status").options[1]=new Option("Comunicare si Limbi Straine","Comunicare si Limbi Straine");
            document.getElementById("status").options[2]=new Option("Pregatire a Personalului Didactic","Pregatire a Personalului Didactic");

            //

            document.getElementById("titularcurs").options[0]=new Option("Select","");
            document.getElementById("titularcurs").options[1]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");
            document.getElementById("titularcurs").options[2]=new Option("Prof. univ. dr. Simona-Cristina SIMON","Prof. univ. dr. Simona-Cristina SIMON");
            document.getElementById("titularcurs").options[3]=new Option("Prof. univ. dr. Vasile GHERHES ","Prof. univ. dr. Vasile GHERHES ");
            document.getElementById("titularcurs").options[4]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");

            document.getElementById("titularactivitati").options[0]=new Option("Select","");
            document.getElementById("titularactivitati").options[1]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");
            document.getElementById("titularactivitati").options[2]=new Option("Prof. univ. dr. Simona-Cristina SIMON","Prof. univ. dr. Simona-Cristina SIMON");
            document.getElementById("titularactivitati").options[3]=new Option("Prof. univ. dr. Vasile GHERHES ","Prof. univ. dr. Vasile GHERHES ");
            document.getElementById("titularactivitati").options[4]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");

            document.getElementById("titcurs").options[0]=new Option("Select","");
            document.getElementById("titcurs").options[1]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");
            document.getElementById("titcurs").options[2]=new Option("Prof. univ. dr. Simona-Cristina SIMON","Prof. univ. dr. Simona-Cristina SIMON");
            document.getElementById("titcurs").options[3]=new Option("Prof. univ. dr. Vasile GHERHES ","Prof. univ. dr. Vasile GHERHES ");
            document.getElementById("titcurs").options[4]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");

            document.getElementById("titlab").options[0]=new Option("Select","");
            document.getElementById("titlab").options[1]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");
            document.getElementById("titlab").options[2]=new Option("Prof. univ. dr. Simona-Cristina SIMON","Prof. univ. dr. Simona-Cristina SIMON");
            document.getElementById("titlab").options[3]=new Option("Prof. univ. dr. Vasile GHERHES ","Prof. univ. dr. Vasile GHERHES ");
            document.getElementById("titlab").options[4]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");

            document.getElementById("directdep").options[0]=new Option("Select","");
            document.getElementById("directdep").options[1]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");
            document.getElementById("directdep").options[2]=new Option("Prof. univ. dr. Simona-Cristina SIMON","Prof. univ. dr. Simona-Cristina SIMON");
            document.getElementById("directdep").options[3]=new Option("Prof. univ. dr. Vasile GHERHES ","Prof. univ. dr. Vasile GHERHES ");
            document.getElementById("directdep").options[4]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");

            document.getElementById("decanat").options[0]=new Option("Select","");
            document.getElementById("decanat").options[1]=new Option("Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS","Prof. univ. dr. Daniel-Codrut DEJICA-CARTIS");
            document.getElementById("decanat").options[2]=new Option("Prof. univ. dr. Simona-Cristina SIMON","Prof. univ. dr. Simona-Cristina SIMON");
            break;
        }

        return true;
    }














