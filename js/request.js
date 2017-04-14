
 document.addEventListener('DOMContentLoaded', function(){

        getConfigurations();

        function getConfigurations(){
            var url = 'http://localhost:3000/download/request?hosts=20',
                response,
                fragment = document.createDocumentFragment(),

                request = new XMLHttpRequest();

            request.open('GET', url, true);

            // or request.onreadystatechange = function(){if(request.status === 200 && request.readyState == 4){}}
            request.onload = function(){
                if(request.status === 200){
                    var table = document.createElement('table');         
                    response = JSON.parse(request.responseText);
                    response = response.configurations;
                    
                    table.appendChild(getHeaders(response));
                    table.appendChild(fillTable(response));

                    fragment.appendChild(table);
                    document.getElementById('table-container').appendChild(fragment);
                }
                else{
                    console.log('Error!')
                }
            }

            request.onerror = function(error){
                console.log('Error! Error!');
            }

            request.send();

        }

        function getHeaders(response){
            var tableheader = document.createElement('thead'),
                row = document.createElement('tr'),
                header = document.createElement('th');
                
            for(key in response[0]){
               var rowTitle = header.cloneNode(false);
               rowTitle.id = key;
               rowTitle.className = 'header';
               rowTitle.appendChild(document.createTextNode(key));
               row.appendChild(rowTitle);
            }
            tableheader.appendChild(row);
            return tableheader;
        }

        function fillTable(response){
            var tbody = document.createElement('tbody'),
                row = document.createElement('tr');

            for(var i=0;i<response.length;i++){
                var newrow = row.cloneNode(false);             
                for(key in response[i]){
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(response[i][key]));
                newrow.appendChild(cell);
                }
                tbody.appendChild(newrow);
            }    
            return tbody;
        }


})       
 