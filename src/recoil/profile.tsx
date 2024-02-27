import { atom, selector } from "recoil";
import { v1 } from "uuid";

export const profileState = atom<any>({
  key: `profile/${v1()}`,
  default: null,
});

export const profileSelector = selector({
  key: `profileSelector/${v1()}`,
  get: ({ get }) => {
    return get(profileState);
  },
  set: ({ set }, profile) => {
    console.log("set", profile);
    set(profileState, profile);
  },
});
