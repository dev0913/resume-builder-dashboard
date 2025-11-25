



"use client";

import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import { FileText, Layout, Settings, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const { openUserProfile } = useClerk();
  const routes = [
    {
      icon: Layout,
      label: "Dashboard",
      href: "/dashboard",
      onClick: () => router.push("/dashboard")
    },
    {
      icon: FileText,
      label: "Templates",
      onClick: () => router.push("/dashboard/templates"),
      active: pathname.startsWith("/dashboard/templates"),
    },
    {
      icon: Settings,
      label: "Settings",
      onClick: () => openUserProfile(),
      active: false,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center p-4">
          <h1 className="text-xl font-bold">Resume Builder</h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.label}>
              <SidebarMenuButton isActive={route.active} asChild>
                <button
                  className="flex items-center w-full text-left"
                  onClick={route.onClick}
                >
                  <route.icon className="h-5 w-5 mr-2" />
                  <span>{route.label}</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="px-4 mt-6">
          <Button
            className="w-full"
            size="sm"
            onClick={() => router.push("/resume")}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Create New Resume
          </Button>
        </div>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 border-t flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserButton />
            <div>
              <p className="text-sm font-medium truncate max-w-[120px]">
                {user ? `${user.firstName} ${user.lastName}` : "User"}
              </p>
              <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                {user?.emailAddresses?.[0]?.emailAddress || "user@example.com"}
              </p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
