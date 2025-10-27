import React from "react";
import { Ticket } from "@/lib/tickets";
import Button from "@/components/Button/page";

type Props = {
  tickets: Ticket[];
  onEdit: (t: Ticket) => void;
  onRequestDelete: (id: string) => void;
};

const TicketsList = ({ tickets = [], onEdit, onRequestDelete }: Props) => {
  if (!tickets || tickets.length === 0) {
    return <div className="mt-6 text-muted">No tickets created yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {tickets.map((t) => (
        <div key={t.id} className="p-4 border rounded-md bg-card">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-lg font-medium">{t.ticketName}</div>
              <div className="text-sm text-muted">${t.price} • {t.quantity} qty</div>
            </div>
            <div className="text-right">
              <div className={`inline-block px-2 py-1 rounded text-sm ${t.salesStatus === 'Sold Out' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {t.salesStatus}
              </div>
            </div>
          </div>

          <div className="mt-3 text-sm text-muted">Sold: {t.sold}</div>
          <div className="mt-4 flex gap-2">
            <Button isSecondary isSmall onClick={() => onEdit(t)}>Edit</Button>
            <Button isRed isSmall onClick={() => onRequestDelete(t.id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketsList;
