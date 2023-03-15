import React from "react";
import { useState } from "react";
import { Trash } from "iconsax-react";

const DeleteOrderPopUp= (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-3" />
            <div className="align-item-center ">
            <div className="mt-5 ml-8 pl-2">
            <Trash className="popupIcon " color="#264B5D" />
            </div>
           
                <div className="mt-4 mr-2 PopUpBoldText" >
                Delete order
                </div>

                <div className="mt-2 PopUpNormalText1">
                Are you sure you wish to delete this order? This <br></br>
                </div>

                <div className=" PopUpNormalText1">
                action is not reversible. <br></br>
                </div>
            </div>
           
        </>
    )
}
export default DeleteOrderPopUp;