import { expect } from 'chai';
import isMax from './';

describe('isMax', () => {
  it('should return true', () => {
    expect(isMax('Hello', 5)).to.be.true;
    expect(isMax('Hello World!', 15)).to.be.true;
    expect(isMax('Hi', 3)).to.be.true;
  });

  it('should return false', () => {
    expect(isMax('Hello', 4)).to.be.false;
    expect(isMax('Hi', 1)).to.be.false;
  });
});
