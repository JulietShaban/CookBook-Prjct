const baseUrl = "https://mockapi.io/clone/63627aaf37f2167d6f65814d/receipts";

export const createReceipt = (receiptData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;utc-8",
    },
    body: JSON.stringify(receiptData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create a receipt");
    }
  });
};

export const fetchReceiptsList = () => {
  return fetch(baseUrl, {mode: 'no-cors'})
  .then((response) => response.json())
  .then((data) => { console.log(data) })
    // .then((res) => {
    //   if (res.ok) {
    //     return res.json();
        
    //   }
    // })
    // .then((receiptsList) =>
    //   receiptsList.map(({ _id, ...receipt }) => ({
    //     id: _id,
    //     ...receipt,
    //   }))
    // );
};

export const updateReceipt = (receiptId, receiptData) => {
  return fetch(`${baseUrl}/${receiptId}`, {
    mode: 'no-cors',
    method: "PUT",
    headers: {
      "Content-Type": "application/json;utc-",
    },
    body: JSON.stringify(receiptData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update the receipt");
    }
  });
};

export const deleteReceipt = (receiptId) => {
  return fetch(`${baseUrl}/${receiptId}`, {
    mode: 'no-cors',
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete the receipt");
    }
  });
};
