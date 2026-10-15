function solution(num_list) {
  return num_list.length > 10
    ? num_list.reduce((sum, value) => sum + value, 0)
    : num_list.reduce((prod, value) => prod * value, 1);
}
