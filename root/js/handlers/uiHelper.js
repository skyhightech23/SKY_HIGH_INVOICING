import { renderDashboard, currentView } from "./ui.js";

export const statCardGridIds = {
    dashboard: 'dashboard-stat-card'
};

export const viewTemplateIds = {
    dashboard: 'dashboard-view'
};

export const viewList = {
    dashboard: 'Dashboard',
    invoices: 'Invoices',
    customers: 'Customers',
    products: 'Products',
    taxes: 'Tax Rates',
    settings: 'Settings'
};

export const viewsRenderFunctions = {
    dashboard: renderDashboard,
    /*invoices: renderInvoices,
    customers: renderCustomers,
    products: renderProducts,
    taxes: renderTaxes,
    settings: renderSettings*/
};

export function getCurrentView() {
    return currentView;
}

export function setCurrentViewOptions( options = {} ) {
    currentView.name = options.name;
    currentView.statCardGridId = statCardGridIds[options.name] || '';
    currentView.viewTemplateId = viewTemplateIds[options.name] || '';
}

