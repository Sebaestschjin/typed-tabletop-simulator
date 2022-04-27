if (MusicPlayer.loaded) {
    MusicPlayer.setPlaylist([{ url: "foo", title: "Bar" }]);
    MusicPlayer.playlist_index = 0;
    MusicPlayer.play();
    MusicPlayer.repeat_track = true;
    MusicPlayer.skipBack();
}
