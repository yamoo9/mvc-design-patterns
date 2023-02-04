import Component from "./lib/Component.js";
import { NoteInput, NoteFilters, NoteList } from "./components/index.js";
import { NOTE_FILTERS } from './constants.js';


export default class NoteApp extends Component {

  init() {
    this.setState({
      notes: [
        { id: 'note-jdiCk', content: '컴포넌트 작동 흐름', done: false, },
        { id: 'note-dIwjc', content: '컴포넌트 구현', done: false, },
      ],
      filter: NOTE_FILTERS.all
    });
  }

  template() {
    return /* html */`
      <div data-component="NoteInput"></div>
      <div data-component="NoteFilters"></div>
      <div data-component="NoteList"></div>
    `;
  }

  updated() {
    const noteInput = this.element.querySelector('[data-component="NoteInput"]');
    new NoteInput(
      noteInput, 
      { 
        addNote: this.addNote.bind(this) 
      }
    );
    
    const noteFilters = this.element.querySelector('[data-component="NoteFilters"]');
    new NoteFilters(
      noteFilters, 
      { 
        filter: this.state.filter, 
        changeFilter: this.changeFilter.bind(this) 
      }
    );

    const noteList = this.element.querySelector('[data-component="NoteList"]');
    new NoteList(
      noteList, 
      { 
        notes: this.filterNotes(), 
        toggleNote: this.toggleNote.bind(this), 
        deleteNote: this.deleteNote.bind(this), 
      }
    );
  }

  filterNotes() {
    const { filter, notes } = this.state;

    return notes.filter(note => {
      switch(filter) {
        case NOTE_FILTERS.done:
          return note.done;
        case NOTE_FILTERS.dont:
          return !note.done;
        case NOTE_FILTERS.all:
        default:
          return note;
      }
    });
  }

  addNote(value) {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: Component.generateId({ prefix: 'note', digit: 5 }),
          content: value,
        }
      ]
    });
  }

  toggleNote(toggleId) {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === toggleId) {
          note.done = !note.done;
        }
        return note;
      })
    })
  }

  deleteNote(deleteId) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== deleteId),
    });
  }

  changeFilter(filterKey) {
    this.setState({ filter: filterKey });
  }
}