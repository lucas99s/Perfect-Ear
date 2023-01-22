import { music , randomSong, tone } from './randomSong.js'
import {getId} from '../scripts/library.js'

function song() {
    randomSong()
    getId('song').innerHTML = music
    getId('tone').innerHTML = 'Tom: ' + tone
}

song()