import chai from 'chai';
import InsertionSort from '../lib/insertion_sort.js';
chai.should();

describe('InsertionSort', function () {
  describe('#sort([7,3,9,1,8,5,6,2,4])', function () {
    it('should return [1,2,3,4,5,6,7,8,9]', function () {
      const insertionSort = new InsertionSort();

      insertionSort.sort([7,3,9,1,8,5,6,2,4]).should.eql([1,2,3,4,5,6,7,8,9])
    });
  });
});
