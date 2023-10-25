export function test(error, res) {
  if (error) {
    return error;
  } else {
    return res;
  }
}
export function test1(http, ...rest) {
  return http({ url: '/test/b' }).catch((err) => {
    console.log(err);
  });
}
