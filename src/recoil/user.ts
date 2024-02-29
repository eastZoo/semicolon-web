import { atom, selector } from "recoil";
import { v1 } from "uuid";

export const userState = atom<any>({
  key: `user/${v1()}`,
  default: null,
});

export const userSelector = selector({
  key: `userSelector/${v1()}`,
  get: ({ get }) => {
    return get(userState);
  },
  set: ({ set }, user) => {
    console.log("set", user);
    set(userState, user);
  },
});
