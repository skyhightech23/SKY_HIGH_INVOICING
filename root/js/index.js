import { initEventListeners } from './events.js';
import  * as templateEngine from './templateEngine.js';

$(document).ready(async () => {
    await templateEngine.loadTemplates();

    initEventListeners();

    //init dashboard view
});
