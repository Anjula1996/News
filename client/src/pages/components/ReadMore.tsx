/**
 * created by: Anjula Madusanka
 * descritpion: dispaly news in detail after click on the read more button on each news
 */
import React from "react";
import Modal from "react-modal";

interface ReadMoreProps {
  isReadMore: boolean;
  data: any;
  handleClose: () => void;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const ReadMoreModal: React.FC<ReadMoreProps> = (props) => {
  const { isReadMore, data, handleClose } = props;
  return (
    <Modal isOpen={isReadMore} style={customStyles}>
      {/* header */}
      <div className="flex items-center">
        <div>
          <p
            className="
            h-14 
            w-full 
            text-xl 
            font-bold 
            underline
            p-2"
          >
            {data.title}
          </p>
        </div>
        <div>
          <button
            className="
                absolute 
                m-2 
                rounded-lg 
                top-0 
                right-5 
                text-[25px]"
            onClick={handleClose}
          >
            x
          </button>
        </div>
      </div>
      {/* body */}
      <div
        className="
            grid 
            grid-cols-1 
            gap-4 
            place-items-center
            m-4
           "
      >
        <img
          src={data?.imageUrl}
          alt=""
          className="
            h-80
            w-auto 
            rounded-lg"
        />
      </div>
      <div className="p-4">
        <p className="text-[14px] text-[#A8A8A8] mb-4">
          {data?.date} | {data?.author}
        </p>
        <p className="shadow-inner">{data?.content}</p>
      </div>
    </Modal>
  );
};
