import { defineStore } from 'pinia'

export const loginStore = defineStore('main', {
  state: () => {
    return {
      islogin:true
    }
  },
  // 开启持久化
  persist: {
    enabled: true, // 启用
    strategies: [
      // storage 可选localStorage或sessionStorage
      // paths 给指定数据持久化
      { key: 'user', storage: localStorage, paths: ['islogin'] }
    ]
  },
  getters: {
  },
  actions: {
  }
})
