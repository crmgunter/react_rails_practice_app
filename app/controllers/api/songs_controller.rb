class Api::SongsController < ApplicationController
    def index
        @artist = Artist.find(params[:artist_id])
        @songs = @artist.songs.order(id: :desc)
        render json: @songs
    end
end
