import AdminDashboard from "../Pages/adminPages/AdminDashboard";
import MasterManagement from "../Pages/adminPages/MasterManagement";
import PropertyManagement from "../Pages/adminPages/PropertyManagement";
import UserManagement from "../Pages/adminPages/UserManagement";
import {
  ADMIN_DASHBOARD,
  MASTER_MANAGEMENT,
  PROPERTY_MANAGEMENT,
  USER_MANAGEMENT,
} from "../utils/Const";

export default function PageSelector({ pageName }) {
  return (
    <>
      {pageName === ADMIN_DASHBOARD && <AdminDashboard />}
      {pageName === USER_MANAGEMENT && <UserManagement />}
      {pageName === PROPERTY_MANAGEMENT && <PropertyManagement />}
      {pageName === MASTER_MANAGEMENT && <MasterManagement />}
    </>
  );
}
