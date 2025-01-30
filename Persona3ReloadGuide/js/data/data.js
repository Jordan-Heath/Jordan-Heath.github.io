const clickSoundSrc = 'assets/selectSound.mp3';

const selectDateSoundSrc = 'assets/clickSound.mp3';

const notepadData = `
    <textarea 
        id="notepad" 
        placeholder="Notes recorded here will be saved...">
    </textarea>
    <textarea 
        id="highlightedWords" 
        placeholder="Words you'd like highlighted in the walkthrough, separated by enters...\nFool\nMagician\netc..">
    </textarea>
`;

const credits = `
    <h1>Guides</h1>
    <ul>
        <li><a href="https://aqiu384.github.io/megaten-database/p3r/ave-walkthrough">Walkthrough by aqiu384.github.io</a></li>
    </ul>

    <h2>Assets</h2>
    <ul>
        <li><a href="https://megatenwiki.com/wiki/Persona_3_Reload">Web Icon</a></li>
        <li><a href="https://www.youtube.com/watch?v=QjDwTf-i2TQ">Select Sounds</a></li>
    </ul>
`;

const controls = `
    <h1>Controls</h1>
    <div>
        <label>
            <input 
                type="checkbox" 
                id="numberHotkeysCheckbox" 
                onchange="">
            Press Numpad 1-9 to open sub-guides
        </label>
        <br>
        <label>
            <input 
                type="checkbox" 
                id="navigationHotkeysCheckbox">
            Press Numpad +/- to navigate dates
        </label>
        <br>
        <label>
            <input 
                type="checkbox" 
                id="escapeHotkeyCheckbox">
            Press Esc to close sub-guides
        </label>
    </div>
`