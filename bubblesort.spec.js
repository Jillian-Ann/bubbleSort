describe('Bubble Sort', function() {
  let trial = new bubbleSort([])
  beforeAll(function() {
    spyOn(trial, 'swap').and.callThrough();
  })
  it('handles an empty array', function() {
    expect( trial.sort() ).toEqual( [] );
  });
  it('uses the correct amount of swaps', function() {
    trial.array.push(2);
    trial.array.push(3);
    trial.array.push(1);
    expect(trial.swap.calls.count()).toEqual(2)
  })
});
