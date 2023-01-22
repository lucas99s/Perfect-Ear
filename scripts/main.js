import { music , randomSong, tone, band, songName } from './randomSong.js'
import {getId} from '../scripts/library.js'

function song() {
    randomSong()
    getId('song-name').innerHTML = songName
    getId('band').innerHTML = band
    getId('song').innerHTML = music
    getId('tone').innerHTML = 'Tom: ' + tone
}

song()