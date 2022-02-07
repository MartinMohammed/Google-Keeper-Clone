import React, { useState } from "react";
import Clock from "./Clock";

// import the components we need
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// Keeper App 2
// import notes from "../notes";

//2. Create a App.jsx component.
function App() {
  // create noteArray state for storing the notes objects
  const [noteArray, setNoteArray] = useState([
    {
      // {/* starting Note  */}
      title: "Note title",
      content: "Note content"
    }
  ]);
//   ------------------ HANDLING = MANAGING COMPONENTS ---------------

  //CHALLENGE:
  //1. Implement the add note functionality.
  //- Create a constant that keeps track of the title and content.
  //- Pass the new note back to the App.
  //- Add new note to an array.
  //- Take array and render seperate Note components for each item.
  function addNote(noteObject) {
    setNoteArray((prevNotes) => {
      return [
        // spread operator for previous values
        ...prevNotes,
        // store noteObjects inisde an array
        noteObject
      ];
    });
  }

  //2. Implement the delete note functionality.
  //- Callback from the Note component to trigger a delete function.
  //- Use the filter function to filter out the item that needs deletion.
  //- Pass a id over to the Note component, pass it back to the App when deleting.
  function deleteNote(noteId) {
    setNoteArray((prevItems) => {
      return noteArray.filter((value, index) => {
        // return all elements where noteID does not equal index
        return noteId !== index;
      });
    });
  }

  return (
    <div>
      {/* all components inside a div */}
      {/* html attributes such as class names should not go into 
        custom component (header, note, footer). Instead they need to be applied
        to a HTML element such as div in Note
         */}
      <Header />
      <Clock/>
      <CreateArea onAdd={addNote} />
      {noteArray.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            // pass parent deleteNote function
            onDelete={deleteNote}
          />
        );
      })}
      {/*  it will return an array of Notes based on notes in notes.jss 
              dynamic React components  */}
      {/* {notes.map( */}
      {/*    note => <Note
            //         key={note.key}
            //         title={note.title}
            //         content={note.content}
            //     />
            //     )}  */}
      <Footer />
    </div>
  );
}

export default App;
