import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";
import { useQuery } from "@tanstack/react-query";
import { fetchExample } from "../../api/query/exampleQuery";

const Dashboard = () => {
  const exampleQuery = useQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  });
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={false}
            imgUrl="/dot_bg.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            tagText="Loans"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            imgUrl="/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagText="Contact"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
