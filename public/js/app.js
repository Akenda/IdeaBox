(function($){
    var socket = io('http://localhost:3000');

    var $btn_start = $('#btn');
    var $btn_stop = $('#btn_stop');
    var words = null;
    var sentence = null;

    if('webkitSpeechRecognition' in window){
        var recognition = new webkitSpeechRecognition();
        recognition.lang = 'fr-FR';
        recognition.continuous = false;
        recognition.interimResults = true;

        $btn_start.click(function(e){
            e.preventDefault();
            $btn_start.addClass('is-loading')
            $btn_stop.fadeIn(150);
            recognition.start();
        });

        recognition.onresult = function(e){
            for(var i= e.resultIndex; i < e.results.length; i++){
                var transcript = e.results[i][0].transcript;
                if(e.results[i].isFinal){
                    sentence = transcript;
                    $('#results').html(transcript + " <br/><button class='button is-rounded is-small is-link' id='emit_idea'>Soumettre cette idée &nbsp;<i class='fa fa-paper-plane'></i></button>");
                    recognition.stop();
                    $btn_start.removeClass('is-loading');
                    $btn_stop.fadeOut();
                    words = transcript.split(' ');

                    if(words[0] == ""){
                        console.log('jarvis activée');
                    }
                    
                    return true;
                }
            }
        }

        recognition.speechend = function(e){
            $btn_start.removeClass('is-loading');
            $btn_stop.fadeOut();        
        }
    }

    $btn_stop.on('click', function(e){
        recognition.stop();
        $btn_start.removeClass('is-loading');
        $btn_stop.fadeOut(150)
    })

    $(document).on('click', '#emit_idea', function(e){
        socket.emit('insert_new_idea', {sentence: sentence})
        $('#results').text(' ');
    })

})(jQuery) 