import { music, randomSong, tone, band, songName } from './randomSong.js'
import { className, getId } from '../scripts/library.js'
import { transpose } from './notes.js'

function song() {
    randomSong()
    getId('song-name').innerHTML = songName
    getId('band').innerHTML = band
    getId('song').innerHTML = music
    getId('tone').innerHTML = 'Tom: ' + tone
    console.log(transpose)
    if(transpose != 1){
        getId('container-video').innerHTML += `<div class="tips">Para tirar a música no tom de ${tone} use:<br>Capotraste na <b>${(transpose - 13) * -1}ª</b> casa do violão <br>Transpose <b>+${(transpose - 13) * -1}</b> ou <b>-${transpose - 1}</b> no teclado</div></p>`
    } else {
        getId('container-video').innerHTML += `<div class="tips">Tire no tom original</div>`
    }
}

song()