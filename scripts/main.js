import { music , randomSong, tone, band, songName } from './randomSong.js'
import {className, getId} from '../scripts/library.js'
import { transpose } from './notes.js'

function song() {
    randomSong()
    getId('song-name').innerHTML = songName
    getId('band').innerHTML = band
    getId('song').innerHTML = music
    getId('tone').innerHTML = 'Tom: ' + tone
    getId('container-video').innerHTML += `<div class="tips">Capotraste na <b>${(transpose - 13) * -1}ª</b> casa do violão <br>Transpose <b>+${(transpose - 13) * -1}</b> ou <b>-${transpose - 1}</b> no teclado</div>`
}

song()