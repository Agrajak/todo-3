import { Component } from 'Components';
import './header.css';

export default class Header extends Component {
  constructor(parent) {
    super(parent, null, 'header');

    this.menuBtn = this.$.querySelector('.menu-btn');
    this.menuBtn.addEventListener('click', this.openMenu.bind(this));
  }

  openMenu() {
    this.parent.querySelector('.menu').classList.replace('close', 'open');
  }

  render() {
    return `
            <div class="title">
                TODO 서비스
            </div>
            <div class="menu-btn">
              &#9776; Menu
            </div>
        `;
  }
}
