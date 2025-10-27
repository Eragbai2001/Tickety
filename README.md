# 🎟️ Tickety

A modern ticket management dashboard built with **Next.js (App Router)** and **Tailwind CSS**.  
Tickety provides a simple admin-style interface for managing tickets, viewing summary statistics, and exploring UI layout best practices.  
Authentication and ticket data are simulated using **localStorage**, making this ideal for demos, prototypes, or frontend challenges.

---

## 🚀 Features

- 🏠 **Landing Page** — Clean and responsive entry page for the app  
- 🔐 **Local Authentication** — Simulated login system powered by `localStorage`  
- 📊 **Dashboard Overview** — Displays total, open, and resolved tickets with color-coded status cards  
- 🎫 **Ticket Management** — Create, view, and update tickets locally  
- 🌙 **Modern UI** — Built with Tailwind CSS and responsive design principles  
- ⚡ **Next.js App Router** — Fast routing and structured file-based pages

---

## 📸 Screenshot

![Tickety Dashboard Screenshot](./image.png)

---

## 🧰 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State & Storage:** localStorage (mock data persistence)
- **Language:** TypeScript
- **Package Manager:** pnpm

---

## 🏗️ Getting Started

### Prerequisites

- Node.js 18+  
- pnpm (preferred) — or npm/yarn

### Installation

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm -s tsc --noEmit
pnpm lint


app/
  ├── page.tsx           # Landing page
  ├── login/             # Login route
  ├── dashboard/         # Dashboard + summary cards
  ├── tickets/           # Ticket management page
components/
  ├── Card/              # Dashboard cards
  ├── Tooltip/           # Tooltip component
  ├── Button/            # Reusable button styles
lib/
  ├── auth.ts            # localStorage login helpers
  ├── tickets.ts         # localStorage-based ticket storage
public/
  └── images/            # Static assets (icons, logos)
styles/
  └── globals.css        # Tailwind and global styles
app/
  ├── page.tsx           # Landing page
  ├── login/             # Login route
  ├── dashboard/         # Dashboard + summary cards
  ├── tickets/           # Ticket management page
components/
  ├── Card/              # Dashboard cards
  ├── Tooltip/           # Tooltip component
  ├── Button/            # Reusable button styles
lib/
  ├── auth.ts            # localStorage login helpers
  ├── tickets.ts         # localStorage-based ticket storage
public/
  └── images/            # Static assets (icons, logos)
styles/
  └── globals.css        # Tailwind and global styles
