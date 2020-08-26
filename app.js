//Variable
const collection = document.querySelector('.collection')



//eventListeners
eventListeners()

//form submission
function eventListeners() {
    document.querySelector('#task-form').addEventListener('submit', newNote)

    // access to filter submit
    document.querySelector('.clear-tasks').addEventListener('click', filterTasks)

    //remove notes
    document.querySelector('.collection').addEventListener('click', removeNotes)


    //get data from LS onloaded
    document.addEventListener('DOMContentLoaded', LSOnlaod)

}

//functions


    //Adding new note to the list
    function newNote(e) {
        // e.preventDefault()
        //access to the value
        const note = document.querySelector('#task').value
        //create removeElement
        const removeBtn = document.createElement('a')
        removeBtn.textContent = 'X'
        removeBtn.classList = 'remove-note'
        //create <li> tag
        const li = document.createElement('li')
        li.className = 'collection-li'
        li.appendChild(document.createTextNode(note))
        // Adding removeBtn to li
        li.appendChild(removeBtn)
        //Adding li to Collection
        collection.appendChild(li)
        this.reset()
        addNoteToLocalStorage(note)
        alert('your Task saved succesfuly')
    }
    // remove note from list
    function removeNotes(e) {
        if (e.target.classList.contains('remove-note')) {
            e.target.parentElement.remove()
        }
        // also remove the note from LS
        removeNotesFromLS(e.target.parentElement.textContent)

    }

    // adding note to the localstorage
    function addNoteToLocalStorage(note) {

        //get the notes from LS
        const notes = getNotesFromLS()
        //add new note to the notes array
        notes.push(note)

        // add new notes Array th the LS
        localStorage.setItem('notes', JSON.stringify(notes))
        // console.log(notes);
    }

    //get notes from local storage
    function getNotesFromLS() {
        let notes;

        // get previous notes from LS
        let getFromLS = localStorage.getItem('notes')
        if (getFromLS === null) {
            //if not exist creat empty array
            notes = []
        } else {
            //if exist create a array of values
            notes = JSON.parse(getFromLS)
        }
        return notes

    }

    // loaded  notes from LS 

    function LSOnlaod() {
        const notes = getNotesFromLS()

        //print each item of array
        notes.forEach(function (note) {
            //create removeElement
            const removeBtn = document.createElement('a')
            removeBtn.textContent = 'X'
            removeBtn.classList = 'remove-note'

            //create <li> tag
            const li = document.createElement('li')

            li.appendChild(document.createTextNode(note))

            // Adding removeBtn to li
            li.appendChild(removeBtn)
            //Adding li to Collection
            collection.appendChild(li)

        });
    }
    //also Remove note from LS
    function removeNotesFromLS(noteContent) {
        //delete x from the content
        const noteDelete = noteContent.substring(0, noteContent.length - 1)

        // get notes from LS
        const notesFromLS = getNotesFromLS()

        notesFromLS.forEach(function (note, index) {
            if (note === noteDelete) {

                notesFromLS.splice(index, 1)
            }
        });
        //set new Araay of notes to the LS
        localStorage.setItem('notes', JSON.stringify(notesFromLS))
    }
    //Adding new note to the filter task
    // function filterTasks() {
  
    //     const noteFilter = document.querySelector('#filter').value
    //     const notesFromLS = getNotesFromLS()
    //     notesFromLS.forEach(function(value){
    //         if (value === noteFilter) {

    //             document.querySelector(noteFilter.parentElement).style.color = "red"
    //             console.log(`Your task found and is "${noteFilter}"` );

    //         }else {
    //             alert('Your task not found')
    //         }
    //     })   
    //  }    
    // 

    function filterTasks(e){
        
        //get note from input
        const note = e.target.value
        //access to value of lis & contenttext
        document.querySelectorAll('.collection-li').forEach(function (noteTask) {
            const noteFiltered = noteTask.firstChild.textContent;

            // compair the note from input & value of each li
            if (noteFiltered.indexOf(note) != -1) {
                task.style.display = 'block';
                console.log('yes');
            } else {
                noteTask.style.display = 'none';
                console.log('no');
            }
        });


    }

       
            
             


        





  
  
