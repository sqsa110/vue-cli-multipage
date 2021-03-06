import {
  CHANGE_USER_NAME,
  USER_NAME_INIT
} from './mutation-type'

const mutations = {
  [CHANGE_USER_NAME] (state, val) {
    state.user_name = val
  },
  [USER_NAME_INIT] (state) {
    state.user_name = ''
  }
}

export default mutations
