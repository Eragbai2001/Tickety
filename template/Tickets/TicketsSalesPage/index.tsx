"use client";

import Layout from "@/app/dashboard/page";
import Breadcrumbs from "@/components/Breadcrumbs/page";
import Button from "@/components/Button/page";
import Cards from "@/components/Cards/page";
import AttendeeListTable from "./AttendeeListTable";

import { stats } from "./stats";

const TicketsSalesPage = () => {
  return (
    <Layout title="Tickets Sales">
      <Breadcrumbs items={["Management", "Tickets"]}>
        <Button className="max-md:w-full" isSecondary isMedium>
          Export CSV
        </Button>
      </Breadcrumbs>
      <Cards items={stats} />
      <AttendeeListTable />
    </Layout>
  );
};

export default TicketsSalesPage;
