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



    replacePlaceholders(template, variables) {
        let result = template;
        for (const [key, value] of Object.entries(variables)) {
            const regex = new RegExp(`\\[${key}\\]`, 'g');
            result = result.replace(regex, value);
        }
        return result;
    }

    getTemplateHTML(templateFile, options = {} ){
        const templateFileContent = this.parser.parseFromString(templateFile, 'text/html');
        const templateID = options.templateID;

        return templateFileContent.querySelector(`#${templateID}`).innerHTML;
    }
}

export const templateEngineInstance = new TemplateEngine();
