import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData.json'
import Cart from '../Cart/Cart';
import PlayerDataShow from '../PlayerDataShow/PlayerDataShow';

const DataLoad = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        setData(FakeData);
    }, [])

const [dataRecived,setDataRecived] = useState([])


    const handelClick=(datRecived) =>{
        const newCart=[...dataRecived,datRecived]
          setDataRecived(newCart);
    }


    return (
        <div>
            
            <div className="dataShow">
                {
                    Data.map(dt => <PlayerDataShow PlayerData={dt}dataPass={handelClick}key={dt.id}></PlayerDataShow>)
                }
            </div>
            <div className="cart">
                <Cart dataPassed={dataRecived}></Cart>
            </div>
        </div>
    );
};

export default DataLoad;
