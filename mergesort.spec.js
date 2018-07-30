describe('Split Array function', function() {
  let mergeTrial = new mergeSort([])
  it('is able to split an array into two havles', function() {
    mergeTrial.array.push(2);
    mergeTrial.array.push(3);
    mergeTrial.array.push(1);
    mergeTrial.array.push(1);
    expect(mergeTrial.split().length).toEqual(2);
  })
})
