import { greeter } from "@walnut/greeter";
import { User } from "@walnut/models";
import moment from "moment";

export function getDate(date: Date) {
  return moment(date).format("YYYY--MM--DD");
}

export function greetWithTime(date: Date, user: User) {
  return `${greeter(user)}. The current time is ${getDate(date)}`;
}
