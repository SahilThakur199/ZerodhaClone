import React, { useState } from "react";

function CreateTicket({ first, second }) {
  const [selected, setSelected] = useState(first);
  const [open, setOpen] = useState(false);
  const options = [...second];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-10">
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              width: "80%",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              background: "#fff",
              position: "relative"
            }}
            onClick={() => setOpen(!open)}
          >
            <span style={{ textAlign: "left", flex: 1 }}>{selected}</span>
            <span style={{ marginLeft: "10px" }}>
              ▼
            </span>
            {open && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "0 0 6px 6px",
                  zIndex: 10
                }}
              >
                {options.map((option) => (
                  <div
                    key={option}
                    style={{
                      padding: "10px 16px",
                      textAlign: "left",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default CreateTicket;