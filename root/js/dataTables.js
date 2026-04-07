/* Base dataTables options to be used across all tables. */
let baseOptions = {
    destroy: true,
    processing: true,
    pageLength: 10,
}

export const initDatatable = (tableSelector, data, columns, columnDefs, options = {} ) => {
    try {

    } catch (error) {
        //to-do: handle error properly, console log for now
        console.log('Error initializing datatable:', error);
    }
    
}