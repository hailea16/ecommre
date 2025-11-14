import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const ordersData = [
  { id: "#23452", product: "Smartphone", amount: "$599", status: "Delivered", date: "Nov 14, 2025" },
  { id: "#23453", product: "Headphones", amount: "$199", status: "Pending", date: "Nov 13, 2025" },
  { id: "#23454", product: "Laptop", amount: "$1299", status: "Failed", date: "Nov 12, 2025" },
  { id: "#23455", product: "Mouse", amount: "$49", status: "Delivered", date: "Nov 11, 2025" },
  { id: "#23456", product: "Keyboard", amount: "$89", status: "Pending", date: "Nov 10, 2025" },
  { id: "#23457", product: "Monitor", amount: "$329", status: "Delivered", date: "Nov 09, 2025" },
  { id: "#23458", product: "Speaker", amount: "$149", status: "Failed", date: "Nov 08, 2025" },
  { id: "#23459", product: "Camera", amount: "$799", status: "Delivered", date: "Nov 07, 2025" },
];

const statusBadge = {
  Delivered: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

const TableSection = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const perPage = 5;

  // Filter data
  const filtered = ordersData.filter((order) => {
    const matchesSearch = order.product.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = showAll ? filtered : filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-white dark:bg-slate-200 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-green-500 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-700">Recent Orders</h3>
          <p className="text-sm text-slate-500 dark:text-slate-600">Latest customer order list</p>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white bg-green-600 hover:bg-green-700 rounded-lg cursor-pointer text-sm font-medium px-4 py-2"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex items-center justify-between p-4 gap-4">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="px-3 py-2 border rounded-lg bg-white dark:bg-slate-100 text-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Delivered</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-300">
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Order Id</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Product</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Amount</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Status</th>
              <th className="text-left p-4 text-sm font-semibold text-slate-700">Date</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((order, index) => (
              <tr
                key={index}
                className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <td className="p-4 text-sm font-medium text-blue-500">{order.id}</td>
                <td className="p-4 text-sm font-medium text-slate-700">{order.product}</td>
                <td className="p-4 text-sm font-medium text-slate-700">{order.amount}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusBadge[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-medium text-slate-700">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (only if showAll is false) */}
      {!showAll && (
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="p-2 border rounded disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-sm font-medium text-slate-700">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="p-2 border rounded disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TableSection;
