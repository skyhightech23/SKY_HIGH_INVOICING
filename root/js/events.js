import { goToView } from './handlers/ui.js';

export const initEventListeners = () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(){
            goToView(this.dataset.view);
        });
    });

};