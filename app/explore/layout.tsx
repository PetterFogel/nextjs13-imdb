import { ReactNode } from "react";
import Filter from "@/components/filter/Index";

const ExploreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col gap-6 md:flex-row">
      <Filter />
      {children}
    </main>
  );
};

export default ExploreLayout;
