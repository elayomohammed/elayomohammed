let toggleBtn = document.getElementById('toggle-bar');
let toggleItem = document.getElementById('toggleText');

toggleBtn.addEventListener('click', () => {
    if (toggleItem.classList.contains('navlinksToggled')){
        toggleItem.classList.remove('navlinksToggled');
        toggleItem.classList.add('navlinksHide');
    }
    else{
        toggleItem.classList.remove('navlinksHide');
        toggleItem.classList.add('navlinksToggled');
    }
});