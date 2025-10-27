// LocalStorage-backed ticket store utilities
export interface Ticket {
  id: string;
  ticketName: string;
  price: string;
  quantity: string;
  sold: string;
  salesStatus: string;
  visibility: string;
  createdAt: string;
}

const STORAGE_KEY = "tickets_store_v1";

const delay = (ms = 200) => new Promise((r) => setTimeout(r, ms));

export const loadTickets = (): Ticket[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Ticket[];
  } catch (e) {
    console.error("Failed to load tickets", e);
    return [];
  }
};

export const saveTickets = (tickets: Ticket[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

export const createTicket = async (data: Omit<Ticket, "id" | "createdAt">) => {
  await delay();
  const tickets = loadTickets();
  const newTicket: Ticket = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  tickets.unshift(newTicket);
  saveTickets(tickets);
  return newTicket;
};

export const updateTicket = async (id: string, updates: Partial<Ticket>) => {
  await delay();
  const tickets = loadTickets();
  const idx = tickets.findIndex((t) => t.id === id);
  if (idx === -1) throw new Error("Ticket not found");
  tickets[idx] = { ...tickets[idx], ...updates };
  saveTickets(tickets);
  return tickets[idx];
};

export const deleteTicket = async (id: string) => {
  await delay();
  let tickets = loadTickets();
  tickets = tickets.filter((t) => t.id !== id);
  saveTickets(tickets);
  return true;
};
