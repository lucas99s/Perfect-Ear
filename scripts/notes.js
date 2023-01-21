export let majorNote = []
export let minorNote = []

const majorMemory = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const minorMemory = ['Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm']

transpose()
function transpose() {
    console.log('transpose')
    let transp = Math.ceil(Math.random() * 12)

    console.log(transp)
    
    for(let i = 0; i < 12; i++){
        if((i + transp) > 12){
            majorNote[i] = majorMemory[i + transp - 12 - 1]
            minorNote[i] = minorMemory[i + transp - 12 - 1]
            
        }
        else{
            majorNote[i] = majorMemory[i + transp - 1]
            minorNote[i] = minorMemory[i + transp - 1]
            
        }
    }
}
