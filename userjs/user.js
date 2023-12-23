
    var firebaseConfig = {		
    
        databaseURL: "https://crud2019.firebaseio.com",
    };
    firebase.initializeApp(firebaseConfig);
    
    // Melakukan proses pencarian data
    function CariData() {
        // Ambil isi text pencarian
        var user_jsa_cari = $('#text_cari').val();

        // Buat referensi database firebase
        var dbRef = firebase.database();
        var statusJsa = dbRef.ref("status-jsa");


        // Ambil data nama_alat huruf depan (dan selebihnya) isi text cari
        var query = statusJsa
            .orderByChild('user_jsa')
            .equalTo(user_jsa_cari)
            .limitToFirst(1);


        // Dapatkan referensi table
        var table = document.getElementById("tabel-status-jsa").getElementsByTagName('tbody')[0];

        // Membuang semua isi table	
        $("#tabel-status-jsa").find("tr:gt(0)").remove();

        // Memuat Data pencarian

        query.on("child_added", function (snapshot) {

            var childData = snapshot.val();

            var row = table.insertRow(table.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
         // var cell3 = row.insertCell(2);
     
           
         
            cell1.innerHTML = '<button class="btn btn-primary btn-sm " type="button" id="update_data" onclick="updateData_Tampil(' + childData.id + '),pauseAudio()" data-toggle="modal" data-target="#ModalUpdate">order<a class="class:glyphicon glyphicon-shopping-cart"></a></button>';	
            cell2.innerHTML = childData.namauser_jsa;
          // cell3.innerHTML = childData.nocus_jsa;
      
    
          
         
          
        });
      
    }

    // Menampilkan data yang akan di update kedalam modal update
    function updateData_Tampil(id) {
        $('#T4').val(id);

     

        var dbRef_update_tampil = firebase.database();
        var statusJsadenganID = dbRef_update_tampil.ref("status-jsa/" + id);
    

        statusJsadenganID.on("value", function (snapshot) {
            var childData = snapshot.val();
            $('#t4_user_jsa').val(childData.user_jsa);
            $('#t4_nouser_jsa').val(childData.nouser_jsa);
            $('#t4_namauser_jsa').val(childData.namauser_jsa);
            $('#t4_nocus_jsa').val(childData.nocus_jsa);
            $('#t4_namaclient_jsa').val(childData.namaclient_jsa);
            $('#t4_Latclient_jsa').val(childData.latclient_jsa);
            $('#t4_longclient_jsa').val(childData.longclient_jsa);
            $('#t4_poto_jsa').val(childData.poto);
          
          
            document.getElementById("myPic").src = childData.poto;
            $('#myAudio')[0].play(childData.namauser_jsa);
        
    });
        
    }
    

    // Melakukan proses update data
    function updateData_Proses() {	
    
        var id_update_proses = $('#T4').val();
        var user_jsa_update_proses = $('#t4_user_jsa').val();
        var nouser_jsa_update_proses = $('#t4_nouser_jsa').val();
        var namauser_jsa_update_proses = $('#t4_namauser_jsa').val();
        var nocus_jsa_update_proses = $('#t4_nocus_jsa').val();
        var namaclient_jsa_update_proses =$('#t4_namaclient_jsa').val();
        var latclient_jsa_update_proses =$('#t4_latclient_jsa').val();
        var longclient_jsa_update_proses =$('#t4_longclient_jsa').val();
        var jenis1_jsa_update_proses=$('#t4_jenis1_jsa').val();
        var harga1_jsa_update_proses=$('#t4_harga1_jsa').val();
      
        var dbRef_update_proses = firebase.database();
        var update_statusJsa = dbRef_update_proses.ref("status-jsa/" + id_update_proses);
        
            
        update_statusJsa.update({
            "user_jsa":user_jsa_update_proses,
            "nouser_jsa":nouser_jsa_update_proses,
            "namauser_jsa":namauser_jsa_update_proses,
            "nocus_jsa":nocus_jsa_update_proses,
            "namaclient_jsa":namaclient_jsa_update_proses,
            "latclient_jsa":latclient_jsa_update_proses,
            "longclient_jsa":longclient_jsa_update_proses,
            "longclient_jsa":longclient_jsa_update_proses,
            "jenis1_jsa":jenis1_jsa_update_proses,
            "harga1_jsa":harga1_jsa_update_proses,


        });

        $('#ModalUpdate').modal('hide');
        /*
        $('#chatAudio')[0].play(user_jsa_update_proses);
        
        */
       
    }
    // Mengambil id terakhir dan membahkan dengan 1 dan memasukkan kedalam text id di modal tambah

    
    // Melakukan proses delete data yang telah dikonfirmasi sebelumnya


    // Memasukkan id ke textbox di modal konfirmasi delete


