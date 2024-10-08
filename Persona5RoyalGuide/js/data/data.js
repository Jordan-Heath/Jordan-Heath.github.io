const clickSoundSrc = 'assets/clicksound.wav';

const knifeSoundSrc = 'assets/knifesound.wav';

const parttimeJobGuide = `
<h1>Flower Store Guide</h1>
<table><tbody>
<tr><th>Flower Bouquet Request</th><th>Required Flowers</th></tr>
<tr><td>Flowers to Express Love</td><td> Scarlet Rose, Care-Nation, and Adoration Orchid</td></tr>
<tr><td>Red Flowers</td><td>Scarlet Rose, Care-Nation, and Gecko Orchid</td></tr>
<tr><td>Thank-You Flowers</td><td>The Sweetest of Peas, Rainbow Sage, and Gecko Orchid</td></tr>
<tr><td>Celebration Bouquet</td><td>Scarlet Rose, Care-Nation, and Venerable Chrysanthemum</td></tr>
<tr><td>Small Flowers with Soft Colors</td><td>Justice Jasmine, Enamored Orchid, and Fluorescent Freesia</td></tr>
<tr><td>Big Flowers with Little Scent</td><td>Gold Gerbera, Venerable Chrysanthemum, and Fluorescent Freesia</td></tr>
<tr><td>Bright, Pungent Flowers</td><td>Scarlet Rose, The Sweetest of Peas, and Stinking Olive</td></tr>
<tr><td>Flashy and Exciting Flowers</td><td>Scarlet Rose, Gold Gerbera, Gecko Orchid, and Venerable Chrysanthemum</td></tr>
<tr><td>Flowers for Friend\'s Childbirth</td><td>Rainbow Sage, Delightful Lily, and Gold Gerbera</td></tr>
</tbody>
</table>
<br/>
<br/>
<h1>Convenience Store Guide</h1>
<table><tbody>
<tr><th>Question</th><th>Answer</th></tr>
<tr><td>Where is the position of the cow milk barcode?</td><td>Next to the company logo.</td></tr>
<tr><td>Where is the position of the boy chance barcode?</td><td>Back of the company logo.</td></tr>
<tr><td>Where is the position of the Edo rice ball barcode?</td><td>Behind.</td></tr>
<tr><td>Where is the position of the BW Panda Pan barcode?</td><td>Near the tail.</td></tr>
<tr><td>Where is the position of the skeleton umbrella barcode?</td><td>Behind the handle.</td></tr>
<tr><td>Where is the position of the horse racing newspaper barcode?</td><td>At the side of the company logo at the back (by the comment section).</td></tr>
<tr><td>Where is the position of the black donut barcode?</td><td>Near the brown sugar description.</td></tr>
<tr><td>Where is the position of the zebra ramen barcode?</td><td>Side of the zebra scoop.</td></tr>
<tr><td>Where is the position of the tiger pattern pants barcode?</td><td>On the tag lining.</td></tr>
<tr><td>Where is the position of the Super Duper Vanilla Cup barcode?</td><td>Side of the character illustration.</td></tr>
<tr><td>Where is the position of the india ink barcode?</td><td>Right side when viewed from the front.</td></tr>
</tbody></table>
`;

const fusionCalculator = `
<embed src="https://p5rfusioncalculator.com/#/list">
`;

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
        <li><a href="https://aqiu384.github.io/p5r-walkthrough/ace-walkthrough">Walkthrough by aqiu384.github.io</a></li>

        <li><a href="https://samurai-gamers.com/persona-5/flower-shop-part-time-guide/">Flower Guide by samurai-gamers</a></li>
        <li><a href="https://samurai-gamers.com/persona-5/triple-seven-convenience-store-part-time-job-guide/">Convenience Store Guide by samurai-gamers</a></li>
        <li><a href="https://aqiu384.github.io/p5r-walkthrough/confidants">Confidant Guide by aqiu384.github.io</a></li>

        <li><a href="https://joyceychen.com/persona5-negotiation/royal">Negotiation Guide by joyceychen.com</a></li>
        <li><a href="https://p5rfusioncalculator.com/#/list">Fusion Calculator by p5rfusioncalculator.com</a></li>
    </ul>

    <h2>Assets</h2>
    <ul>
        <li><a href="https://www.reddit.com/r/Persona5/comments/kqickc/persona_5_menu_font_prototype/">Title Font</a></li>
        <li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2948225096&insideModal=0">Background source</a></li>
        <li><a href="https://www.sounds-resource.com/playstation_3/persona5/sound/30366/">Knife Sound source</a></li>
        <li><a href="https://www.spriters-resource.com/playstation_3/persona5/sheet/92802/">Knife Image source</a></li>
        <li><a href="https://tcrf.net/Persona_5_Royal/Unused_Graphics">Web Icon</a></li>
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