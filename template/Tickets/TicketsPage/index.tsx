"use client";

import { useEffect, useState } from "react";
import Layout from "@/app/dashboard/page";
import ProtectedRoute from "@/components/ProtectedRoute";
import Breadcrumbs from "@/components/Breadcrumbs/page";
import Button from "@/components/Button/page";
import Cards from "@/components/Cards/page";
import Modal from "@/components/Modal/page";
import NewTicket from "./NewTicket";
import TicketsTable from "./TicketsTable";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";
import {
  loadTickets,
  createTicket as createTicketStore,
  updateTicket as updateTicketStore,
  deleteTicket as deleteTicketStore,
  Ticket,
} from "@/lib/tickets";
import { useToast } from "@/hooks/use-toast";

const TicketsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const toast = useToast();

  useEffect(() => {
    // load tickets from localStorage on client
    setTickets(loadTickets());
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    try {
      signOut();
    } catch (e) {
      // ignore
    }
    router.push("/sign-in");
  };

  const handleCreate = async (payload: Omit<Ticket, "id" | "createdAt">) => {
    try {
      const created = await createTicketStore(payload);
      setTickets((s) => [created, ...s]);
      toast.toast({
        title: "Ticket created",
        description: "Ticket created successfully",
      });
      setIsModalOpen(false);
    } catch (e: any) {
      toast.toast({
        title: "Create failed",
        description: e?.message || "Failed to create ticket",
      });
    }
  };

  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket);
    setIsEditOpen(true);
  };

  const handleUpdate = async (id: string, updates: Partial<Ticket>) => {
    try {
      const updated = await updateTicketStore(id, updates);
      setTickets((s) => s.map((t) => (t.id === id ? updated : t)));
      toast.toast({ title: "Ticket updated", description: "Changes saved" });
      setIsEditOpen(false);
      setEditingTicket(null);
    } catch (e: any) {
      toast.toast({
        title: "Update failed",
        description: e?.message || "Failed to update ticket",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTicketStore(id);
      setTickets((s) => s.filter((t) => t.id !== id));
      toast.toast({
        title: "Ticket deleted",
        description: "Ticket was removed",
      });
    } catch (e: any) {
      toast.toast({
        title: "Delete failed",
        description: e?.message || "Failed to delete ticket",
      });
    }
  };

  // staged deletion flow: set id to confirm before deleting
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const requestDelete = (id: string) => {
    setDeletingId(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = async () => {
    if (!deletingId) return;
    await handleDelete(deletingId);
    setIsDeleteOpen(false);
    setDeletingId(null);
  };

  // compute summary stats for cards
  const total = tickets.length;
  const open = tickets.filter((t) => {
    const s = (t.salesStatus || "").toLowerCase();
    return s.includes("open") || s.includes("active");
  }).length;
  const inProgress = tickets.filter((t) => {
    const s = (t.salesStatus || "").toLowerCase().replace(/\s+/g, "_");
    return (
      s.includes("in_progress") ||
      s.includes("in-progress") ||
      s.includes("progress")
    );
  }).length;
  const closed = tickets.filter((t) => {
    const s = (t.salesStatus || "").toLowerCase();
    return s.includes("sold") || s.includes("closed") || s.includes("resolved");
  }).length;

  const statsCards = [
    {
      title: "Total tickets",
      value: String(total),
      percentage: 0,
      image: "/images/icons/sale.svg",
      tooltip: "Total",
    },
    {
      title: "Open Tickets",
      value: "42",
      percentage: 8,
      image: "/images/icons/ticket.svg",
      tooltip: "Tickets currently open",
      status: "open",
    },
    {
      title: "In Progress",
      value: "16",
      percentage: 3,
      image: "/images/icons/sale.svg",
      tooltip: "Tickets being handled",
      status: "in_progress",
    },
    {
      title: "Closed Tickets",
      value: "73",
      percentage: 12,
      image: "/images/icons/check.svg",
      tooltip: "Tickets resolved successfully",
      status: "closed",
    },
  ];

  return (
    <>
      <ProtectedRoute>
        <Layout title="Tickets">
        <Breadcrumbs items={["Management", "Tickets"]}>
          <div className="flex items-center gap-3">
            <Button isPrimary isMedium onClick={() => setIsModalOpen(true)}>
              Create New Ticket
            </Button>
          </div>
        </Breadcrumbs>

        <Cards items={statsCards} />

        {/* Management: structured table view */}
        <div id="tickets" className="mt-6">
          <TicketsTable
            tickets={tickets}
            onEdit={(t) => handleEdit(t)}
            onDelete={(id) => requestDelete(id)}
          />
        </div>
        </Layout>
      </ProtectedRoute>

      <Modal
        title="New Ticket"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isSlidePanel>
        <NewTicket onSubmit={(payload) => handleCreate(payload)} />
      </Modal>

      <Modal
        title="Edit Ticket"
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        isSlidePanel>
        {editingTicket && (
          <NewTicket
            initial={editingTicket}
            onSubmit={(payload) =>
              handleUpdate(editingTicket.id, payload as any)
            }
            isEdit
          />
        )}
      </Modal>

      <Modal
        title="Confirm Delete"
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}>
        <div className="py-4">
          <p>
            Are you sure you want to delete this ticket? This action cannot be
            undone.
          </p>
          <div className="mt-4 flex gap-2 justify-end">
            <Button onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
            <Button isRed onClick={() => confirmDelete()}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TicketsPage;
