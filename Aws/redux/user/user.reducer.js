import {
  EMIT_FINISH_FIRST_LAUNCH_APP,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../ActionNames';

// interface IUserStore {
//   isLoading: boolean;
//   /**
//    * If first register app
//    *  It's will true.
//    * else
//    *  It's will false.
//    * end
//    *
//    * If true
//    *  Route to flow create multiple product
//    * else
//    *  Route to mai.
//    */
//   firstRegisterApp: boolean;
// }

const initState = {
  isLoading: false,
  firstRegisterApp: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        firstRegisterApp: true,
      };
    case REGISTER_FAILURE:
      return initState;
    case EMIT_FINISH_FIRST_LAUNCH_APP:
      return {
        ...state,
        isLoading: false,
        firstRegisterApp: false,
      };
    default:
      return state;
  }
};

export default reducer;
