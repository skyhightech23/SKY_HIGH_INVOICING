import { prepDashboardData } from "../dataPrep";

/* Date: 04/06/26 
*  currentView Object to hold any properties that I might need later. Currently jsut holding the view name. 
*/
let currentView = {
    name: ''
}

const viewList = {
    dashboard: 'Dashboard',
    invoices: 'Invoices',
    customers: 'Customers',
    products: 'Products',
    taxes: 'Tax Rates',
    settings: 'Settings'
}

/** Navigate to view clicked in the sidebar, update the currentView name and render the view. If already at the current view then exit
 * @param {string} view - The name of the view to navigate to.
 * Return: n/a
 */
export const goToView = (view) => {
    try {
        if (getCurrentView() === view) return;

        $('.nav-item').each((i, el) => {
            if (el.dataset.view === view) {
                $(el).addClass('active');

                setCurrentView(view);

                renderView(view);

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
    $('#page-title').text(viewList[view] || 'Unknown View');

    $('#topbar-actions').html('');

    const views = {
        dashboard: renderDashboard,
        invoices: renderInvoices,
        customers: renderCustomers,
        products: renderProducts,
        taxes: renderTaxes,
        settings: renderSettings
    };

    if (views[view]) views[view]();
}

function getCurrentView() {
    return currentView.name;
}
function setCurrentView(view) {
    currentView.name = view;
}

/*
* Flow: Get data for Dashboard View. Render stat cards at the top of the view port. Render Datatable with default data set to Overdue Invoices iff count
* > 0, else default to Pending Invoices. 
*/
async function renderDashboard() {
    try {
        const viewContainer = $('#viewContainer');
        
        //to-do: replace with ajax once backend is set up
        const dashboardData = prepDashboardData();

        //stat-cards: Paid Invoices, Overdue Invoices, Amount Received, Pending Invoices, Recent Activity
        const {paid, overdue, amount, pending, recent} = dashboardData;

    } catch (error) {
        //to-do: handle error , console log for now
        console.log('Error rendering dashboard:', error);
    }
    
}

async function renderStatCardGrid(...statCards){

}