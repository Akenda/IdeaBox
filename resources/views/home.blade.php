@extends('layout')

@section('content')

    <div class="column is-half is-offset-one-quarter">
        <h1 class="title is-1">Boîte à idée</h1>
        <div class="tile is-parent">
            <div class="tile is-child notification is-info">
                <p class="subtitle is-citation">"Nos idées se succèdent les unes aux autres, et se chassent mutuellement, de même que les jours composant notre vie"</p>
                <div class="content">
                    <button class="button is-rounded is-small is-primary recognition-start" id="btn">Proposer une nouvelle idée <i class="twa twa-bulb"></i></button>
                    <button class="button is-rounded is-small is-danger recognition-stop" id="btn_stop"> Stopper&nbsp;<i class="fa fa-stop-circle"></i></button>
                    <p class="idea-result" id="results"></p>
                </div>
            </div>
        </div>
    </div>

@endsection