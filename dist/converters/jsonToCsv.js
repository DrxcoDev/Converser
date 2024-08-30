"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonToCsv = jsonToCsv;
function jsonToCsv(jsonData) {
  if (jsonData.length === 0) return '';
  const headers = Object.keys(jsonData[0]);
  const csvRows = [headers.join(',')]; // Añadir la cabecera

  for (const obj of jsonData) {
    const row = headers.map(header => obj[header]);
    csvRows.push(row.join(','));
  }
  return csvRows.join('\n');
}