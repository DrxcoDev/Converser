export function csvToJson(csvString: string): Record<string, any>[] {
    const [headerLine, ...rows] = csvString.trim().split('\n');
    const headers = headerLine.split(',');
  
    return rows.map(row => {
      const values = row.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {} as Record<string, any>);
    });
  }
  