import {saturnSleepingAtLast} from '../musics/saturn-sleeping-at-last.js'

let Musics = [
    ['Saturn', saturnSleepingAtLast],
    ['Other', 'ranmd']
]

let music

randomSong()
export function randomSong() {
    let index = Math.floor(Math.random() * 2)
    console.log(index)
    music = Musics[index][1]
}

export let song = music