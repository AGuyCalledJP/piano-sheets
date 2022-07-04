import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import DimensionsProvider from '../providers/DimensionsProvider';
import '../styles/Piano.module.css';

function BasicPiano({ width, firstNote, lastNote, isLoading }) {

    const [playNote, setPlayNote] = useState('c1')
    const [stopNote, setStopNote] = useState('c3')
    const [noteRange, setNoteRange] = useState({})

    useEffect(() => {
        setPlayNote(firstNote)
        setStopNote(lastNote)
        setNoteRange({
          first: MidiNumbers.fromNote(playNote),
          last: MidiNumbers.fromNote(stopNote)
        })
    }, [firstNote, lastNote])


    return (
        <Piano
          noteRange={noteRange}
          width={300}
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
        />
    )
}

BasicPiano.propTypes = {
    noteRange: PropTypes.object,
    width: PropTypes.number,
    firstNote: PropTypes.string,
    lastNote: PropTypes.string,
    disabled: PropTypes.bool,
}

export default BasicPiano
