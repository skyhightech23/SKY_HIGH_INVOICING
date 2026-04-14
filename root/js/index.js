import { initEventListeners } from './events.js';
import  * as templateEngine from './templateEngine.js';
import * as uiHandlers from './handlers/ui.js';

$(document).ready(async () => {
    const templateEngineInstance = new templateEngine.TemplateEngine();

    await templateEngineInstance.loadTemplates();

    initEventListeners();

    uiHandlers.goToView('dashboard');

});
