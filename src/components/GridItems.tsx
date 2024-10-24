import { RxDragHandleHorizontal } from "react-icons/rx";
import { MdOutlinePushPin } from "react-icons/md";
import { MdPushPin } from "react-icons/md";
import { useState } from "react";

type GridItemProps = {
  id: string;
  children: React.ReactNode;
  toggleStatic: (id: string) => void;
};

const GridItem: React.FC<GridItemProps> = ({ id, children, toggleStatic }) => {
  const [isPinned, setIsPinned] = useState(false);

  const onPinnedClick = () => {
    console.log(id);
    toggleStatic(id);
    setIsPinned(!isPinned);
  };

  return (
    <div draggable="false" className="rounded-lg bg-slate-200 grid-item h-full">
      <div className="absolute right-4 top-2 custom-drggable-handle text-xs cursor-move">
        <RxDragHandleHorizontal className="h-5 w-5" />
      </div>
      <div className="absolute right-4 top-8 text-xs cursor-pointer">
        {isPinned ? (
          <MdPushPin className="h-5 w-5 text-red-600" onClick={onPinnedClick} />
        ) : (
          <MdOutlinePushPin
            className={`h-5 w-5 text-gray-500`}
            onClick={onPinnedClick}
          />
        )}
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
};

export default GridItem;
