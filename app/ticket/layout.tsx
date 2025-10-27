"use client";
import "../fig.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="legacy-theme">{children}</div>;
}
