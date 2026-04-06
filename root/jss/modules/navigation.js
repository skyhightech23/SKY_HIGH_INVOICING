function goToPage(page){
  document.querySelectorAll('.nav-item').forEach(i => {
    if( i.dataset.page === page ){
        i.classList.add('active');
        nav(i);
    } else {
        i.classList.remove('active');
    }
  });

}