const baseUrl = "https://63627aaf37f2167d6f65814c.mockapi.io/receipts";

export const createReceipt = (data) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res;
      }
    })
    .then((res) => res.json());
};

export const fetchReceiptsList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export const updateReceipt = (receiptId, receiptData) => {
  
  return fetch(`${baseUrl}/${receiptId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;utc-8",
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
