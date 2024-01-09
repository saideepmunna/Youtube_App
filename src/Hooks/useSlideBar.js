import { useDispatch, useSelector } from "react-redux";
import { toggleSlicebar } from "../utils/slideBarSlice";

const useSlideBar = () => {
  const dispatch = useDispatch();
  const slideBarStatus = useSelector((store) => store.slideBar?.slideBarState) || false;
  const handleSlideBar = () => {
    dispatch(toggleSlicebar(!slideBarStatus));
  };
  return {handleSlideBar,slideBarStatus};
};

export default useSlideBar;
