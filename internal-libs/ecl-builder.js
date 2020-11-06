(function($){

    $.fn.ecl_builder = function(prop){

        // Default parameters

        var options = $.extend({
            height : "70vh",
            width : "50vw",
            title:"ECL Builder",
            description: "-",
            top: "20%",
            left: "30%",
            ecl: "default"
        },prop);

        return this.click(function(e){
            add_block_page();
            add_popup_box();
            add_styles();

            $('.ecl_builder').fadeIn();
        });

         function add_styles(){         
            $('.ecl_builder').css({ 
                'position': 'relative',
                'display': 'flex',
                'flex-direction': 'column',
                'pointer-events': 'auto',
                'background-color': '#fff',
                'background-clip': 'padding-box',
                'border': '1px solid rgba(0,0,0,.2)',
                'border-radius': '.3rem',
                'outline': '0',
                'margin': '1.75rem auto',
                'height':'70vh',
                'width':'60vw',
            });
             
            $('.ecl_builder_header').css({
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'flex-left',
                'padding': '1rem 1rem',
                'border-top': '1px solid #dee2e6',
                'background-color': '#343A40',
                'color': '#FFFFFF',
                'font-weight': '300'
            });
             
            $('.ecl_builder_footer').css({
                'display': 'flex',
                'align-items': 'flex-start',
                'justify-content': 'space-between',
                'padding': '1rem 1rem',
                'border-top': '1px solid #dee2e6',
            });
             
            $('.ecl_builder_button').css({
                'display': 'inline-block',
                'margin-bottom': '0',
                'font-weight': 'normal',
                'text-align': 'center',
                'vertical-align': 'middle',
                'cursor': 'pointer',
                'background-image': 'none',
                'border': '1px solid transparent',
                'white-space': 'nowrap',
                'padding': '6px 12px',
                'font-size': '12px',
                'line-height': '1.42857143',
                'border-radius': '4px'
            });
             
            $('.ecl_builder_select').css({
                'background-color': '#FFFFFF',
                'font-size': '1rem',
                'height': '2.5rem',
                'width': 'auto',
                'padding': '.5rem',
                'margin': '1rem',
                'border-radius': '.25rem'
            });
             
            $('.ecl_builder_content').css({
                'font-size': '1.5rem',
                'padding': '0',
                'max-height': '70vh',
                'flex': '1 1 auto'
            });
             
            $('.ecl_builder_ok').css({
                'float':'right',
                'position':'relative',
                'color':'white',
                'background-color': '#5cb85c;',
            });
             
            $('.ecl_builder_close').css({
                'float':'right',
                'position':'relative',
                'color':'white',
                'background': '#5cb85c',
            });
                        /*Block page overlay*/
            var pageHeight = $(document).height();
            var pageWidth = $(window).width();

            $('.ecl_builder_block_page').css({
                'position':'fixed',
                'top':'0',
                'left':'0',
                'background-color':'rgba(0,0,0,0.6)',
                'height':pageHeight,
                'width':pageWidth,
                'z-index':'1050'
            });
            $('.ecl_builder_outer').css({
                'position': 'fixed',
                'width': 'auto',
                'display': 'block',
                'align-items': 'center',
                'z-index': '1100',
                'height':'100%',
                'width':'100%',
            });
        }

         function add_block_page(){
            var block_page = $('<div class="ecl_builder_block_page"></div>');

            $(block_page).appendTo('body');
        }

         function add_popup_box(){
             var pop_up = $('<div class="ecl_builder_outer">' +
                                '<div class="ecl_builder">' +
                                    '<div class="ecl_builder_header">' +
                                        '<h2>' + options.title + '</h2>' +
                                    '</div>' +
                                    '<div class="ecl_builder_content">' +
                                        '<select class="ecl_builder_select">' +
                                            '<option>Descendants</option>' +
                                            '<option>Children</option>' +
                                            '<option>Ancestors</option>' +
                                            '<option>Parents</option>' +
                                        '</select>' +
                                        '<input class="ecl_builder_select" type="checkbox"></input> Self' +
                                    '</div>' +
                                    '<div class="ecl_builder_footer">' +
                                        '<div class="ecl_builder_close btn ecl_builder_button">Cancel</div>' +
                                        '<div class="ecl_builder_ok btn ecl_builder_button">Accept</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>');
             $(pop_up).appendTo('.ecl_builder_block_page');
             
             $('.ecl_builder_ok').click(function(){
                $(this).parent().fadeOut().remove();
                $('.ecl_builder_trigger').attr('ecl', options.ecl);
                $('.ecl_builder_block_page').fadeOut().remove();                 
             });
             
             $('.ecl_builder_close').click(function(){
                $(this).parent().fadeOut().remove();
                $('.ecl_builder_block_page').fadeOut().remove();                 
             });
        }

        return this;
    };

})(jQuery);