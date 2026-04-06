export const goToPage = (page) => {
    document.querySelectorAll('.nav-item').forEach(i => {
        if (i.dataset.page === page) {
            i.classList.add('active');

            currentPage = i.dataset.page;

            render(currentPage);

        } else {
            i.classList.remove('active');
        }
    });

}

function render(page) {
    console.log('Rendering page:', page);
    
    document.getElementById('page-title').textContent = {
        dashboard: 'Dashboard',
        invoices: 'Invoices',
        customers: 'Customers',
        products: 'Products',
        taxes: 'Tax Rates',
        settings: 'Settings'
    }[page] || page;

    const act = document.getElementById('topbar-actions').innerHTML = '';

    const pages = {
        dashboard: renderDashboard, 
        invoices: renderInvoices,
        customers: renderCustomers, 
        products: renderProducts,
        taxes: renderTaxes, 
        settings: renderSettings
    };
    
    if (pages[page]) pages[page]();
}