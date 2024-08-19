import { SidebarLayout } from '@/components/sidebar-layout'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

export function Dashboard({ children }) {
  return (
    <SidebarLayout
      sidebar={<Sidebar>{/* Sidebar menu */}</Sidebar>}
      navbar={<Navbar>{/* Navbar for mobile screens */}</Navbar>}
    >
      {/* Your page content */}
    </SidebarLayout>
  )
}

export default Dashboard;