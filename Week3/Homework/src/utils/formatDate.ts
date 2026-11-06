export const formatDate = (dateString: string) => {
  if (!dateString) return "개봉일 미정";

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "개봉일 미정";

  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
