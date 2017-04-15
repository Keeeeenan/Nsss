$(document).ready(function(){
    
        /* 
        
        *** Add style dynamically by appending to head ***

        var styles = "table{width:75%; height:800px;}\
        thead{background-color:teal; color:white}"
        
        $('head').append('<style type="text/css">'+styles+'</style>');

        */
        $('body').on('mouseenter', 'table', addScrollHandler);

        $(document).on('scroll', checkScrollPosition);

        $('input').on('keyup keydown', searchForString);

        $('body').on('mouseenter mouseleave', ' tbody > tr', function(){
            $(this).toggleClass('hovered-row');
        });

        $('body').on('mouseenter mouseleave', 'th', function(){
            var i = $('th').index(this);
            $('tr td:nth-child('+(i+1)+')').toggleClass('hovered-col');
        });

        $('body').on('click', '.popUpBg, .popup', removePopUp);

        $('#top').click(function(e){
            e.preventDefault();
            $('html,body,tbody').animate({scrollTop: 0}, 800);  
        });

        function addScrollHandler(){
            $('tbody').on('scroll', checkScrollPosition);
            $('body').off('mouseenter', 'table', addScrollHandler);
        };

        function checkScrollPosition(){
            if( $(this).scrollTop() >= 500){
                $('button').show();
            }
            else{
                $('button').hide();
            }
        }

        function searchForString(){
            var rows = $(' tbody > tr'),
                search = $(this).val().replace(/[^a-zA-Z0-9 ]/g, "_"),
                re = new RegExp(search, 'i');

            $.each(rows, function(i, val){
                if(($(this).children().text()).search(re) != -1){
                    $(this).fadeIn(150);
                }
                else{
                    $(this).fadeOut(150);
                }
            })
        }

        (function createPopups(){
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
                $('body').css('overflow','hidden');
            })
        }())

        function removePopUp(){
            $('.popup, .popUpBg').remove();
            $('input, table').removeClass('blur');
            $('body').css('overflow','auto');
        }

    });