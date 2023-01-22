import { saturn, saturnTone } from '../musics/saturn-sleeping-at-last.js'

let Musics = [
    [ 'Saturn' , saturn, saturnTone ]
]

export let music
export let tone

export function randomSong() {
    let index = Math.floor(Math.random() * Musics.length)
    music = Musics[index][1]
    tone = Musics[index][2]
}