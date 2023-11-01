// Processes allTables JSON file into Mongo table objects

import { Table } from "../models/table.js";
import fs from "fs";

const tableData = fs.readFileSync(__dirname + "/allTables.json");
tableData = JSON.parse(tableData).tables;

const allTables = [];
tableData.forEach(table => {
  allTables.push(new Table(table));
});

module.exports = allTables;

