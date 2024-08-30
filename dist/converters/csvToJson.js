"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csvToJson = csvToJson;
function csvToJson(csvString) {
  const [headerLine, ...rows] = csvString.trim().split('\n');
  const headers = headerLine.split(',');
  return rows.map(row => {
    const values = row.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
}