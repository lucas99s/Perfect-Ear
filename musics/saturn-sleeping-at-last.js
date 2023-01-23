import { majorNote } from '../scripts/notes.js';
import { minorNote } from '../scripts/notes.js';
import { getId } from '../scripts/library.js';

let musicNotes = [majorNote[3], majorNote[5], majorNote[10], minorNote[7]];

console.log(majorNote)

/*
    0 = D#
    1 = F
    2 = A#
    3 = Gm
*/

export let saturnTone = musicNotes[2]
export let saturn =
    `
    <div class="container-stanza">
        <h3 >Introdução:</h3>
        <pre>    ${musicNotes[3]}                    ${musicNotes[0]}               ${musicNotes[2]}                       ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>

        <hr>
        <h3>Início:</h3>

        <pre>    ${musicNotes[3]}                    ${musicNotes[0]}               ${musicNotes[2]}                       ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">You taught me the courage of stars before you left</div>

        <pre>       ${musicNotes[3]}              ${musicNotes[0]}             ${musicNotes[2]}                       ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">How light carries on endlessly, even after death</div>

        <pre>        ${musicNotes[3]}                ${musicNotes[0]}                  ${musicNotes[2]}              ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">With shortness of breath, you explained the infinite</div>

        <pre>        ${musicNotes[3]}             ${musicNotes[0]}        ${musicNotes[2]}              ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">How rare and beautiful it is to even exist</div>

        <hr>
        <h3 >Refrão:</h3>

        <pre>                            ${musicNotes[3]}                               ${musicNotes[0]}     </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">I couldn't help but ask for you to say it all again </div>
        
        <pre>                            ${musicNotes[2]}                                              ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">I tried to write it down, but I could never find a pen</div>
        
        <pre>                                  ${musicNotes[2]}                                     ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">I'd give anything to hear you say it one more time</div>
        
        <pre>                                      ${musicNotes[2]}                                            ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">That the universe was made just to be seen by my eyes</div>

        <hr>
        <h3>Final:</h3>

        <pre>        ${musicNotes[3]}                 ${musicNotes[0]}             ${musicNotes[2]}               ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">With shortness of breath, I'll explain the infinite</div>

        <pre>         ${musicNotes[3]}             ${musicNotes[0]}                  ${musicNotes[2]}              ${musicNotes[1]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">How rare and beautiful it truly is that we exist.</div>

    </div>
    <div id="container-video">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dzNvk80XY9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `

getId('song').innerHTML = saturn