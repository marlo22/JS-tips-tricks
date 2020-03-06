const toggleNavBtn = document.getElementById('toggleNav');

toggleNavBtn.addEventListener('click', e => {
  const navBar = document.getElementById('navBar');
  const contentBox = document.getElementById('contentBox');
  const isVisible = !navBar.classList.contains('d-none');

  if (isVisible) {
    navBar.classList.add('d-none');
    contentBox.classList.remove('col-10');
    contentBox.classList.add('col-12');
  } else {
    navBar.classList.remove('d-none');
    contentBox.classList.remove('col-12');
    contentBox.classList.add('col-10');
  }
});