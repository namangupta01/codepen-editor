import { NoSanitizationPipe } from './no-sanitization.pipe';

describe('NoSanitizationPipe', () => {
  it('create an instance', () => {
    const pipe = new NoSanitizationPipe();
    expect(pipe).toBeTruthy();
  });
});
