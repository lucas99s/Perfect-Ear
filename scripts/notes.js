export let majorNote = []
export let minorNote = []
export let seventhNote = []
export let seventhMinorNote = []
export let transpose

const majorMemory = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const minorMemory = ['Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm']
const seventhMemory = ['C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7' ]
const seventhMinorMemory = ['Cm7', 'C#m7', 'Dm7', 'D#m7', 'Em7', 'Fm7', 'F#m7', 'Gm7', 'G#m7', 'Am7', 'A#m7', 'Bm7' ]

/**
 * C = 0
 * C# = 1
 * D = 2
 * D# = 3
 * E = 4
 * F = 5
 * F# = 6
 * G = 7
 * G# = 8
 * A = 9
 * A# = 10
 * B = 12
 */

transposeNotes()
function transposeNotes() {
    console.log('transpose')
    transpose = Math.ceil(Math.random() * 12)

    console.log(transpose)
    
    for(let i = 0; i < 12; i++){
        if((i + transpose) > 12){
            majorNote[i] = majorMemory[i + transpose - 12 - 1]
            minorNote[i] = minorMemory[i + transpose - 12 - 1]
            seventhNote[i] = seventhMemory[i + transpose - 12 - 1]
            seventhMinorNote[i] = seventhMinorMemory[i + transpose - 12 - 1]
        }
        else{
            majorNote[i] = majorMemory[i + transpose - 1]
            minorNote[i] = minorMemory[i + transpose - 1]
            seventhNote[i] = seventhMemory[i + transpose - 1]
            seventhMinorNote[i] = seventhMinorMemory[i + transpose - 1]
        }
    }
}
