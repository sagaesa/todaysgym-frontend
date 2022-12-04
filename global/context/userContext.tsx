import React, { createContext, useState } from "react";

export type PreferExercises =
  | "헬스"
  | "주짓수"
  | "무에타이"
  | "극진 가라데"
  | "태권도"
  | "삼보"
  | "절권도"
  | "킥복싱"
  | "우슈"
  | "프로 레슬링"
  | "복싱"
  | "쿠도";

export interface UserProps {
  id?: string;
  password?: string;
  preferExercises?: PreferExercises[];
}

export const UserContext = createContext<{
  user?: UserProps;
  dispatch: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
}>({ dispatch: () => {} });

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [userProps, setUserProps] = useState<UserProps | undefined>(undefined);
  const value = { user: userProps, dispatch: setUserProps };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const UserConsumer = UserContext.Consumer;
