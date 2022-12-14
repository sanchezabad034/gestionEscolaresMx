var pagosydevoluciones= angular.module('pagosydevoluciones', []);

pagosydevoluciones.controller('pagosController', function($scope){
     $scope.areas={
          options:[
           {id: '1',name:'Biblioteca'}, 
           {id:'2', name:'Taller'}, 
           {id:'3', name:'Laboratorio'},
          ],
          A_options:{id: '1',name:'Biblioteca'}, 
      };

      $scope.formato={
          options:[
               {id:'1', name:'--Selecciona el formato--'},
               {id:'2', name:'PDF'},
               {id:'3', name:'EXCEL'}
          ],
          A_options:{id: '1',name:'--Selecciona el formato--'},
      }

      $scope.studentslibrary=[
          {id:'1', name:'David Victor', lastname:'Berumen Ramirez', typecredentials:'DEMO0831902', status:'Vencido', story:'Cuentos de tierra mar2', date:'Del sep 12, 2018 al sep 26, 2018', photo: 'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'2', name:'David Victor', lastname:'Berumen Ramirez', typecredentials:'DEMO0831902', status:'Vencido', story:'El quijote de la mancha', date:'Del sep 19, 2018 al sep 30, 2018', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png' },
          {id:'3', name:'David Victor', lastname:'Berumen Ramirez', typecredentials:'DEMO0831902', status:'Vencido', story:'Papel de baño', date:'Del dec 24, 2018 al sep 26, 2018', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png' },
          {id:'4', name:'Jesus Daniel', lastname:'Herrera Maltos', typecredentials:'17310051300459', status:'Vencido', story:'La vuelta al mundo en 80 dias', date:'Del jan 16, 2019 al jan 17, 2019', photo:'https://res.cloudinary.com/cdn-dh03/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1566921918/escolares/escuelas/2/alumnos/bbxdp4x27zgpjvah3t74.jpg' },
          {id:'5', name:'Anahi Yamileth', lastname:'Perez Perez', typecredentials:'16110080040080', status:'Vencido', story:'Asómate a la Quimica 2 ', date:'Del Mar 6, 2019 al Mar 7, 2019', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539699792/escolares/escuelas/3283/alumnos/kdbxtwffla6jmtimhjbg.jpg' },
          {id:'6', name:'Anahi Yamileth', lastname:'Perez Perez', typecredentials:'16110080040080', status:'Vencido', story:'Precalculo ', date:'Del Mar 6, 2019 al Mar 7, 2019', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539699792/escolares/escuelas/3283/alumnos/kdbxtwffla6jmtimhjbg.jpg' },
          {id:'7', name:'Anahi Yamileth', lastname:'Perez Perez', typecredentials:'16110080040080', status:'Vencido', story:'Precalculo ', date:'Del Mar 6, 2019 al Mar 7, 2019', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539699792/escolares/escuelas/3283/alumnos/kdbxtwffla6jmtimhjbg.jpg' },
          {id:'8', name:'Karla Janeth', lastname:'Sanchez Herrera', typecredentials:'18110080040528', status:'Vencido', story:'El monje que vendio su ferrari', date:'Del Mar 7, 2019 al Mar 22, 2019', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1564676209/escolares/escuelas/3283/alumnos/fzmxlvaicfadx6fiki61.jpg' },
          {id:'9', name:'Andres', lastname:'Hernandez Marquina', typecredentials:'16110080040012', status:'Vencido', story:'Fisica conceptos y aplicaciones', date:'Del Mar 14, 2019 al Mar 17, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539703035/escolares/escuelas/3283/alumnos/cxfqxw8tnsu9c0eeyhs7.jpg' },
          {id:'10', name:'Lizeth Briceyda', lastname:'Caldera Mendia', typecredentials:'16110080040008', status:'Vencido', story:'Bioqumica de los procesos metabolicos', date:'Del Mar 14, 2019 al Mar 17, 2019', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539709837/escolares/escuelas/3283/alumnos/nuzcv4i4t5iqzbk1sg3c.jpg' },
          {id:'11', name:'Lizeth Briceyda', lastname:'Caldera Mendia', typecredentials:'16110080040008', status:'Vencido', story:'Bioquimica de los procesos metabolicos', date:'Del Mar 14, 2019 al Mar 17, 2019', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539709837/escolares/escuelas/3283/alumnos/nuzcv4i4t5iqzbk1sg3c.jpg' },
          {id:'12', name:'Lizeth Briceyda', lastname:'Caldera Mendia', typecredentials:'16110080040008', status:'Vencido', story:'Bioqumica de los procesos metabolicos', date:'Del Mar 14, 2019 al Mar 17, 2019', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539709837/escolares/escuelas/3283/alumnos/nuzcv4i4t5iqzbk1sg3c.jpg' },
          {id:'13', name:'Erik Manuel', lastname:'Soto Ortega', typecredentials:'16110080040097', status:'Vencido', story:'Biologia celular', date:'Del Mar 14, 2019 al Mar 17, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539628335/escolares/escuelas/3283/alumnos/qmfd1hebc6vuzlc3mj7l.jpg' },
          {id:'14', name:'Erik Manuel', lastname:'Soto Ortega', typecredentials:'16110080040097', status:'Vencido', story:'Bioquimica de los procesos metabolicos', date:'Del Mar 14, 2019 al Mar 17, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539628335/escolares/escuelas/3283/alumnos/qmfd1hebc6vuzlc3mj7l.jpg' },
          {id:'15', name:'Erik Manuel', lastname:'Soto Ortega', typecredentials:'16110080040097', status:'Vencido', story:'Biologia', date:'Del Mar 15, 2019 al Mar 27, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539628335/escolares/escuelas/3283/alumnos/qmfd1hebc6vuzlc3mj7l.jpg' },
          {id:'16', name:'Erik Manuel', lastname:'Soto Ortega', typecredentials:'16110080040097', status:'Vencido', story:'Quimica 1', date:'Del Mar 15, 2019 al Mar 27, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539628335/escolares/escuelas/3283/alumnos/qmfd1hebc6vuzlc3mj7l.jpg' },
          {id:'17', name:'Isaac Rafael', lastname:'Perez Balderas', typecredentials:'17110080040066', status:'Vencido', story:'Algebra', date:'Del Mar 19, 2019 al Mar 22, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565977052/escolares/escuelas/3283/alumnos/geazzkeqxyjr3nuint2o.jpg' },
          {id:'18', name:'Karla Larixa', lastname:'Vazquez Conde', typecredentials:'17110080040096', status:'Vencido', story:'Algebra Baldor', date:'Del Mar 19, 2019 al Mar 22, 2019', photo:'https://res.cloudinary.com/cdn-dh03/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539360515/escolares/escuelas/3283/alumnos/ql404qanvjj3xt6tpwor.jpg' },
          {id:'19', name:'Jose Emmanuel', lastname:'Franco Aragon', typecredentials:'17110080040074', status:'Vencido', story:'Algebra Baldor', date:'Del Mar 20, 2019 al Mar 23, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539265913/escuelas/3283/alumnos/knrjmj7tkc0s12s9k6gn.jpg' },
          {id:'20', name:'Gustavo Adolfo', lastname:'Perez Campos', typecredentials:'17110080040015', status:'Vencido', story:'Algebra Baldor', date:'Del Mar 20, 2019 al Mar 25, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539266004/escuelas/3283/alumnos/ybdcqynon9ftpmruueby.jpg' },
          {id:'21', name:'Gustavo Adolfo', lastname:'Perez Campos', typecredentials:'17110080040015', status:'Vencido', story:'Algebra Baldor', date:'Del Mar 20, 2019 al Mar 25, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539266004/escuelas/3283/alumnos/ybdcqynon9ftpmruueby.jpg' },
          {id:'22', name:'Gustavo Alberto', lastname:'Esparza Aragon', typecredentials:'17110080040076', status:'Vencido', story:'Algebra Baldor', date:'Del Mar 20, 2019 al Mar 23, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539265868/escuelas/3283/alumnos/qk7oomfpihdlnboukfoz.jpg' },
          {id:'23', name:'Oscar Armando', lastname:'Beltran Teran', typecredentials:'17110080040091', status:'Vencido', story:'Algebra Baldor', date:'Del Mar 20, 2019 al Mar 23, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539265965/escuelas/3283/alumnos/mue4nrkieof6rrwud1dm.jpg' },
          {id:'24', name:'Martha Guadalupe', lastname:'Luna Ortiz', typecredentials:'18110080040787', status:'Vencido', story:'Geometria y trigonometria', date:'Del Mar 21, 2019 al Mar 25, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539268601/escuelas/3283/alumnos/fy6xjghxyqvylb8e57hw.jpg' },
          {id:'25', name:'Jesus Daniel', lastname:'Larrea Villarreal', typecredentials:'16110080040018', status:'Vencido', story:'Redes +', date:'Del Mar 26, 2019 al Mar 29, 2019', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539703720/escolares/escuelas/3283/alumnos/m55ztcbjwwsg0fv2rjeh.jpg' },
          {id:'26', name:'Erik Manuel', lastname:'Soto Ortega', typecredentials:'16110080040097', status:'Vencido', story:'Biologia', date:'Del Mar 28, 2019 al Apr 10, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539628335/escolares/escuelas/3283/alumnos/qmfd1hebc6vuzlc3mj7l.jpg' },
          {id:'27', name:'Isaac Rafael', lastname:'Perez Balderas', typecredentials:'17110080040066', status:'Vencido', story:'La metamorfosis', date:'Del Apr 4, 2019 al Apr 10, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565977052/escolares/escuelas/3283/alumnos/geazzkeqxyjr3nuint2o.jpg' },
          {id:'28', name:'Alma Delfina', lastname:'Rocha Torres', typecredentials:'17110080040306', status:'Vencido', story:'El principito', date:'Del May 7, 2019 al May 13, 2019', photo:'https://res.cloudinary.com/cdn-dh05/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565289396/escolares/escuelas/3283/alumnos/yg0eolq0ohmure5bkd2z.jpg' },
          {id:'29', name:'Alma Delfina', lastname:'Rocha Torres', typecredentials:'17110080040306', status:'Vencido', story:'El complot mongol', date:'Del May 28, 2019 al Jun 3, 2019', photo:'https://res.cloudinary.com/cdn-dh05/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565289396/escolares/escuelas/3283/alumnos/yg0eolq0ohmure5bkd2z.jpg' },
          {id:'30', name:'Alma Delfina', lastname:'Rocha Torres', typecredentials:'17110080040306', status:'Vencido', story:'Las fuerzas morales', date:'Del May 28, 2019 al May 31, 2019', photo:'https://res.cloudinary.com/cdn-dh05/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565289396/escolares/escuelas/3283/alumnos/yg0eolq0ohmure5bkd2z.jpg' },
          {id:'31', name:'Andres', lastname:'Hernandez Marquina', typecredentials:'16110080040012', status:'Vencido', story:'Principios de fisica', date:'Del May 29, 2019 al Jun 4, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539703035/escolares/escuelas/3283/alumnos/cxfqxw8tnsu9c0eeyhs7.jpg' },
          {id:'32', name:'Daniel Julian', lastname:'Torres Gaytan', typecredentials:'18310051300145', status:'Vencido', story:'Anauario estadistico', date:'Del Aug 19, 2019 al Aug 22, 2019', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1566936228/escolares/escuelas/2/alumnos/rzzr1xd53cmh7dkntxgy.jpg' },
          {id:'33', name:'Arian Said', lastname:'Martinez Meraz', typecredentials:'17110080040104', status:'Vencido', story:'Calculo diferencial', date:'Del Aug 20, 2019 al Nov 23, 2019', photo:'https://res.cloudinary.com/cdn-dh09/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1611079891/escolares/escuelas/3283/alumnos/dmrtrti7qnidy2unpfcy.jpg' },
          {id:'34', name:'Ricardo', lastname:'Hernandez Rivera', typecredentials:'18110080040590', status:'Vencido', story:'Geometria y trigonometria basada en competencias', date:'Del Aug 20, 2019 al Nov 29, 2019', photo:'https://res.cloudinary.com/cdn-dh17/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1630428162/escolares/escuelas/3283/alumnos/x4k8utvaf4epveeg9ghw.jpg' },
          {id:'35', name:'Ricardo', lastname:'Hernandez Rivera', typecredentials:'18110080040590', status:'Vencido', story:'Geometria y trigonometria basada en competencias', date:'Del Aug 20, 2019 al Nov 29, 2019', photo:'https://res.cloudinary.com/cdn-dh17/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1630428162/escolares/escuelas/3283/alumnos/x4k8utvaf4epveeg9ghw.jpg' },
          {id:'36', name:'Jesus Elier', lastname:'Montiel Salazar', typecredentials:'17110080040263', status:'Vencido', story:'Calculo Diferencial', date:'Del Aug 21, 2019 al Nov 23, 2019', photo:'https://res.cloudinary.com/cdn-dh05/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565970029/escolares/escuelas/3283/alumnos/jyw70m596vwnaulrs2pd.jpg' },
          {id:'37', name:'Jesus Elier', lastname:'Montiel Salazar', typecredentials:'17110080040263', status:'Vencido', story:'Calculo Diferencial', date:'Del Aug 21, 2019 al Nov 23, 2019', photo:'https://res.cloudinary.com/cdn-dh05/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565970029/escolares/escuelas/3283/alumnos/jyw70m596vwnaulrs2pd.jpg' },
          {id:'38', name:'Martha Guadalupe', lastname:'Luna Ortiz', typecredentials:'18110080040787', status:'Vencido', story:'Algebra de baldor', date:'Del Aug 23, 2019 al Nov 23, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539268601/escuelas/3283/alumnos/fy6xjghxyqvylb8e57hw.jpg' },
          {id:'39', name:'Martha Guadalupe', lastname:'Luna Ortiz', typecredentials:'18110080040787', status:'Vencido', story:'Administracion y calidad', date:'Del Aug 23, 2019 al Nov 23, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539268601/escuelas/3283/alumnos/fy6xjghxyqvylb8e57hw.jpg' },
          {id:'40', name:'Alan Samuel', lastname:'Cruz Carreon', typecredentials:'18110080040672', status:'Vencido', story:'Programacion en lenguaje Java', date:'Del Aug 23, 2019 al Aug 26, 2019', photo:'https://res.cloudinary.com/cdn-dh04/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1597004117/escolares/escuelas/3283/alumnos/wwfsthgbzidkqtpjmuxc.jpg' },
          {id:'41', name:'Dara Elizabeth', lastname:'Chaparro Aramburo', typecredentials:'18110080040861', status:'Vencido', story:'Atencion y servicio al cliente', date:'Del Aug 23, 2019 al Aug 26, 2019', photo:'https://res.cloudinary.com/cdn-dh07/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1598583973/escolares/escuelas/3283/alumnos/ktmy610zh3m9vwynbpsa.jpg' },
          {id:'42', name:'Alondra Cosett', lastname:'Gonzalez Lares', typecredentials:'18110080040705', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 26, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565973658/escolares/escuelas/3283/alumnos/eblstyoxk5yzlzhrsrp0.jpg' },
          {id:'43', name:'Ana Cristina', lastname:'Santillan Soto', typecredentials:'17110080040285', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh11/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1630428281/escolares/escuelas/3283/alumnos/rsvszymk9esflnqlr2xb.jpg' },
          {id:'44', name:'Mario Alejandro', lastname:'Solano Sanchez', typecredentials:'18110080040728', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh09/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1598916571/escolares/escuelas/3283/alumnos/ipioscqxeiqhsecqdcal.jpg' },
          {id:'45', name:'Adrian Amuraby', lastname:'Valdez Lugo', typecredentials:'18110080040713', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh03/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1567191387/escolares/escuelas/3283/alumnos/klasbg2vsxqqdvw1lswv.jpg' },
          {id:'46', name:'Marlene Sarahi', lastname:'Bustamante Almodavar', typecredentials:'18110080040703', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh05/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565196867/escolares/escuelas/3283/alumnos/nk50ol0jcpwxpkxbydo7.jpg' },
          {id:'47', name:'Hannia Elizabeth', lastname:'Pachecho Salgado', typecredentials:'18110080040864', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539273066/escuelas/3283/alumnos/diindyfhlymqlxb4jfzg.jpg' },
          {id:'48', name:'Jose Alejandro', lastname:'Cardiel de la cruz', typecredentials:'18110080040721', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539273622/escuelas/3283/alumnos/ggwk0k3vheekljyng3ix.jpg' },
          {id:'49', name:'Jose Alejandro', lastname:'Cardiel de la cruz', typecredentials:'18110080040721', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539273622/escuelas/3283/alumnos/ggwk0k3vheekljyng3ix.jpg' },
          {id:'50', name:'Jesus Ricardo', lastname:'Rios Deras', typecredentials:'17110080040312', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539282157/escuelas/3283/alumnos/d44sds0rzyrlugz44yhx.jpg' },
          {id:'51', name:'Jose Alejandro', lastname:'Cardiel de la cruz', typecredentials:'18110080040721', status:'Vencido', story:'Programación en lenguaje Java', date:'Del Aug 29, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh01/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1539273622/escuelas/3283/alumnos/ggwk0k3vheekljyng3ix.jpg' },
          {id:'52', name:'Fatima Pricila', lastname:'Amaya Cueto', typecredentials:'17110080040101', status:'Vencido', story:'Ciencias, tecnologia, sociedad y valores 2', date:'Del Aug 26, 2019 al Aug 26, 2019', photo:'https://res.cloudinary.com/cdn-dh03/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1564679480/escolares/escuelas/3283/alumnos/zwgqjgmmgsu5etx39ygx.jpg' },
          {id:'53', name:'Dulce Daniela', lastname:'Quiñonez Pulgarin', typecredentials:'17110080040233', status:'Vencido', story:'Mantenimiento de equipo de computo', date:'Del Aug 26, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565281019/escolares/escuelas/3283/alumnos/osrowgxbmhskfnwojpbt.jpg' },
          {id:'54', name:'Diego', lastname:'De los rios Beltran', typecredentials:'17110080040254', status:'Vencido', story:'Mantenimiento de equipo de computo', date:'Del Aug 26, 2019 al Aug 29, 2019', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565276867/escolares/escuelas/3283/alumnos/hw1lldrbjq6iqbt9sohp.jpg' },
          {id:'55', name:'Diana Karime', lastname:'Esparza Galarza', typecredentials:'17110080040253', status:'Vencido', story:'Mantenimiento de equipo de computo', date:'Del Sep 26, 2019 al Sep 29, 2019', photo:'https://res.cloudinary.com/cdn-dh02/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.8/v1565276867/escolares/escuelas/3283/alumnos/hw1lldrbjq6iqbt9sohp.jpg' },
     ]    
     
     $scope.articles=[
          {id:'1', name:'El quijote de la mancha', description:'- 232456433345'},
          {id:'2', name:'Nausika', description:'-'},
          {id:'3', name:'Julio Verne', description:'-'},
          {id:'4', name:'Cuentos de tierra mar2'}, 
          {id:'5', name:'Your Name', description:'-12345678'},
          {id:'6', name:'Quimica', description:'-'},
          {id:'7', name:'Español', description:'-'},
          {id:'8', name:'Test',description:'- 123456789'},
          {id:'9', name:'Test2', description:'-1234567'},
          {id:'10', name:'Naruto', description:'-ns01'}
     ]

     $scope.studentmodal=[
          {id:'1', name: 'Berumen Ramirez David Victor', description:'BERD940621HDGRMV01', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'2', name:'Ebrard Bautista David', description:'XXXX986175XXXXXX86', photo:'https://res.cloudinary.com/cdn-dh05/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1568236505/escolares/escuelas/9/alumnos/kxbu2lnwyije6yqtt5p6.jpg'},
          {id:'3', name:'Sinatra Guzman David', description:'XXXX19128XXXXXX46', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'4', name:'Santos Diaz David', description:'XXXX592131XXXXXX76', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'5', name:'Zaragoza Ramirez David', description:'XXXX605164XXXXXX60', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'6', name:'Acosta Vallejo David', description:'XXXX639844XXXXXX10', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'7', name:'Hernandez Miranda David', description:'XXXX183436XXXXXX94', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'8', name:'Ramirez Diaz David', description:'XXXX449080XXXXXX11', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'9', name:'Berumen Ramirez David Victor', description:'BERD940621HDGRMV01', photo:'https://res.cloudinary.com/cdn-dh15/image/upload/v1657740320/web/sitios/17/sliders/g4blqheytzqpxjqhstpy.png'},
          {id:'10', name:'Berumen Ramirez David Victor', description:'BERD940621HDGRMV01', photo:'https://res.cloudinary.com/cdn-dh17/image/upload/c_thumb,h_256,q_auto,w_256,g_face,r_max,z_0.1,e_brightness_hsb/v1645457955/escolares/escuelas/9/alumnos/g6tquakw9tllykimtfvn.jpg'}
     ]

     $scope.tablearticulos=[
          {id:'1', view:'invisible', barcode:'232456433345', title:'El quijote de la mancha', autor:'Miguel de Cervantes', editorial:'Mundial', ISBN:'w9724927dadd', inventario:'20'},
          {id:'3',view:'invisible', barcode:'', title:'Nausika', autor:'', editorial:'', ISBN:'', inventario:'1'},
          {id:'4',view:'invisible', barcode:'', title:'Julio Verne', autor:'', editorial:'', ISBN:'', inventario:'1'},
          {id:'6', view:'invisible',barcode:'', title:'Cuentos de tierra mar2', autor:'', editorial:'', ISBN:'', inventario:'1'},
          {id:'117', view:'invisible',barcode:'12345678', title:'Your name', autor:'JP', editorial:'TK', ISBN:'TKJP01', inventario:'3'},
          {id:'156',view:'invisible', barcode:'', title:'Quimica', autor:'', editorial:'', ISBN:'', inventario:'1'},
          {id:'157', view:'invisible', barcode:'', title:'Español', autor:'', editorial:'', ISBN:'', inventario:'1'},
          {id:'179', view:'invisible', barcode:'123456789', title:'Test', autor:'', editorial:'', ISBN:'', inventario:'10'},
          {id:'180', view:'invisible', barcode:'1234567', title:'Test2', autor:'', editorial:'', ISBN:'', inventario:'10'},
          {id:'181', view:'invisible', barcode:'ns01', title:'Naruto', autor:'Kishimoto', editorial:'Tokyo', ISBN:'tk01', inventario:'12'},

     ] 

     
     $scope.ChangeView = function(id) {
          for (let i = 0; i < $scope.tablearticulos.length; i++) {
              $scope.tablearticulos[id].view = 'visible';
              if ($scope.tablearticulos[i].id != (id + 1)) {
                  $scope.tablearticulos[i].view = 'invisible';
              }
          }
      }

     $scope.tablearticulos_2=[
          {id:'1', barcode:'232456433345', title:'El quijote de la mancha', autor:'Miguel de Cervantes', editorial:'Mundial', ISBN:'w9724927dadd', id_tablearticulos:'1'},

          {id:'3', barcode:'', title:'Nausika', autor:'', editorial:'', ISBN:'', id_tablearticulos:'3'},

          {id:'4', barcode:'', title:'Julio Verne', autor:'', editorial:'', ISBN:'', id_tablearticulos:'4'},

          {id:'6', barcode:'', title:'Cuentos de tierra mar2', autor:'', editorial:'', ISBN:'', id_tablearticulos:'6' },

          {id:'117', barcode:'12345678', title:'Your name', autor:'JP', editorial:'TK', ISBN:'TKJP01',  id_tablearticulos:'117'},

          {id:'156', barcode:'', title:'Quimica', autor:'', editorial:'', ISBN:'', id_tablearticulos:'156'},

          {id:'157', barcode:'', title:'Español', autor:'', editorial:'', ISBN:'', id_tablearticulos:'157'},

          {id:'179', barcode:'123456789', title:'Test', autor:'', editorial:'', ISBN:'',  id_tablearticulos:'179'},

          {id:'180', barcode:'1234567', title:'Test2', autor:'', editorial:'', ISBN:'',  id_tablearticulos:'180'},

          {id:'181', barcode:'ns01', title:'Naruto', autor:'Kishimoto', editorial:'Tokyo', ISBN:'tk01', id_tablearticulos:'181'},

     ] 

     $scope.prestamos=[
          {id:'1', name:'Cuentos de tierra mar2', encargado: 'Yome Renques' , prestamo:'2018-09-12', devolucion:'2018-09-26', devuelto:'2019-03-06'}
     ]
})
