import { deleted } from "../actions";

const deleteCompleted = (completed) => {
  return async (dispatch) => {
    await completed.forEach(async (todo) => {
      await fetch(`http://localhost:9000/todos/${todo.id}`, {
        method: "DELETE",
      });
      dispatch(deleted(todo.id));
    });
  };
};

export default deleteCompleted;
