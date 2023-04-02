import React from "react";
import AdminItem from "../components/admin/AdminItem";
import Form from "../components/admin/From";
import { useAppDispatch, useAppSelector } from "../types/hook";

function Admin() {
  const dispatch = useAppDispatch();
  let { productCard } = useAppSelector((state: any) => state.filters);
  return (
    <main className="main-admin">
      <h1>Admin</h1>
      <h2>Добавление товара</h2>
      <Form></Form>
      <h2>Товар</h2>
      <div className="main-admin__items">
        {productCard.map((i: any) => (
          <AdminItem item={i} key={i.id}></AdminItem>
        ))}
      </div>
    </main>
  );
}

export default Admin;
