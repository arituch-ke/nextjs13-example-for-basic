'use client';
import ComponentTable from "@/components/Table";
import { URL } from "@/utils";
import { useFetch } from "@/hook/useFetch";


export default function App() {
  const posts = useFetch<IPost[]>(`${URL}/posts`);
  const users = useFetch<IPost[]>(`${URL}/users`);
  
  const postColumns = [
    { field: 'id', header: 'Id' },
    { field: 'title', header: 'Title' },
    { field: 'body', header: 'Body' }
  ];
  const userColumns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' }
  ];

  const showPosts = () => {
    return <ComponentTable
      data={posts.data}
      columns={postColumns}
      loading={posts.loading}
      error={posts.error} />;
  }

  const showUsers = () => {
    return <ComponentTable
      data={users.data}
      columns={userColumns}
      loading={users.loading}
      error={users.error} />;
  }

  return (
    <>
      {showPosts()}
      {showUsers()}
    </>
  );
}