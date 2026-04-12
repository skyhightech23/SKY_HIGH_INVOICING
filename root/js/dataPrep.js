import { OpenInvoices, PaidInvoices,  Customers} from "../../testData/JSON/invoicingData.js";

export const prepDashboardData = () => {
    try {
        //data for: paid invoices (# of in the card), overdue invoices (# of in the card), amount received (in card), pending invoices (# of in the card), and recent activity
        const overdueInvoices = OpenInvoices.filter( invoice => invoice.status === 'overdue'); 
        const amountReceived = PaidInvoices.reduce((total, invoice) => total + invoice.total, 0);
        const pendingInvoices = OpenInvoices.filter(invoice => invoice.status === 'pending' || invoice.status === 'sent');
        const recentActivity = [...OpenInvoices, ...PaidInvoices].sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);

        return {PaidInvoices, overdueInvoices, amountReceived, pendingInvoices, recentActivity, Customers};

    } catch (error) {
        //to-do: handle error properly, console log for now
        console.log('Error preparing dashboard data:', error);
    }
}