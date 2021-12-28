            let nama = document.getElementById("nama")
            let email = document.getElementById("email")
            let jam = document.getElementById("jam")
            let tujuan = document.getElementById("tujuan")
            let tiket = document.getElementById("tiket")
            let span = document.getElementsByTagName("span")
            function process(e){
                e.preventDefault();
                if(!nama.checkValidity()){
                    span[0].innerHTML = 'Tolong perhatikan bagian Nama! *Maximal karakter adalah 30 dan minimal adalah 1'
                    
                }else{
                    span[0].innerHTML = ''
                }
                
        
                if(!email.checkValidity()){
                    span[1].innerHTML= 'tolong isi email dan perhatikan *) Harus ada \"@\" dan \".\"\r\n'
                }else {
                    span[1].innerHTML= ''
                }
                
                if(!jam.checkValidity()){
                    span[2].innerHTML = 'Tolong masukkan jadwal keberangkatan dengan benar!!!'
                }else {
                    span[2].innerHTML = ''
                
                }
                
                if(!tujuan.checkValidity()){
                    span[3].innerHTML = 'Tolong masukkan tujuan keberangkatan dengan benar!!!'
                }else {
                    span[3].innerHTML = ''
                    
                }
                
                if(!tiket.checkValidity() ){
                    span[4].innerHTML = 'Tolong masukkan jumlah ticket dengan benar *maxsimal 10 minimal 1!!!'
                }else {
                    span[4].innerHTML = ''
                    
                }

                
                    
                
                
                let hasil = document.getElementById("hasil")
                let source = document.getElementById("validation")
                let data = source.querySelectorAll("p")
                let valuesource = source.querySelectorAll("input")
                
                if (nama.checkValidity() == true && email.checkValidity()== true && jam.checkValidity() == true && tujuan.checkValidity() == true && tiket.checkValidity() == true ){
                    for(let i = 0; i <= valuesource.length; i++){
                        hasil.innerHTML  += data[i].textContent + " : " + valuesource[i].value + "<br>"
                    }
                }
            }