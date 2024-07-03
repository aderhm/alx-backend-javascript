/// <reference path="crud.d.ts" />

import { RowID, RowElement } from 'interface.ts';

import * as CRUD from './crud.js';

const row: RowElement {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow();

const updatedRow: RowElement => {
  CRUD.updateRow(newRowID, row.age = 23);
}

deleteRow(newRowID);
