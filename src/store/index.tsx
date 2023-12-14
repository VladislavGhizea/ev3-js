import { proxy } from "valtio";
const state = proxy({
  page: "home",
  ip: "",
  port: 12345,
  batteria: 0,
});
export default state;
