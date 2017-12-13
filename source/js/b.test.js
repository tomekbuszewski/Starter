import f from './b';

describe('Test', () => {
  it ('should run properly', () => {
    expect(f()).toBe('I am imported');
  });
});
