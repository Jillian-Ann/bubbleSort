describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(bubbleSort, 'swap').and.callThrough();
  })
  it('handles an empty array', function() {
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('uses the correct amount of swaps', function() {
    bubbleSort.sort([2, 3, 1]);
    expect(bubbleSort.swap.calls.count()).toEqual(2)
  })
});
