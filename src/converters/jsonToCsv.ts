export function jsonToCsv(jsonData: Record<string, any>[]): string {
    if (jsonData.length === 0) return '';
  
    const headers = Object.keys(jsonData[0]);
    const csvRows = [headers.join(',')]; // Añadir la cabecera
  
    for (const obj of jsonData) {
      const row = headers.map(header => obj[header]);
      csvRows.push(row.join(','));
    }
  
    return csvRows.join('\n');
  }
  