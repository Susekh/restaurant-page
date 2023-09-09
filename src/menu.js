function menuLoader() {
  const pageLoad = document.getElementById('content');
  const imgTxtCnt = document.createElement('div');
  imgTxtCnt.classList.add('img-txt-cnt-menu', 'cnt-rm');
  const menuItemDiv = document.createElement('div');
  menuItemDiv.innerHTML = '<h2>Coq au Vin</h2><br><p>This traditional French dish consists of chicken slow-cooked in red wine, bacon, mushrooms, and onions, resulting in a rich and savory stew-like meal.</p>';
  const menuItemDiv2 = document.createElement('div');
  menuItemDiv2.innerHTML = '<h2>French Onion Soup</h2><br><p>A classic bistro starter, French Onion Soup features caramelized onions in a flavorful beef broth, topped with melted cheese and toasted bread.</p>';
  const menuItemDiv3 = document.createElement('div');
  menuItemDiv3.innerHTML = "<h2>Ratatouille</h2><br><p>A vegetarian option that's both colorful and flavorful, Ratatouille is a stewed vegetable medley that may include eggplant, zucchini, bell peppers, tomatoes, and herbs, served with crusty bread or as a side dish.</p>";
  const menuItemDiv4 = document.createElement('div');
  menuItemDiv4.innerHTML = '<h2>Steak Frites</h2><br><p>A bistro favorite, Steak Frites typically includes a juicy steak (such as a hanger or ribeye) cooked to your liking and served with a side of crispy French fries and a choice of sauce, like béarnaise or peppercorn.</p>';

  imgTxtCnt.append(menuItemDiv, menuItemDiv2, menuItemDiv3, menuItemDiv4);
  pageLoad.appendChild(imgTxtCnt);
}

export default menuLoader;
