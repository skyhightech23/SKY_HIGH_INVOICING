export class TemplateEngine {
    constructor() {
        this.templates = [];
        
        loadTemplates();
    }
}

loadTemplates = async () => {
    try {
        const templates = [
            'view-templates.html',
            'stat-card-templates.html'
        ];

        for (const file of templates) {
            try {
                //cache busting template files
                const response = await fetch(`./templates/${file}?v=${Date.now()}`);
                const content = await response.text();
                this.templates.set(file, content);
            } catch (error) {
                console.error(`Error loading template ${file}:`, error);
            }
        }
        
    } catch (error) {
        console.error('Error loading templates:', error);

    }

}