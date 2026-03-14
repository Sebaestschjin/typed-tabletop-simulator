---@meta

---
--- `MusicPlayer` is a static global class which allows you to control the in-game music playback i.e. the in-game "Music" menu.
---
---@class tts.MusicPlayer
---@field loaded boolean If all players loaded the current audioclip. Read only.
---@field player_status string The current state of the music player. Read only.<br>Options: "Stop", "Play", "Loading", "Ready".
---@field playlist_index integer Current index of the playlist. -1 if no playlist audioclip is playing.
---@field repeat_track boolean If the current audioclip should be repeated.
---@field shuffle boolean If the playlist should play shuffled.
MusicPlayer = {}

---
--- A table describing an audioclip.
---
---@class tts.MusicPlayer.AudioClip
---@field url string The URL of the audioclip.
---@field title string The title of the audioclip.

---
--- Gets the currently loaded audioclip.
---
--- **Example**
---
--- Print the title of the current audioclip.
---
--- ```
--- local clip = MusicPlayer.getCurrentAudioclip()
--- print("Currently playing '" .. clip.title .. "'")
--- ```
---
---@return tts.MusicPlayer.AudioClip # Table describing the current audioclip.
function MusicPlayer.getCurrentAudioclip() end

---
--- Gets the current playlist.
---
--- **Example**
---
--- Print the track number and title of each audioclip making up the playlist.
---
--- ```
--- local playlist = MusicPlayer.getPlaylist()
--- for i, clip in ipairs(playlist) do
---     print(i .. " - " .. clip.title)
--- end
--- ```
---
---@return tts.MusicPlayer.AudioClip[] # Playlist table, consisting of zero or more audioclip sub-tables.
function MusicPlayer.getPlaylist() end

---
--- Pause the current audioclip.
---
--- **Example**
---
--- Pause the current track.
---
--- ```
--- MusicPlayer.pause()
--- ```
---
---@return boolean # `true` if the music player is/was paused, otherwise `false`.
function MusicPlayer.pause() end

---
--- Plays the current audioclip.
---
--- **Example**
---
--- Play the current track.
---
--- ```
--- MusicPlayer.play()
--- ```
---
---@return boolean # `true` if the music player is/was playing, otherwise `false`.
function MusicPlayer.play() end

---
--- Sets/loads the specified audioclip.
---
--- **Example**
---
--- Set the current track.
---
--- ```
--- MusicPlayer.setCurrentAudioclip({
---     url = "https://domain.example/path/to/clip.mp3",
---     title = "Example"
--- })
--- ```
---
---@param parameters tts.MusicPlayer.AudioClip A table describing an audioclip.
function MusicPlayer.setCurrentAudioclip(parameters) end

---
--- Sets the current playlist.
---
--- **Example**
---
--- Set the current playlist to include three pieces of music.
---
--- ```
--- MusicPlayer.setCurrentAudioclip({
---     {
---         url = "https://domain.example/path/to/clip.mp3",
---         title = "Example"
---     },
---     {
---         url = "https://domain.example/path/to/clip2.mp3",
---         title = "Example #2"
---     },
---     {
---         url = "https://domain.example/path/to/clip3.mp3",
---         title = "Example #3"
---     }
--- })
--- ```
---
---@param parameters tts.MusicPlayer.AudioClip[] A table containing zero or more audioclip sub-tables.
function MusicPlayer.setPlaylist(parameters) end

---
--- Skips to the beginning of the audioclip or if the play time is less than 3 seconds to the previous audioclip in playlist if possible.
---
--- **Example**
---
--- Skip backwards to either the beginning of the audioclip, or the prior audioclip in the playlist.
---
--- ```
--- MusicPlayer.skipBack()
--- ```
---
---@return boolean # `true` if skip was successful, otherwise returns `false`.
function MusicPlayer.skipBack() end

---
--- Skips to the next audioclip in the current playlist. If the current audioclip is the last of the playlist, loops around to the first audioclip in the playlist.
---
--- **Example**
---
--- Skip to the next audioclip.
---
--- ```
--- MusicPlayer.skipForward()
--- ```
---@return boolean # `true` if skip was successful, otherwise returns `false`.
function MusicPlayer.skipForward() end
