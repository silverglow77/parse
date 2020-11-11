@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>sas</h1>
        <br>
        <form method="POST" action="{{ route('starttest') }}">
            @csrf
            <button class="btn btn-submit" type="submit" >START</button>
        </form>
    </div>
@endsection