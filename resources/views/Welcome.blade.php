<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sudoku</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/sudoku.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
