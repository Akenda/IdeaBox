(function($){

    var $btn = $('#btn');
    var words = null;

    if('webkitSpeechRecognition' in window){
        var recognition = new webkitSpeechRecognition();
        recognition.lang = 'fr-FR';
        recognition.continuous = false;
        recognition.interimResults = true;

        $btn.click(function(e){
            e.preventDefault();
            $btn.addClass('is-loading');
            recognition.start();
        });

        recognition.onresult = function(e){
            for(var i= e.resultIndex; i < e.results.length; i++){
                var transcript = e.results[i][0].transcript;
                if(e.results[i].isFinal){
                    $('#results').html(transcript + " <button class='button is-link'>Soumettre&nbsp;<i class='fa fa-paper-plane'></i></button>");
                    recognition.stop();
                    $btn.removeClass('is-loading');
                    words = transcript.split(' ');

                    if(words[0] == ""){
                        console.log('jarvis activée');
                    }
                    
                    return true;
                }
            }
        }
    }

    var socket = io('http://localhost:3000');

    

})(jQuery) 