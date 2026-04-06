import { goToPage } from './handlers/ui.js';

export const initEventListeners = () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            goToPage(page);
        });
    });

};