
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

    const charSheet = document.createElement('div')
        charSheet.className = 'charactersheet'
        document.getElementById('root').appendChild(sect).appendChild(charSheet)
    

        
        divisionChar.insertAdjacentHTML("beforeend", ` 
        <form>
        <label for="charname">Character name:</label><br>
        <input type="text" id="charname" name="charname" maxlength="8"</input>
        </form>`
        );


        divisionClass.insertAdjacentHTML("beforeend", `
        <form>
        <label for="class">Classes:</label>
            <select name="class" id="class">
                <optgroup label='Pick a class'>                    
                    <option value="Bard">Bard</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                </optgroup>
                <output for="class"></output>
            </select>
        </form>
        <div class='result'></div>`
        );
        

        divisionRaces.insertAdjacentHTML("beforeend", `<label for="race">Races:</  label>
        <select name="race" id="race">   
            <optgroup label='Pick a race'>
                <option value="Bugbear">Bugbear</option>
                <option value="Deep Gnome">Deep Gnome</option>
                <option value="Dragon Born">Dragon Born (Gem)</option>
            </optgroup>
        </select>
        `
            
        );
        
        divisionGender.insertAdjacentHTML("beforeend", `<label          for="gender">Gender:</label>
            <select name="gender" id="gender">   
                <optgroup label='Pick a gender'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </optgroup>
            </select>
            `
        );
        
   

    charSheet.insertAdjacentHTML("beforeend", `
        <h2>Your character:</h2>
        <p id="crname"></p><br>
        <h2>Class:</h2>
        <div>
        <img class='avatar' id='result'</img>
        </div>
        <h2>Race:</h2>
        <div>
        <img class='avatar-race' id='resultrace'>
        </div>
        <h2>Gender:</h2>
        <div>
        <img class='avatar-gender' id='resultgender'>
        </div>`     
        );
    
           
    const input = document.querySelector('input');
        
    const log = document.getElementById('crname');     

    const updateValue  = (event) => {
        log.textContent = event.target.value;
         console.log
    }    
    input.addEventListener('input', updateValue);


  
    const selectElement = document.querySelector('#class');
        selectElement.addEventListener('change', (event) => {
      
        const result = document.getElementById('result');
        
           // result.textContent = `${event.target.value}`;

            if (event.target.value === 'Bard') {

                result.src = "images/bard-class-icon.jpg";

            } else if ( event.target.value === 'Rogue' ) {

                result.src = "images/rogue-class-icon.jpg";
                
            } else {

                result.src = "images/sorcerer-class-icon.jpg";
            }
    });

    
    const selectElement1 = document.querySelector('#race');
        selectElement1.addEventListener('change', (event) => {
      
    const resultrace = document.getElementById('resultrace');
      

        if (event.target.value === 'Bugbear') {

            resultrace.src = "images/bugbear-race.png";

        } else if ( event.target.value === 'Deep Gnome' ) {

            resultrace.src = "images/deep_gnome-race.jpg";
            
        } else {

            resultrace.src = "images/dragonborn-bard-race.jpg";
        }

    });

    const selectElement2 = document.querySelector('#gender');
        selectElement2.addEventListener('change', (event) => {
      
    const resultgender = document.getElementById('resultgender');
    
        if ( event.target.value === 'Female' ) {

            resultgender.src = "images/female-deepgnome-race.png";

        } else {

            resultgender.src = "images/dragonborn-male-race.jpg"
        }
    });


        
}
    
window.addEventListener("load", loadEvent)