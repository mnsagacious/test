import React from "react";

const Content = () => {
  const date = "30 May 2022";
  return (
    <>
      <div className="content-headers">
        <div className="text-header">
          <p>Today's Leadersboard</p>
        </div>
        <div className="flexcontent ">
          <div>
            <p className="tabletext">{date}</p>
          </div>
          <div className="dot">
        
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "4px 10px",
                backgroundColor:'#9BFF00',
                color:'#000000',
                borderRadius: '5px',
                textTransform:'uppercase',
                fontFamily:'Inter'
              }}
            >
              <p className="flextext2">Submissions Open</p>
            </div>
          </div>
          <div className="dot">

          </div>
          <div>
            <p className="tabletext">11:34</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
