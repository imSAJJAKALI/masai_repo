import { useSelector } from "react-redux";

export const WatchListPage = () => {
  const watchData=useSelector((store)=>store.watchReducer.wathlist)
  console.log(watchData)
  return (
    <div>
      <div data-testid="watch-list">Watch list</div>
    </div>
  );
};
