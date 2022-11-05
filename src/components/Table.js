import React from 'react'
import './table.css'
import {Data} from './Data'
import { AiOutlineDownload } from 'react-icons/ai'
import GenericTable from './GenericTable'
import { Formik, Form, FieldArray } from 'formik';
import {InputCheckBox} from './GenericTable'

/**

Requirements:

-- Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
-- The select-all checkbox should be in an unselected state if no items are selected.
-- The select-all checkbox should be in a selected state if all items are selected.
-- The select-all checkbox should be in an indeterminate state if some but not all items are selected.
-- The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
-- Clicking the select-all checkbox should select all items if none or some are selected.
-- Clicking the select-all checkbox should deselect all items if all are currently selected.
-- Status should be correctly formatted
-- Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files. 
-- Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.

**/

const TableComponent = () => {

  const handleAlertOnSubmit = (values) => {
    let alertMessage = []
    for (let selected of values.selectedItems) {
      if (selected.status === "available") {
        alertMessage.push(selected.device)
        alertMessage.push(selected.path)
      }
    }
    if (alertMessage.length === 0) {
      alert("No file available for download.")
    } else {
      alert(alertMessage.join('\n'))
    }
  }

  return (
    <>
      <Formik
        initialValues={{selectedItems: []}}
        onSubmit={values => {handleAlertOnSubmit(values)}} 
      >
        {({
          handleChange,
          handleSubmit,
          values
        }) => (
          <Form>
           <FieldArray name="selectedItems">
             {
               fieldArrayProps => {
                 const {push, remove, form} = fieldArrayProps
                 const {values: {selectedItems}} = form
                 
                 if (selectedItems.length > 0 && selectedItems.length < Data.length){
                   document.querySelector(".mastercheckbox").indeterminate = true
                 }
              
                 return (
                   <>
                    <div className="header">
                      <div className="header-elements">
                        <InputCheckBox 
                          inputClassName={"mastercheckbox"}
                          onChangeCallback={(e) => {
                            if (e.target.checked){
                              Data.filter(tdata => !(selectedItems.map(x => x.id).includes(tdata.id))).map(x => push({
                                ...x,
                                selected: true 
                              }))
                            } else {
                              Data.map(x => remove({
                                ...x,
                                selected: false
                              }))
                            }
                          }}
                        />
                      </div>
                        <div className="header-elements showselected">{selectedItems.length === 0 ? "None Selected" : <span>Selected: {selectedItems.length}</span> }</div>
                      <div className="header-elements" onClick={handleSubmit}><AiOutlineDownload /> Download Selected</div>
                    </div>

                    <GenericTable 
                      tableHeaders = {["", "Name", "Device", "Path", "Download", "Status"]} 
                      tableArray={Data} 
                      push={push}
                      remove={remove}
                      selectedItems={selectedItems}
                    />
                   
                   </>
                 )
               }
             }
           </FieldArray>
         </Form>
        )}

      </Formik>

    </>
  )
}

// CLASS COMPONENT

// class TableComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       List: Data,
//       MasterChecked: false
//     };
//   }

//   // Select/Deselect  rows

//   onMasterCheck(e) {
//     let tempList = this.state.List;
//     // Check/ UnCheck All Items
//     tempList.map((data) => (data.selected = e.target.checked));

//     const totalCheckedItems = tempList.filter((e) => e.selected).length;
//     //Update Selected Header
//     let selectedheader = document.querySelector('.header .showselected');
//     document.querySelector(".mastercheckbox").indeterminate = false;

//     selectedheader.innerHTML = `Selected ${totalCheckedItems}`
//     if (totalCheckedItems < 1) {
//       selectedheader.innerHTML = `None Selected`
//     }

//     //Update State
//     this.setState({
//       MasterChecked: e.target.checked,
//       List: tempList
//     });
//   }


//   // Update List Item's state and Master Checkbox State
//   onItemCheck(e, item) {
//     let tempList = this.state.List;
//     tempList.map((data) => {
//       if (data.id === item.id) {
//         data.selected = e.target.checked;
//       }
//       return data;
//     });

//     //Master Checkbox State
//     const totalItems = this.state.List.length;
//     const totalCheckedItems = tempList.filter((e) => e.selected).length;    

//     //Update Selected Count in the Header
//     let selectedheader = document.querySelector('.header .showselected');
//     selectedheader.innerHTML = `Selected ${totalCheckedItems}`
//     document.querySelector(".mastercheckbox").indeterminate = true;
    
//     if (totalCheckedItems < 1) {
//       selectedheader.innerHTML = `None Selected`
//       document.querySelector(".mastercheckbox").indeterminate = false;
//     }

//     // remove indeterminate if all have been manually selected
//     let totalcheckbox = document.querySelectorAll('input').length;
//     if (totalCheckedItems === totalcheckbox - 1) {
//       document.querySelector(".mastercheckbox").indeterminate = false;
//     }
    
//     // Update State
//     this.setState({
//       MasterChecked: totalItems === totalCheckedItems,
//       List: tempList
//     });

//   }

//   //Alert available elements when Download is clicked
//   onDownload(){
//     let tempList = this.state.List;
//     let CheckedItems = tempList.filter((e) => e.selected);
//     let results = [];
//     CheckedItems.forEach((element) => {
//       if (element.status === 'available'){
//         results.push(element.device);
//         results.push(element.path);
//       }
//     })
//     if (results.length === 0 ){
//       alert("No file available for download")
//     } else{
//       alert(results.join('\n'))
//     }
//      // Update State
//      this.setState({
//        List: tempList
//      });
//   }
 
//  //RENDER HTML

//   render() {
//     return ( 
//     <div>
        

//         <div className="header">
//           <div className="header-elements">
//             <input 
//             type = "checkbox"
//             className="mastercheckbox"
//             checked = {this.state.MasterChecked} 
//             onChange = {(e) => this.onMasterCheck(e) }/> 
//           </div>
//           <div className="header-elements showselected">None Selected</div>
//           <div className="header-elements" onClick={(e) => this.onDownload()}>
//             <AiOutlineDownload />   Download Selected</div>
//         </div>
            
        
//         <div>
//           <table className="table-container">
//             <thead>
//               <tr>
//                 <th></th> 
//                 <th>Name</th> 
//                 <th>Device</th> 
//                 <th>Path</th> 
//                 <th>Download</th>
//                 <th>Status</th> 
//               </tr> 
//             </thead> 
            
//             <tbody className="table-body"> 
//               {this.state.List.map((data) => ( 
//                   <tr key = {data.id} className = {data.selected ? "selected" : ""}>
//                     <th>
//                       <input type = "checkbox"
//                         checked = {data.selected}
//                         onChange = {(e) => this.onItemCheck(e, data)}/> 
//                     </th> 
//                     <td>{data.name}</td> 
//                     <td> {data.device}</td> 
//                     <td>{data.path} </td> 
//                     <td className={`${data.isAvailable ? "available" : "notavailable"}`}></td>
//                     <td>{data.status}</td> 
//                   </tr>
//                   )
//                 )
//               } 
//             </tbody> 
//          </table> 
//         </div> 

        
//       </div>
//     );
//   }
// }

export default TableComponent;