import { createContext, useContext, useState, type ReactNode } from "react";
import type { SignUpFormData } from "../types/SignUpFormData";

type UserContextValue = {
  user: SignUpFormData | null;
  setUser: (user: SignUpFormData) => void;
};
 
const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SignUpFormData | null>(null);
 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}


export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside a <UserProvider>");
  }
  return context;
}
