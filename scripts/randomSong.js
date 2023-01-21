import { saturnSleepingAtLast } from '../musics/saturn-sleeping-at-last.js'

let Musics = [
    ['Saturn', saturnSleepingAtLast],
    ['Other', 'ranmd']
]

export let music

export function randomSong() {
    let index = Math.floor(Math.random() * Musics.length)
    music = Musics[index][1]
}