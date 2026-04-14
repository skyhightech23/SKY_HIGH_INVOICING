import { initEventListeners } from './events.js';
import  { templateEngineInstance } from './templateEngine.js';
import * as uiHandlers from './handlers/ui.js';

$(document).ready(async () => {
    await templateEngineInstance.loadTemplates();

    initEventListeners();

    uiHandlers.goToView('dashboard');

});
