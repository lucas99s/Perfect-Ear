export let majorNote = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
export let minorNote = ['Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm']

transpose()
function transpose() {
    console.log('transpose')
    let transp = Math.floor(Math.random() * 12)
    // console.log(transp)
    for(let i = 0; i < 12; i++){
        majorNote[i] = 'C'
    }
}
