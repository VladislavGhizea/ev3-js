import { LogoEv3 } from "@/assets";
import state from "@/store";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";
import { useSnapshot } from "valtio";
interface NavbarHomeProps {
  connesso?: boolean;
  info?: boolean;
}
const NavbarHome: React.FC<NavbarHomeProps> = ({
  connesso = false,
  info = false,
}) => {
  const snap = useSnapshot(state);
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <LogoEv3 />
        <p className="font-bold text-inherit">EV3 Remote</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={!info}>
          <Link
            href="#"
            aria-current={info ? "page" : undefined}
            color={info ? "foreground" : undefined}
            onClick={() => (state.page = "home")}
          >
            Connetti
          </Link>
        </NavbarItem>
        <NavbarItem isActive={info}>
          <Link
            href="#"
            aria-current={!info ? "page" : undefined}
            color={!info ? "foreground" : undefined}
            onClick={() => (state.page = "info")}
          >
            Info
          </Link>
        </NavbarItem>
      </NavbarContent>
      {connesso ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <p>{"Connesso a " + snap.ip + ":" + snap.port}</p>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem></NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
};
export default NavbarHome;
