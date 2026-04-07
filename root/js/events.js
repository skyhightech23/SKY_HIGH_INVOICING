import { goToView } from './handlers/ui.js';

export const initEventListeners = () => {
    const navItems = $('.nav-item');

    navItems.each((i, item) => {
        $(item).on('click', function(){
            goToView(this.dataset.view);
        });
    });

};