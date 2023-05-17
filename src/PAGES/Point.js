import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { StateContext } from './StateContext';
import { dialogActionsClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';

let arr = [];
let arr1 = [];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Point() {
    const [value, setValue] = React.useState(0);

    const boardingPoints = [
        {
            name: "Koyambedu",
            para: "Shop no,27  Flatform No 2, Private Omni Bus",
            time: 19.55,
            stop: 1,
        },
        {
            name: "Maduravoyal",
            para: "madhuravoyal erikkarai bus stop",
            time: 20.05,
            stop: 2,
        },
        {
            name: "Porur",
            para: "Porur Toll Plazza",
            time: 20.15,
            stop: 3,
        },
        {
            name: "Perungulathur",
            para: "Perungulathur Near Kamarajar Statue",
            time: 20.45,
            stop: 4,
        },
        {
            name: "Vandalur",
            para: "Vandalur Crescent Colege",
            time: 20.50,
            stop: 5,
        },
        {
            name: "Urappakkam Guru Travels",
            para: "Urappakkam Guru Travels",
            time: 20.55,
            stop: 6,
        },
    ]

    const dropingPoints = [
        {
            name: "Kuthukkal Valasai",
            para: "Kuthukkal Valasai Bus stop ",
            time: "06:40",
            stop: 1,
        },
        {
            name: "New Bus stand",
            para: "Tenkasi New Bus stand",
            time: "06:45",
            stop: 2,
        }
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {state : {edit,map} , dispatch} = React.useContext(StateContext);


    const [checked, setChecked] = React.useState(true);
    const [checking, setCheking] = React.useState(true);
   
   
    const handleChange1 = (a,b) => {
                 if(checked){
                    arr.push(a)
                    const duplicateArr = arr.filter((num, index) => arr.indexOf(num) == index);
                    arr = duplicateArr;
                  if(arr.length > 1){
                    arr.shift()
                 }
                }
            };
            const handleChange2 = (a,b) => {
                if(checking){
                   arr1.push(a)
                   const duplicateArr1 = arr1.filter((num, index) => arr1.indexOf(num) == index);
                   arr1 = duplicateArr1;
                 if(arr1.length > 1){
                   arr1.shift()
                }
               }

               arr.push(arr1);
               let z = arr.flat(10)
               dispatch({type:"REPORTER", payload:z})
           };

 
    return (
        <Box className="boxes" sx={{ width: '80%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} className='tabs' onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="BOARDING POINT"/>
                    <Tab label="DROPPING POINT"/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='point-row1'>
                    {boardingPoints.map((value, index) => {
                        return (<div className='point-flex'>
                            <div className='point-col1'>
                                {/* <Checkbox
                                
                                    onChange={handleChange1}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                /> */}
                                <input type='radio'
                                 className='inputs'
                                 name='name'
                                 onClick={() => handleChange1(value,index)}
                                />
                            </div>
                            <div className='point-col2'>
                                <h3>{value.time}</h3>
                                <p></p>
                            </div>
                            <div className='point-col3'>
                                <h3 className='point-h3'>{value.name}</h3>
                                <p>{value.para}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <p className='point-para'><span className='point-span-1'>Amount</span> <span className='point-span-2'>( Taxes will be calculated during payment )</span> <span className='point-span-3'>INR {[edit]?.map((values,index) => (values.fare * map.length))}</span></p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='point-row1'>
                    {dropingPoints.map((value, index) => {
                        return (<div className='point-flex'>
                            <div className='point-col1'>
                                {/* <Checkbox
                                    onChange={handleChange1}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                /> */}
                                <input type='radio'
                                 name='name'
                                 className='inputs'
                                 onClick={() => handleChange2(value,index)}
                                />
                            </div>
                            <div className='point-col2'>
                                <h3>{value.time}</h3>
                                <p></p>
                            </div>
                            <div className='point-col3'>
                                <h3 className='point-h3'>{value.name}</h3>
                                <p>{value.para}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <p className='point-para'><span className='point-span-1'>Amount</span> <span className='point-span-2'>( Taxes will be calculated during payment )</span><span className='point-span-3'>  INR {[edit]?.map((values,index) => (values.fare * map.length))}</span></p>
            </TabPanel>
        </Box>
    );
}
