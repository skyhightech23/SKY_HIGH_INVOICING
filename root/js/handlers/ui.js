import { prepDashboardData } from "../dataPrep.js";
import { templateEngineInstance } from "../templateEngine.js";
import  * as h  from './uiHelper.js';

/* Date: 04/06/26 
*  currentView Object to hold any properties that I might need later. Currently jsut holding the view name. 
*/
export let currentView = {
    name: '',
    statCardGridId: '',
    viewTemplateId: ''
}

/** Navigate to view clicked in the sidebar, update the currentView name and render the view. If already at the current view then exit
 * @param {string} view - The name of the view to navigate to.
 * Return: n/a
 */
export const goToView = (view) => {
    try {
        if (currentView.name === view) return;

        $('.nav-item').each((i, el) => {
            if (el.dataset.view === view) {
                $(el).addClass('active');

                h.setCurrentViewOptions( { name: view } );

                renderView( view );

            } else {
                $(el).removeClass('active');
            }

        });
    } catch (error) {
        //to-do: properly handle error, console log for now
        console.log('Error navigating to page:', error);
    }


}

function renderView(view) {
    $('#page-title').text(h.viewList[view] || 'Unknown View');

    $('#topbar-actions').html('');

    const viewTemplateFile = templateEngineInstance.templates.get('view-templates.html');
    console.log('View Template File:', viewTemplateFile);
    const viewTemplateHTML = templateEngineInstance.getTemplateHTML(viewTemplateFile, { templateID: currentView.viewTemplateId });
    console.log('View Template HTML:', viewTemplateHTML);

    if (h.viewsRenderFunctions[view]) h.viewsRenderFunctions[view](viewTemplateHTML);
}

/*
* Flow: Get data for Dashboard View. Render stat cards at the top of the view port. Render Datatable with default data set to Overdue Invoices iff count
* > 0, else default to Pending Invoices. 
*/
export async function renderDashboard( viewTemplateHTML ) {
    try {
        //to-do: move this line to reset function
        const viewContainer = $('#viewContainer').html('');
        //to-do: replace with ajax once backend is set up
        const statCards = prepDashboardData();
        
        const statCardGridHTML = await renderStatCardGrid( statCards );

        const dashboardHTML = templateEngineInstance.replacePlaceholders(viewTemplateHTML, { STAT_CARDS: statCardGridHTML });

        viewContainer.html(dashboardHTML);

    } catch (error) {
        //to-do: handle error , console log for now
        console.log('Error rendering dashboard:', error);
    }

}

async function renderStatCardGrid( statCards = [] ) {
    const statCardTemplateFile = templateEngineInstance.templates.get('stat-card-templates.html');
    const statCardTemplateHTML = templateEngineInstance.getTemplateHTML(statCardTemplateFile, { templateID: currentView.statCardGridId });    
    let statCardHTML = '';

    statCards.forEach( card => {
        const placeholders = {
            CARD_TITLE: card.title,
            CARD_VALUE: card.value,
            NUM_INVOICES: card.numInvoices
        };

        statCardHTML += templateEngineInstance.replacePlaceholders(statCardTemplateHTML, placeholders);
    });

    return statCardHTML;
}