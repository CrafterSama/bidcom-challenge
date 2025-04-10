"use client";

import NavBar from "@/components/layouts/common/navbar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full container mx-auto min-h-screen">
      <NavBar />
      <main className="container max-w-screen-xl mx-auto grid place-items-center h-[80vh] px-4 md:px-2 py-4">
        {children}
      </main>
    </div>
  );
};

export default SiteLayout;
