import {music, randomSong} from './randomSong.js'
import {getId} from '../scripts/library.js'

getId('randomSongButton').addEventListener('click', () => {
    randomSong()
    getId('song').innerHTML = music
})