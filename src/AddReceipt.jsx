import React, { useState } from "react";

function AddReceipt() {
  console.log('hi')
  let receiptData = {
    title: "",
    text: "",
  };
  const [titleValue, setTitleValue] = useState(receiptData.title);
  const [textValue, setTextValue] = useState(receiptData.text);

  const handleCreate = () => {
    this.props.onCreate(receiptData);
    alert("Receipt is added to your CookBook, well done!");
  };

  return (
    <div>
      <input
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        type="text"
      />
      <input
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        type="text"
      />

      <button onClick={handleCreate}>Add Receipt</button>
    </div>
  );
}

export default AddReceipt;
