import { useDispatch, useSelector } from "react-redux";
import { toggleSlicebar } from "../utils/slideBarSlice";

const useSlideBar = () => {
  const dispatch = useDispatch();
  const slideBarStatus = useSelector((store) => store.slideBar?.slideBarState);
  const handleSlideBar = () => {
    dispatch(toggleSlicebar(!slideBarStatus));
  };
  return handleSlideBar;
};

export default useSlideBar;
