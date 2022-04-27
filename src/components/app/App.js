import { Fragment, useMemo, useState, useCallback } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./App.css";
import {
  GoldMedalCellRenderer,
  SilverMedalCellRenderer,
  BronzeMedalCellRenderer,
} from "../cell-renderers/MedalCellRenderers";
import { AgGridReact } from "ag-grid-react";
import { olympicWinners } from "../../data/olympic-winners";

function App() {
  const [rowData, setRowData] = useState();
  const [columnDefs] = useState([
    { field: "athlete" },
    { field: "year" },
    { field: "gold", cellRendererFramework: GoldMedalCellRenderer },
    { field: "silver", cellRendererFramework: SilverMedalCellRenderer },
    { field: "bronze", cellRendererFramework: BronzeMedalCellRenderer },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
      wrapText: true,
      autoHeight: true,
    };
  }, []);

  const onGridReady = useCallback(() => {
    setTimeout(() => {
      setRowData(olympicWinners);
    }, 1000)

  }, []);

  return (
    <Fragment>
      <header>Ag-Grid line-break test (V26 LTS)</header>
      <main>
        <div className="container">
          <div className="ag-theme-alpine">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
            ></AgGridReact>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;