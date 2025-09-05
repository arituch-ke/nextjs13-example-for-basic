import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import type { DataTableValue } from 'primereact/datatable';

interface IProps<T extends DataTableValue> {
  loading?: boolean;
  error?: string | null;
  data: T[] | null;
  columns: { field: string; header: string }[];
}
export default function Table<T extends DataTableValue>(prop: IProps<T>) {
  const columns = prop.columns;

  const showTable = () => {
    if (prop.loading) return <p>Loading...</p>;
    if (prop.error) return <p>Error: {prop.error}</p>;
    if (!prop.data) return <p>No data available</p>;
    return <DataTable value={prop.data} paginator rows={10} scrollable scrollHeight="400px"
      tableStyle={{ minWidth: '50rem' }}
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      rowsPerPageOptions={[10, 25, 50]}>
      {columns.map((col, i) => (
        <Column key={col.field} field={col.field} header={col.header} />
      ))}
    </DataTable>;
  }

  return (
    <div>
      {showTable()}
    </div>
  )
}