import { toastActions } from "../store/toastSlice";
import catchError from "../utils/catchError";
import * as api from "../utils/api";
import { categoryActions } from "../store/categorySlice";

export const getAll = (token, query) => async (dispatch) => {
  try {
    // SET IS LOADING
    dispatch(categoryActions.clearAll());
    dispatch(categoryActions.getAll());

    const { data } = await api.fetchAll(
      `/categories${query ? `?${query}` : ""}`,
      token
    );

    // GET SUCCEED
    dispatch(categoryActions.getAllSuccess(data.data));
  } catch (error) {
    // GET FAILED
    const err = catchError(error);
    dispatch(toastActions.add(err));
    dispatch(categoryActions.getAllFailure());
  }
};
