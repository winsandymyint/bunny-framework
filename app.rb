# app.rb
require 'sinatra'

class BunnyFramework < Sinatra::Base
  get '/' do
    send_file 'public/index.html'
  end

  get '/getting-start' do
    send_file 'public/getting_start.html'
  end

  get '/documentation' do
    send_file 'public/documentation.html'
  end

  get '/generator' do
    send_file 'public/generator.html'
  end

  get '/contact-us' do
    send_file 'public/contact_us.html'
  end
end