import React, { useState } from "react";
import OrderSummery from "./OrderSummery";
import ListOfUser from "./ListOfUser";
import { userList } from "../../data";

export default function UserIndex() {
  const [users, serUsers] = useState(userList);
  const [status, setStatus] = useState("ALL");

  const pendingCounter = users.filter(
    (user) => user.satus === "PENDING"
  ).length;
  const deliverCounter = users.filter(
    (user) => user.satus === "DELIVER"
  ).length;
  const handlerChanged = (status) => {
    setStatus(status);
  };

  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      {/* <!-- Order Summary --> */}
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* <!-- Total Orders --> */}
          <OrderSummery
            color="yellow"
            number={users.length}
            text=" Total Order"
          />
          <OrderSummery color="red" number={pendingCounter} text=" Pending" />
          <OrderSummery
            color="green"
            number={deliverCounter}
            text="Delivered"
          />
        </div>
      </div>

      {/* <!-- Order Reports --> */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>

          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-funnel-icon lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            <select
              onChange={(e) => handlerChanged(e.target.value)}
              className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
            >
              <option value="ALL">All</option>
              <option value="PENDING">Pending</option>
              <option value="DELIVER">Delivered</option>
            </select>
          </div>
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="reports-container">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Customer Name</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <ListOfUser users={users} serUsers={serUsers} status={status} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
