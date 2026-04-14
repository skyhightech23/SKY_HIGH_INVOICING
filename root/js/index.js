import { initEventListeners } from './events.js';
import  * as templateEngine from './templateEngine.js';

$(document).ready(async () => {
    const templateEngineInstance = new templateEngine.TemplateEngine();

    await templateEngineInstance.loadTemplates();

    initEventListeners();

    //init dashboard view
});
