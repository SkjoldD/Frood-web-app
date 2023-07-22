import { HoursdayTransformerPipe } from './hoursday-transformer.pipe';

describe('HoursdayTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new HoursdayTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
