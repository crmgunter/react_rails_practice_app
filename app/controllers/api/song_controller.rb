class Api::SongController < ApplicationController
    def index
        @artist = Artist.find(params[:artist_id])
        @songs = @artist.songs.order(id: :desc)
        render json: @songs
    end

    def create
        @artist = Artist.find(params[:artist_id])
        @song = @artist.songs.create!(song_params)
        render json: {
            song: @song
        }
    end

    def show
        @song = Song.find(params[:id])
        render json: @song
    end

    def destroy
        @song = Song.find(params[:id])
        @song.destroy
    end

    def update
        @song = Song.find(params[:id])
        @song.update!(song_params)

        render json: {
            song: @song
        }
    end

    private

    def song_params
        params.require(:song).permit(:title, :album, :preview_url, :artist_id)
    end

end