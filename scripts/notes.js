export let chords = []
export let transpose

/*
    C = 0;
    D = 1;
    E = 2;
    F = 3;
    G = 4;
    A = 5;
    B = 6;
*/

export const chordsMemory = ['C', 'D', 'E', 'F', 'G', 'A', 'B']


transposeNotes()
function transposeNotes() {
    console.log('transpose')
    // transpose = 1
    transpose = Math.ceil(Math.random() * 7)

    console.log(transpose)
    
    for(let i = 0; i < 7; i++){
        if((i + transpose) > 7){
            chords[i] = chordsMemory[i + transpose - 7 - 1]
        }
        else{
            chords[i] = chordsMemory[i + transpose - 1]
        }
    }
    console.log(chords)
}
