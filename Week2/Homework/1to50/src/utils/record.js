const STORAGE_KEY = "records";

export const getRecords = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveRecord = (record) => {
  const records = getRecords();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...records, record]));
};

export const clearRecords = () => {
  localStorage.removeItem(STORAGE_KEY);
};
