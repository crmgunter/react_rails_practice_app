# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie_id: movies.id)
Artist.destroy_all()
boy_pablo = Artist.create({ name: "Boy Pablo", photo_url: 'https://i1.wp.com/atwoodmagazine.com/wp-content/uploads/2018/03/28954096_1405850902852427_4812783614894350103_o.jpg?resize=1050%2C693', nationality: 'Norway'})
Song.create({title: 'Sick Feeling', album: 'Poy Bablo', preview_url: 'https://i1.wp.com/atwoodmagazine.com/wp-content/uploads/2018/03/28954096_1405850902852427_4812783614894350103_o.jpg?resize=1050%2C693', artist_id: boy_pablo.id})