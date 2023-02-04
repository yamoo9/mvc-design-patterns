import Component from "../lib/Component.js";
import { NOTE_FILTERS, ACTIVE_CLASSNAME } from "../constants.js";

export default class NoteFilters extends Component {

  template() {
    let { filter } = this.props;
    let { all, done, dont } = NOTE_FILTERS;
    let activeState = `class="${ACTIVE_CLASSNAME}" disabled`;

    return /* html */`
      <div role="group" class="NoteFilters">
        <button
          type="button" 
          data-filter="${all}" 
          ${filter === all ? activeState : ''}
        >
          모두 표시
        </button>
        <button
          type="button" 
          data-filter="${done}"
          ${filter === done ? activeState : ''}
        >
          수행한 노트
        </button>
        <button
          type="button" 
          data-filter="${dont}" 
          ${filter === dont ? activeState : ''}
        >
          수행할 노트
        </button>
      </div>
    `;
  }

  bindEvents() {
    let { all, done, dont } = NOTE_FILTERS;

    this.on('click', `[data-filter=${all}]`, (e) => {
      this.props.changeFilter(all);
    });

    this.on('click', `[data-filter=${done}]`, (e) => {
      this.props.changeFilter(done);
    });

    this.on('click', `[data-filter=${dont}]`, (e) => {
      this.props.changeFilter(dont);
    });
  
  }

}
