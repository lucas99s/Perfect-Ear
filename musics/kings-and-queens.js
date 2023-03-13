import { chords } from '../scripts/notes.js';
import { getId } from '../scripts/library.js';

let musicNotes = [`${chords[1]}#`, `${chords[2]}m`, `${chords[4]}#`, `${chords[0]}#`, `${chords[3]}m`, `${chords[5]}`];

/*
    0 = D#
    1 = Em
    2 = G#
    3 = C#
    4 = Fm
*/

export let kingsAndQueensTone = musicNotes[5]
export let kingsAndQueens =
    `
    <div class="container-stanza">
        <h3 >Introdução:</h3>
        <pre> ${musicNotes[0]}    ${musicNotes[1]}    ${musicNotes[2]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>

        <hr>
        <h3>Início:</h3>

        <pre>                ${musicNotes[0]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Into the night</div>

        <pre>                ${musicNotes[3]}            ${musicNotes[2]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Desperate and broken</div>

        <pre>                           ${musicNotes[0]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">The sound of a fight</div>

        <pre>            ${musicNotes[3]}                ${musicNotes[2]}  </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Father has spoken</div>   

        <hr>
        <h3>Passagem:</h3>

        <pre>( ${musicNotes[0]}   ${musicNotes[4]}   ${musicNotes[2]} ) (2x)</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>

        <hr>

        <pre>                      ${musicNotes[0]}            ${musicNotes[1]}              ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">We were the Kings and Queens of promise</div>

        <pre>                      ${musicNotes[0]}            ${musicNotes[4]}         ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">We were the victims of ourselves</div>

        <pre>              ${musicNotes[0]}            ${musicNotes[1]}          ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Maybe the Children of a Lesser God</div>

        <pre>             ${musicNotes[0]}     ${musicNotes[1]}          ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Between Heaven and Hell</div>

        <pre>             ${musicNotes[0]}        ${musicNotes[3]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Heaven and Hell</div>

        <pre></pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza"></div>

        <hr>

        <pre>               ${musicNotes[0]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Into your lives</div>

        <pre>              ${musicNotes[3]}      ${musicNotes[2]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Hopeless and Taken</div>

        <pre>                            ${musicNotes[0]}  </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">We stole our new lives</div>

        <pre>                            ${musicNotes[3]}              ${musicNotes[2]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Through blood and name</div>

        <pre>             ${musicNotes[0]}           ${musicNotes[3]}          ${musicNotes[2]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">In defense of our dreams</div>

        <pre>             ${musicNotes[0]}           ${musicNotes[3]}          ${musicNotes[2]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">In defense of our dreams</div>

        <hr>

        <pre>        ${musicNotes[0]}       ${musicNotes[3]}      ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">The age of man is over</div>
        
        <pre>     ${musicNotes[0]}           ${musicNotes[3]}         ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">A darkness comes at dawn</div>
        
        <pre>             ${musicNotes[0]}                 ${musicNotes[3]}           ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">These lessons that we've learned here</div>
        
        <pre>${musicNotes[0]}                 ${musicNotes[3]}           ${musicNotes[2]}</pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">Have only just begun</div>
        
        <hr>
        <h3>Final:</h3>
        
        <pre>                 ${musicNotes[0]}       ${musicNotes[3]}      ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">We are the Kings</div>

        <pre>                 ${musicNotes[0]}       ${musicNotes[3]}      ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">We are the Kings</div>

        <pre>                 ${musicNotes[0]}       ${musicNotes[3]}      ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">We are the Kings</div>

        <pre>                 ${musicNotes[0]}       ${musicNotes[3]}      ${musicNotes[2]} </pre>
        <div class="input-container"><input type="text" value="                                                                                                            "></div>
        <div class="stanza">We are the Kings</div>

    </div>
    <div id="container-video">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/hTMrlHHVx8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    </div>
    `

