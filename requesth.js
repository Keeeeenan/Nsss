 document.addEventListener('DOMContentLoaded', function(){
            
        var url = 'https://nessconfigs.herokuapp.com/download/request?hosts=200';
        var url2 = 'http://[yourserver]/download/request?host=2';
        var url3 = 'http://localhost:3000/download/request?hosts=200';
        var response;
        var request = new XMLHttpRequest();
        var fragment = document.createDocumentFragment();


        request.open('GET', url, true);
        request.onerror = function(error){
            console.log('Error! Error!');
        }

        request.onload = function(e){
            if(request.status === 200){
                response = JSON.parse(request.responseText);

                //Handlebars
                var source   = $("#tableTemplate").html();
                var template = Handlebars.compile(source);
                $("#table-container").html(template(response));
                

                //ListJS sorting
                var options = {
                valueNames: [ 'hostname', 'name', 'port', 'username' ]
                };
        
                var configurationList = new List('table-container', options);

            }
        }
        request.send();
 })
