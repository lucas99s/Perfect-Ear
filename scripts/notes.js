export let exportChords = []

export const chords = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

transposeNotes()
function transposeNotes() {
    console.log('transpose')
    transpose = Math.ceil(Math.random() * 7)

    console.log(transpose)
    
    for(let i = 0; i < 12; i++){
        if((i + transpose) > 7){
            chords[i] = exportChords[i + transpose - 12 - 1]
        }
        else{
            chords[i] = exportChords[i + transpose - 1]
        }
    }
}
