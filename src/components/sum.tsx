function sum(a: number, b: number) {
  return a + b;
}
//module.exports는 commonJS에서 많이 쓰인다.
//export default는 ts에서 권장된다.
// module.exports = sum;
export default sum;
