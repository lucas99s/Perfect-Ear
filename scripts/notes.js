export let majorNote = []
export let minorNote = []
export let transpose

const majorMemory = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const minorMemory = ['Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm']


transposeNotes()
function transposeNotes() {
    console.log('transpose')
    transpose = Math.ceil(Math.random() * 12)

    console.log(transpose)
    
    for(let i = 0; i < 12; i++){
        if((i + transpose) > 12){
            majorNote[i] = majorMemory[i + transpose - 12 - 1]
            minorNote[i] = minorMemory[i + transpose - 12 - 1]
            
        }
        else{
            majorNote[i] = majorMemory[i + transpose - 1]
            minorNote[i] = minorMemory[i + transpose - 1]
            
        }
    }
}
