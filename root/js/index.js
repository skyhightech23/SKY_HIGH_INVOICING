import { initEventListeners } from './events.js';
import  * as templateEngine from './templateEngine.js';
import * as uiHandlers from './handlers/ui.js';

$(document).ready(async () => {
    const templateEngineInstance = new templateEngine.TemplateEngine();
    const uiHandlersInstance = new uiHandlers();

    await templateEngineInstance.loadTemplates();

    initEventListeners();

    uiHandlersInstance.goToView('dashboard');

});
