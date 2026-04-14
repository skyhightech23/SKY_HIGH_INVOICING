import { openInvoices, paidInvoices,  customers} from "../../root/testData/JSON/invoicingData.js";

export const prepDashboardData = () => {
    try {
        //data for: paid invoices (# of in the card), overdue invoices (# of in the card), amount received (in card), pending invoices (# of in the card), and recent activity
        const overdueInvoices = openInvoices.filter( invoice => invoice.status === 'overdue'); 
        const amountReceived = paidInvoices.reduce((total, invoice) => total + invoice.total, 0);
        const pendingInvoices = openInvoices.filter(invoice => invoice.status === 'pending' || invoice.status === 'sent');
        const recentActivity = [...openInvoices, ...paidInvoices].sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);

        return {paidInvoices, overdueInvoices, amountReceived, pendingInvoices, recentActivity, customers};

    } catch (error) {
        //to-do: handle error properly, console log for now
        console.log('Error preparing dashboard data:', error);
    }
}