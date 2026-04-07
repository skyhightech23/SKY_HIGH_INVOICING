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

        document.querySelectorAll('.nav-item').forEach(i => {
            if (i.dataset.view === view) {
                i.classList.add('active');
                
                setCurrentView(view);

                render(view);

            } else {
                i.classList.remove('active');
            }
            
        });
    } catch ( error ){
        //to-do: properly handle error, console log for now
        console.log('Error navigating to page:', error);
    }
    

}

function render(view) {
    console.log('Rendering view:', view);
    
    document.getElementById('page-title').textContent = viewList[view] || 'Unknown View';

    document.getElementById('topbar-actions').innerHTML = '';

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

function getCurrentView(){
    return currentView.name;
}
function setCurrentView(view){
    currentView.name = view;
}