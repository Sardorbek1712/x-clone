import Auth from "@/components/auth";
import React from "react";

export default function Page() {
  const user = false;

  if (!user) return <Auth />;
  return <div>Page</div>;
}
