import HomeLoader from './homePage';
import menuLoader from './menu';
import contactLoader from './contactPage';

function rmHtml() {
  const pageLoad = document.getElementById('content');
  const imgTxtCnt = document.querySelector('.cnt-rm');
  pageLoad.removeChild(imgTxtCnt);
}

function createTab() {
  const tabDiv = document.createElement('div');
  tabDiv.classList.add('tabDiv');
  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btnDiv');
  const homeBtn = document.createElement('button');
  homeBtn.setAttribute('class', 'home-btn');
  homeBtn.textContent = 'HOME';
  homeBtn.addEventListener('click', () => {
    rmHtml();
    HomeLoader();
  });
  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('class', 'menu-btn');
  menuBtn.textContent = 'MENU';
  menuBtn.addEventListener('click', () => {
    rmHtml();
    menuLoader();
  });
  const contactBtn = document.createElement('button');
  contactBtn.setAttribute('class', 'contact-btn');
  contactBtn.textContent = 'CONTACT';
  contactBtn.addEventListener('click', () => {
    rmHtml();
    contactLoader();
  });
  btnDiv.append(homeBtn, menuBtn, contactBtn);
  tabDiv.appendChild(btnDiv);
  return tabDiv;
}

function tabLoader() {
  const pageLoad = document.getElementById('content');
  const tabDiv = createTab();
  pageLoad.appendChild(tabDiv);
}

export default tabLoader;
