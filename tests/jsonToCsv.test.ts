import { jsonToCsv } from '../src/converters/jsonToCsv';

describe('jsonToCsv', () => {
  it('should convert JSON to CSV correctly', () => {
    const jsonData = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    const csvData = jsonToCsv(jsonData);
    expect(csvData).toBe('name,age\nJohn,30\nJane,25');
  });
});
