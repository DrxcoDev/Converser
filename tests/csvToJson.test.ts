import { csvToJson } from '../src/converters/csvToJson';

describe('csvToJson', () => {
  it('should convert CSV to JSON correctly', () => {
    const csvString = 'name,age\nJohn,30\nJane,25';
    const jsonData = csvToJson(csvString);
    expect(jsonData).toEqual([{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }]);
  });
});
