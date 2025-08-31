import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface IProps {
  posts: IPost[];
  isTitle?: boolean;
}
export default function Table(prop: IProps) {
  const columns = [
    { field: 'id', header: 'Id' },
    { field: 'title', header: 'Title' },
    { field: 'body', header: 'Body' }
  ];

  const showTitle = () => {
    if (!prop.isTitle) return null;
    return <h1>Table Post</h1>;
  }

  return (
    <div>
      {showTitle()}
      <DataTable value={prop.posts} paginator rows={10} scrollable scrollHeight="400px"
        tableStyle={{ minWidth: '50rem' }}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]}>
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  )
}