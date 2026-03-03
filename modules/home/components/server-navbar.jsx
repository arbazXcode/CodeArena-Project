import Navbar from "./navbar";
import { currentUserRole } from "@/modules/auth/actions";

export default async function ServerNavbar() {
  let userRole = null;

  try {
    userRole = await currentUserRole();
  } catch (error) {}

  return <Navbar userRole={userRole} />;
}
