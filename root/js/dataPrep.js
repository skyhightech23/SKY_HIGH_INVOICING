import { openInvoices, paidInvoices,  customers} from "../../root/testData/JSON/invoicingData.js";

export const prepDashboardData = () => {
    try {
        //data for: paid invoices (# of in the card), overdue invoices (# of in the card), amount received (in card), pending invoices (# of in the card), and recent activity
        const overdueInvoices = openInvoices.filter( invoice => invoice.status === 'overdue'); 
        const amountReceived = paidInvoices.reduce((total, invoice) => total + invoice.total, 0);
        const pendingInvoices = openInvoices.filter(invoice => invoice.status === 'pending' || invoice.status === 'sent');
        const recentActivity = [...openInvoices, ...paidInvoices].sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);
        const dashboardStatCardArray = [
            {
                title: 'Paid Invoices',
                value: paidInvoices.length,
                numInvoices: `${paidInvoices.length} paid`
            },
            {
                title: 'Overdue Invoices',
                value: overdueInvoices.length,
                numInvoices: `${overdueInvoices.length} overdue`
            },
            {
                title: 'Amount Received',
                value: `$${amountReceived.toFixed(2)}`,
                numInvoices: 'Total received'
            },
            {
                title: 'Pending Invoices',
                value: pendingInvoices.length,
                numInvoices: `${pendingInvoices.length} pending or sent`
            },
            {
                title: 'Recent Activity',
                value: recentActivity.length,
                numInvoices: `${recentActivity.length} recent items`
            }
        ];

        return dashboardStatCardArray;

    } catch (error) {
        //to-do: handle error properly, console log for now
        console.log('Error preparing dashboard data:', error);
    }
}