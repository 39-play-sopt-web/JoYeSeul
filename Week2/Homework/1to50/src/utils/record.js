const STORAGE_KEY = "records";

export const getRecords = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
};

export const saveRecord = (record) => {
  const records = getRecords();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...records, record]));
};

export const clearRecords = () => {
  localStorage.removeItem(STORAGE_KEY);
};
