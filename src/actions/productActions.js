import { toastActions } from "../store/toastSlice";
import catchError from "../utils/catchError";
import * as api from "../utils/api";
import { productActions } from "../store/productSlice";

export const getAll = (token, query) => async (dispatch) => {
  try {
    // SET IS LOADING
    dispatch(productActions.clearAll());
    dispatch(productActions.getAll());

    const { data } = await api.fetchAll(
      `/products${query ? `?${query}` : ""}`,
      token
    );

    // GET SUCCEED
    dispatch(productActions.getAllSuccess(data.data));
  } catch (error) {
    // GET FAILED
    const err = catchError(error);
    dispatch(toastActions.add(err));
    dispatch(productActions.getAllFailure());
  }
};
