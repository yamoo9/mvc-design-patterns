import Component from '../lib/Component.js';

export default class NoteInput extends Component {

  template() {
    return /* html */`
      <div role="group" class="NoteInput">
        <input type="text" aria-label="노트" placeholder="노트 내용 작성" />
        <button type="button" class="addNote">추가</button>  
      </div>
    `;
  }

  bindEvents() {
    const { element } = this;

    this.on('keyup', 'input', (e) => {
      let value = e.target.value.trim?.();
      if (e.key === 'Enter' && value) {
        this.props.addNote(value);
      }
    });

    this.on('click', '.addNote', (e) => {
      let noteInput = element.querySelector('input');
      let value = noteInput.value.trim?.();
      if (noteInput && value) { 
        this.props.addNote(value); 
      }
    });
  }
  
}