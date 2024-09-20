import { Outlet } from "react-router-dom"
import NavBar from "../ui/NavBar/NavBar"

export const LayoutMain = () => {
  return (
    <div>LayoutMain
        <NavBar />
      <Outlet />
    </div>
  )
}
