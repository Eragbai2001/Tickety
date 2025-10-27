"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import Cards from "@/components/Cards/page";
import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import { loadTickets, Ticket } from "@/lib/tickets";
import { signOut } from "@/lib/auth";

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

const Layout = ({ title = "Dashboard", children }: LayoutProps) => {
  const [toggle, setToggle] = useState(false);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const router = useRouter();

  useEffect(() => {
    try {
      setTickets(loadTickets());
    } catch (e) {
      setTickets([]);
    }
  }, []);

  const total = tickets.length;
  const open = tickets.filter((t) => t.salesStatus !== "Sold Out").length;
  const resolved = tickets.filter((t) => t.salesStatus === "Sold Out").length;

  const stats = [
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
      image: "/images/icons/loader.svg",
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

  const handleLogout = () => {
    try {
      signOut();
    } catch (e) {
      // ignore
    }
    router.push("/sign-in");
  };

  return (
    <div
      className={`pt-18 max-md:pt-16.25 ${
        toggle ? "pl-18" : "pl-69 max-xl:pl-0"
      }`}>
      <Sidebar
        toggle={toggle}
        visible={visibleSidebar}
        onToggle={() => setToggle(!toggle)}
        onClose={() => setVisibleSidebar(false)}
      />
      <Header
        title={title}
        toggle={toggle}
        onShow={() => setVisibleSidebar(true)}
      />
      <div
        className={`hidden fixed inset-0 z-25 bg-gray-900/50 backdrop-blur-[0.125rem] transition-all duration-300 max-xl:block ${
          visibleSidebar ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => {
          setVisibleSidebar(false);
        }}></div>
      <div className="px-8 py-6 max-md:px-6">
        {children ? (
          children
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-h4">Dashboard</h2>
                <div className="text-gray-500 text-body-md">
                  Overview summary
                </div>
              </div>
              <div className="flex gap-3">
                <Button as="link" href="/ticket" isSecondary>
                  Manage Tickets
                </Button>
                <Button isRed onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
            <Cards items={stats} />
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
