function solution(num_list) {
  const odd = Number(num_list.filter((value) => value % 2 !== 0).join(""));
  const even = Number(num_list.filter((value) => value % 2 === 0).join(""));

  return odd + even;
}
