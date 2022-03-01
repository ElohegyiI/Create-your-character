
function loadEvent() {

    const rootElement = document.getElementById('root');

    const sect = document.createElement('section');
        document.getElementById('root').appendChild(sect)

    const divisionChar = document.createElement('div')
        divisionChar.className = 'charactername'
        document.getElementById('root').appendChild(sect).appendChild(divisionChar);

    const divisionClass = document.createElement('div')
        divisionClass.className = 'classes'
        document.getElementById('root').appendChild(sect).appendChild(divisionClass);

    const divisionRaces = document.createElement('div')
        divisionRaces.className = 'races'
        document.getElementById('root').appendChild(sect).appendChild(divisionRaces);

    const divisionGender = document.createElement('div')
        divisionGender.className = 'gender'
        document.getElementById('root').appendChild(sect).appendChild(divisionGender);

    const characterSheet = document.createElement('div')
        characterSheet.className = 'charactersheet'
        document.getElementById('root').appendChild(sect).appendChild(characterSheet)


        divisionChar.insertAdjacentHTML("beforeend", ` <form>
            <label for="charname">Character name:</label><br>
            <input type="text" id="charname" name="charname" placeholder="Charname...">
            </form>`
            );

        divisionClass.insertAdjacentHTML("beforeend", `<label                   for="class">Classes:</label>
            <select name="class" id="class">
                     <optgroup>
                         <option value="Bard">Bard</option>
                         <option value="Rogue">Rogue</option>
                         <option value="Sorcerer">Sorcerer</option>
                     </optgroup>
            </select>`
            );
    
        divisionRaces.insertAdjacentHTML("beforeend", `<label for="race">Races:</  label>
            <select name="race" id="race">   
 		    	<optgroup>
 		    		<option value="Bugbear">Bugbear</option>
 		    		<option value="Deep Gnome">Deep Gnome</option>
                    <option value="Dragon Born">Dragon Born (Gem)</option>
 		    	</optgroup>
 		    </select>`
             );

        divisionGender.insertAdjacentHTML("beforeend", `<label  for="gender">Gender:</label>
            <select name="gender" id="gender">   
                 <optgroup>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                 </optgroup>
             </select>`
             );




}
window.addEventListener("load", loadEvent)