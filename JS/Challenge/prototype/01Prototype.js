function Playlist() {
  this.songs = [];
}

Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
};

// Define addSong method on Playlist's prototype
