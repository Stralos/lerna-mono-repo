import { User } from "@walnut/models";

export function greeter(user: User) {
  const { name, lastName } = user;
  return `Hello, ${name} ${lastName}, how was your day ?`;
}
