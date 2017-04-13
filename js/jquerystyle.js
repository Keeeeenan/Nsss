$(document).ready(function(){

        /* Add style dynamically by appending to head  


        var styles = "table{width:75%; height:800px;}\
        thead{background-color:teal; color:white}"
        
        $('head').append('<style type="text/css">'+styles+'</style>');

        */

        //Filter/Search through rows
        $('body').on('keyup keydown','input', function(){
            var rows = $(' tbody > tr'),
                search = $(this).val().replace(/[^a-zA-Z0-9 ]/g, "_"),
                re = new RegExp(search, 'i');
            console.log(search);
            $.each(rows, function(i, val){
                if(($(this).children().text()).search(re) != -1){
                    $(this).fadeIn(150);
                }
                else{
                    $(this).fadeOut(150);
                }
            })
        });

        //Add a hover effect for rows
        $('body').on('mouseenter mouseleave', ' tbody > tr', function(){
            $(this).toggleClass('hovered-row');
        });

        //Add a hover effect for columns
        $('body').on('mouseenter mouseleave', 'th', function(){
            var i = $('th').index(this);
            $('tr td:nth-child('+(i+1)+')').toggleClass('hovered-col');
        });

        //Create a popup
        $('body').on('click', 'tbody tr', function(){
           $('input, table').addClass('blur');
            var popUpBg = $('<div>')
                .addClass('popUpBg');
            var list = $('<ul>')
                .addClass('popup');
            
            $(this).children().each(function(i){
                var text = '<h4>' + $('th').eq(i).html().toUpperCase() + '</h4>' + $(this).html();
                li = $('<li>')
                .html(text)
                .appendTo(list);
            })

            list.appendTo(popUpBg);
            popUpBg.appendTo('.main');
            $(body).css('overflow','hidden');
        });

        //Popup removal
        $('body').on('click', '.popUpBg', function(){
            $('.popup').remove();
            $(this).remove();
            $('input, table').toggleClass('blur');
        });

        //Scroll to top button
        $('button').click(function(){
            $('tbody').animate({scrollTop: 0}, 800);
        });

    });