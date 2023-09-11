import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../../redux/utils/apiActions"; // Adjust path as needed

export default function ApiHandler({
  method,
  url,
  data = null,
  headers = null,
  children,
  user, 
}) {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);

  let uurl = url;
  if (user) {
    uurl = url + "?id=" + userProfile._id + "&role=" + userProfile.role;
  }
  const doFetch = useCallback(() => {
    const options = {
      url: uurl,
      method: method,
      headers: headers,
      data: data,
    };
    dispatch(callApi(options));
  }, [dispatch, uurl, method, headers, data]);

  // If there are no children, call the API immediately
  if (!children) {
    doFetch();
    return null;
  }

  // If there are children, pass down the doFetch function
  return children(doFetch);
}
