// @flow strict


import * as React from 'react';
import '../App.css';


function ListItem({item, onDelete, onCheckedChange}) {
    const [checkedValue,setCheckedValue] = React.useState(item.checked);
    const handleCheckboxChange = (e) => {
        let obj = e.target.checked;
        setCheckedValue(obj);
        if (onCheckedChange) {
            onCheckedChange({ ...item, checked: obj });
        }
    };

    return (

        
        <div id='list' >
            <input type='checkbox' checked={checkedValue} onChange={handleCheckboxChange} className='list' style={{width:'20px',height:'30px', display:'center',marginTop:'5px', borderRadius:'20px'}} />
            <div style={{marginTop:'6px', textDecoration: checkedValue ? 'line-through' : 'none',fontFamily:'Times New Roman', fontSize:'20px'}}>
                
                {item.info}
            
            </div>
            <button  onClick={onDelete} style={{height:'25px',marginTop:'8px',marginBottom:'15px', borderRadius:'20px', borderBlockColor:'transparent',backgroundColor:'lightpurple'}}className='clearButton'>X</button>
        </div>
    );
};

export default ListItem;