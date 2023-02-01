import { saturn, saturnTone } from '../musics/saturn-sleeping-at-last.js'
import { kingsAndQueens, kingsAndQueensTone } from '../musics/kings-and-queens.js'

let Musics = [
    [ 'Saturn' , 'Sleeping at last', saturn, saturnTone ],
    [ 'Kings And Queens' , 'Thirty Seconds To Mars', kingsAndQueens, kingsAndQueensTone ]
]

export let songName
export let band
export let music
export let tone

export function randomSong() {
    // let index = 1
    let index = Math.floor(Math.random() * Musics.length)
    songName = Musics[index][0]
    band = Musics[index][1]
    music = Musics[index][2]
    tone = Musics[index][3]
}