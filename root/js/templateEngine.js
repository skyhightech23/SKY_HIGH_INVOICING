export class TemplateEngine {
    constructor() {
        this.templates = new Map();
        this.parser = new DOMParser();

    }

    async loadTemplates() {
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

    getTemplateHTML(templateFile){
        const templateHTML = this.templates.get(templateFile);
        const doc = this.parser.parseFromString(templateHTML, 'text/html');
        return doc;
    }
}

export const templateEngineInstance = new TemplateEngine();
