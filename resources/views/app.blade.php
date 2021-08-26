<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
 <head>
    <meta charset="utf-8">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <title>映画クチコミサイト|MusicTheater</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- Scripts -->
    <script src="{{ mix('/js/app.js') }}" defer></script>
  </body>
</html>