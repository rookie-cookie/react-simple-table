import React from 'react'

type tableData = {
  id: number,
  selected: boolean,
  name: string,
  device: string,
  path: string,
  status: string,
  isAvailable: boolean
}

type GenericTableProps = {
  tableArray: tableData[],
  tableHeaders: string[],
  push: (obj: any) => void
  remove: (obj: any) => void
  selectedItems: tableData[]
}

/**
 * Returns a simple table with checkbox for selection
 * @param tableHeaders - header for the table
 * @param tableArray - contains table data 
 * @param push - formik's array helper function to push data to array 
 * @param remove - formik's array helper function to remove data from array
 * @param selectedItems - all selected items 
 */
const GenericTable = ({ tableHeaders, tableArray, push, remove, selectedItems }: GenericTableProps) => {

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            {tableHeaders.map((header,idx) => {
              return (
              <th key={idx}>{header}</th>
              )
            })}
          </tr>
        </thead>

        <tbody className="table-body">
          {tableArray.map((tdata,idx) => {
            return (
              <tr key={tdata.id} className={tdata.selected ? "selected" : ""}>
                <td>
                  <InputCheckBox 
                    onChangeCallback={(e) => {
                      if (e.target.checked) {
                        tableArray[idx].selected = true
                        push({
                          ...tdata,
                          selected: true
                        })
                      } else {
                        tableArray[idx].selected = false
                        const index = selectedItems.map(x => x.id).indexOf(tdata.id)
                        remove(index)
                      }
                    }}
                    checkedStatus={selectedItems.map(x => x.id).includes(tdata.id)}
                  />
                </td>
                <td>{tdata.name}</td>
                <td> {tdata.device}</td>
                <td>{tdata.path} </td>
                <td className={`${tdata.isAvailable ? "available" : "notavailable"}`}></td>
                <td>{tdata.status}</td>
              </tr>
            )
          })}
          
        </tbody> 
      </table>

    </div>
  )
}

export default GenericTable



type InputCheckBoxProps = { 
  onChangeCallback?: (e: any) => void, 
  inputClassName?: string,
  checkedStatus?: boolean
}
/**
 * Return input type checkbox component
 * @param param0 
 */
export const InputCheckBox = ({ onChangeCallback, inputClassName, checkedStatus}: InputCheckBoxProps) => {
  return (
    <input className={inputClassName} type="checkbox" onChange={onChangeCallback} checked={checkedStatus} />
  )
}