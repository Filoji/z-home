import { Signs, type User } from "@/types";

const usersBySign: Record<string, User> = Object.keys(Signs)
  .filter((key) => isNaN(Number(key)))
  .reduce((acc, key) => {
    const sign = Signs[key as keyof typeof Signs];
    acc[key] = { username: key, sign };
    return acc;
  }, {} as Record<string, User>);

export const sampleUsers = usersBySign;