import React from 'react';
import ReactDom from 'react-dom'
import SubmissionForm from './SubmissionForm';
import Note from './Note';
import dataSample from './dataSample';


function Card(props) {
  console.log("CARD PROPS: ", props.cardTitle)
  const notesArray = []
    // pushing the category components into the topics array
    const createNotes = () => {
      console.log("DATA SAMPLE: ", dataSample.categories)
      for (let i = 0; i < dataSample.categories[0].topics.length; i += 1) {
        notesArray.push(<Note key={dataSample.categories[0].topics[0].notes[i].note} noteName={dataSample.categories[0].topics[0].notes[i].note} />);
      }
    }
    createNotes();
    console.log('topicsArray is', notesArray)

  return (
    <div>
      <h4>Specific Topic: {props.cardTitle}</h4>
      <button> READY </button>
      <div>
        <ul>
          {notesArray}
        </ul>
      </div>
      <SubmissionForm />
    </div>
  )
}

export default Card;