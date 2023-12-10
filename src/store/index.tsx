import { proxy } from "valtio";
const state = proxy({
  page: "home",
  ip: "",
  port: 12345,
});
export default state;
