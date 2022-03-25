import { isFunction } from "./utils";

function createAction(type, prepared) {
  function actionCreator(args) {
    if (isFunction(prepared)) {
      return {
        type,
        ...prepared(args),
      };
    } else {
      return {
        type,
        payload: args,
      };
    }
  }

  actionCreator.type = type;

  return actionCreator;
}

export default createAction;
