import Component from "../lib/Component.js";

export default class NoteList extends Component {

  template() {
    let { notes } = this.props;

    return /* html */`
      <ul class="NoteList">
        ${notes.map(note => {
          return /* html */`
            <li class="NoteItem" data-id="${note.id}">
              <label>
                <input
                  type="checkbox"
                  class="toggleNote" 
                  ${note.done ? 'checked' : ''} 
                />
                <span ${note.done ? 'style="text-decoration: line-through"' : ''}>${note.content}</span>
              </label>
              <button
                type="button"
                class="deleteNote"
              >
                삭제
              </button>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  }

  bindEvents() {
    this.on('change', '.toggleNote', (e) => {
      this.props.toggleNote(e.target.closest('[data-id]').dataset.id);
    });
    
    this.on('click', '.deleteNote', (e) => {
      this.props.deleteNote(e.target.closest('[data-id]').dataset.id);
    });
  }

}
