import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { DashboardSidebar } from "@/components/resume/DashBoardSideBar"
import DashBoardHeader from "@/components/includes/DashboardHeader"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider defaultOpen>
            <DashboardSidebar />
            
            <main className="w-full flex flex-col">
              
                
                {children}
            </main>
        </SidebarProvider>
    )
}
