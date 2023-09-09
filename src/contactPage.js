function contactLoader() {
  const pageLoad = document.getElementById('content');
  const imgTxtCnt = document.createElement('div');
  imgTxtCnt.classList.add('img-txt-cnt-contact', 'cnt-rm');
  const contDiv = document.createElement('div');
  contDiv.innerHTML = `<h2>You can reach out to me through:</h2><br>
                        <h4>Email Id =>  subhranshukhilar@outlook.com</h4>
                        <a href="https://github.com/Susekh">My github account</a>`;

  imgTxtCnt.appendChild(contDiv);
  pageLoad.appendChild(imgTxtCnt);
}

export default contactLoader;
