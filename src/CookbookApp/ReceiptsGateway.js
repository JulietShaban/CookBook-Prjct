const baseUrl = "https://63627aaf37f2167d6f65814c.mockapi.io/api/v1/receipts";

export const createReceipt = (receiptData) => {
  console.log(receiptData);
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
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export const updateReceipt = (receiptId, receiptData) => {
  console.log("receiptData");
  return fetch(`${baseUrl}/${receiptId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;utc-8",
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
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete the receipt");
      }
      return response.json();
    })
    .then((res) => {
      return res;
    });
};
