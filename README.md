# README


Things you may want to cover:

### Ruby version

- Ruby 3.2.2

### System dependencies

- Node v16.17.1
- Yarn 1.22.19
- ImageMagick 7.1.0-57
- Rvm 1.29.12
- Redis server v=7.0.10

### Configuratoin

1. Set lvh.me host if not already added

- Open host `sudo vim /etc/hosts`
- Add `lvh.me` and `api.lvh.me` similar below

127.0.0.1       localhost lvh.me api.lvh.me
255.255.255.255 broadcasthost
::1             localhost lvh.me

- Save and exit

### Running the app

- You might not need to run "Redis", I just added the version just for reference
- Run `rails db:setup` and `db:migrate`
- Run `bin/div`
- Visit `http://lvh.me:3000` in the browser
- You can test the api `http://api.lvh.me:3000/v1/books/:id` with Postman Or similar
- This is the master key `faa2ce220d84ed68a312849cb8b6d24d` for the app. Kindly add it in `config/master.key`

### Notes

The application is configured with React and Rails. Frontend is hosted by Rails
in this setup with different subdomain constraints. Adding the `lvh.me` and `api.lvh.me` is needed
so routes can properly distinguish requests. ImageMagick is needed also since I used
ActiveStorage for seeding books with image.

To display all the books ISBN_13's and Converted ISBN_10's:
- run `Book.all.map {|b| [b.isbn_13, b.to_isbn_10]}` in the console.

Many thanks for the oppurtunity...

Happy coding :)
