const mix = require('laravel-mix')
mix.config.publicPath = 'build'


mix.js('./src/index.js', './build/app.js')
mix.sass('./src/scss/app.scss', './build/app.css')
mix.copy('./src/index.html', './build/index.html')
mix.copyDirectory('./storage', './build/storage')
