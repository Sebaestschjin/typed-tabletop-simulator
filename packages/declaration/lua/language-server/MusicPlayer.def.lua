---@meta

---
--- `MusicPlayer` is a static global class which allows you to control the in-game music playback i.e. the in-game "Music" menu.
---
---@class tts__MusicPlayer
---@field loaded boolean If all players loaded the current audioclip. Read only.
---@field player_status string The current state of the music player. Read only.<br>Options: "Stop", "Play", "Loading", "Ready".
---@field playlist_index integer Current index of the playlist. -1 if no playlist audioclip is playing.
---@field repeat_track boolean If the current audioclip should be repeated.
---@field shuffle boolean If the playlist should play shuffled.
MusicPlayer = {}

-- @TODO: hide/deprioritize in autocomplete
-- ---Current index of the playlist. -1 if no playlist audioclip is playing.
-- ---@deprecated Use playlist_index.
-- ---@type string
-- MusicPlayer.playlistIndex = nil

---
--- A table describing an audioclip.
---
---@class tts__MusicPlayer_AudioClip
---@field url string The URL of the audioclip.
---@field title string The title of the audioclip.

---
--- Gets the currently loaded audioclip.
---
---@return tts__MusicPlayer_AudioClip -- Table describing the current audioclip.
---
--- **Example**
---
--- Print the title of the current audioclip.
--- ```
--- local clip = MusicPlayer.getCurrentAudioclip()
--- print("Currently playing '" .. clip.title .. "'")
--- ```
function MusicPlayer.getCurrentAudioclip() end

---
--- Gets the current playlist.
---
---@return tts__MusicPlayer_AudioClip[] -- Playlist table, consisting of zero or more audioclip sub-tables.
---
--- **Example**
---
--- Print the track number and title of each audioclip making up the playlist.
--- ```
--- local playlist = MusicPlayer.getPlaylist()
--- for i, clip in ipairs(playlist) do
---     print(i .. " - " .. clip.title)
--- end
--- ```
function MusicPlayer.getPlaylist() end

---
--- Pause the current audioclip.
---
--- Returns `true` if the music player is/was paused, otherwise `false`.
---
---@return boolean
---
--- **Example**
---
--- Pause the current track.
--- ```
--- MusicPlayer.pause()
--- ```
function MusicPlayer.pause() end

---
--- Plays the current audioclip.
---
--- Returns `true` if the music player is/was playing, otherwise `false`.
---
---@return boolean
---
--- **Example**
---
--- Play the current track.
--- ```
--- MusicPlayer.play()
--- ```
function MusicPlayer.play() end

---
--- Sets/loads the specified audioclip.
---
---@param parameters tts__MusicPlayer_AudioClip A table describing an audioclip.
---
--- **Example**
---
--- Set the current track.
--- ```
--- MusicPlayer.setCurrentAudioclip({
---     url = "https://domain.example/path/to/clip.mp3",
---     title = "Example"
--- })
--- ```
function MusicPlayer.setCurrentAudioclip(parameters) end

---
--- Sets the current playlist.
---
---@param parameters tts__MusicPlayer_AudioClip[] A table containing zero or more audioclip sub-tables.
---
--- **Example**
---
--- Set the current playlist to include three pieces of music.
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
function MusicPlayer.setPlaylist(parameters) end

---
--- Skips to the beginning of the audioclip or if the play time is less than 3 seconds to the previous audioclip in playlist if possible.
---
--- Returns `true` if skip was successful, otherwise returns `false`.
---
---@return boolean
---
--- **Example**
---
--- Skip backwards to either the beginning of the audioclip, or the prior audioclip in the playlist.
--- ```
--- MusicPlayer.skipBack()
--- ```
function MusicPlayer.skipBack() end

---
--- Skips to the next audioclip in the current playlist. If the current audioclip is the last of the playlist, loops around to the first audioclip in the playlist.
---
--- Returns `true` if skip was successful, otherwise returns `false`.
---
---@return boolean
---
--- **Example**
---
--- Skip to the next audioclip.
--- ```
--- MusicPlayer.skipForward()
--- ```
function MusicPlayer.skipForward() end
