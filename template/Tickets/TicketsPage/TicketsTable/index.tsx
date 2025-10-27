import { useState } from "react";
import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import { Ticket } from "@/lib/tickets";
import Actions from "@/components/Action";

type Props = {
  tickets: Ticket[];
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void | Promise<void>;
};

const TicketsTable = ({ tickets = [], onEdit, onDelete }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <Table
      className="mt-6"
      title="Tickets Table"
      search={search}
      setSearch={(e) => setSearch(e.target.value)}
      cellsThead={[
        "Ticket Name",
        "Price",
        "Quantity",
        "Sold",
        "Sales Status",
        "Visibility",
        "",
      ]}
      isNumber
      isPagination>
      {tickets.map((item, index) => (
        <TableRow key={item.id} index={index}>
          <td>{item.ticketName}</td>
          <td>${item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.sold}</td>
          <td>
            {(() => {
              const s = (item.salesStatus || "")
                .toLowerCase()
                .replace(/\s+/g, "_");
              const cls =
                s.includes("open") || s.includes("active")
                  ? "status status-green"
                  : s.includes("in_progress") ||
                    s.includes("in-progress") ||
                    s.includes("progress")
                  ? "status status-yellow"
                  : "status status-gray";
              return <div className={cls}>{item.salesStatus}</div>;
            })()}
          </td>
          <td>
            <div
              className={`status ${
                item.visibility === "Hidden" ? "status-red" : "status-green"
              }`}>
              {item.visibility}
            </div>
          </td>
          <td className="w-11">
            <Actions
              onView={() => {
                /* optional: view handler */
              }}
              onEdit={() => onEdit(item)}
              onDelete={() => onDelete(item.id)}
            />
          </td>
        </TableRow>
      ))}
    </Table>
  );
};

export default TicketsTable;
