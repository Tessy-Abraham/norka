function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            //console.log(response);
            var Jshopping = response.shopping;
            //console.log(jpeople);
            var tbl = document.getElementById('table1');
            tbl.innerHTML="<tr><th>Slno</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
           for(var i=0;i<Jshopping.length;i++){
            tbl.innerHTML += "<td>" +Jshopping[i].Slno +"</td>" + "<td>" +Jshopping[i].Name +"</td>"+"<td>" +Jshopping[i].Quantity +"</td>"+"<td>" +Jshopping[i].Unit +"</td>" + "<td>" +Jshopping[i].Department +"</td>" + "<td>" +Jshopping[i].Notes +"</td>";
            }
            
            //console.log(output);
               // document.getElementById("demo").innerHTML = output;
           
        }
    }
    xhttp.open("GET","ajax.json",true);
    xhttp.send();
    }

    