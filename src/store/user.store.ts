import { defineStore } from "pinia";

type State = {
  // 用户token
  token: string;
  // UserId
  id: string;
};

const initialState: State = {
  id: "",
  token: "",
};

export const useUserStore = defineStore("user", {
  state: () => initialState,
  actions: {
    /**
     * 更新系统状态
     */
    updateToken(token: string) {
      this.token = token;
    },
    updateUserInfo(user: { id: string; name: string }) {
      this.id = user.id;
    },
  },
  persist: true,
});
