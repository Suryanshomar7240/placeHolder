import React from 'react';
import './FeedCard.css';
import { db } from '../firebase';
import {doc,updateDoc} from 'firebase/firestore';

const FeedCard = (props) => {
    const handleClick=async ()=>{
      // const q = query(collection(db, "food"), where("id", "==", props.id));

      //   const querySnapshot = await getDoc(q);
      //   let docID = '';
      //   querySnapshot.forEach((doc) => {
      //     docID = doc.id;
      //   });
        // console.log(user);
        console.log("heyey");
        const user = doc(db, "food", props.id);
        console.log(user);

        // Set the "capital" field of the city 'DC'
        await updateDoc(user, {
            status:'closed'
        }).then((res)=>window.location="/");
      }
  return (
    <div className='card'>
        <div className='card__body'>
            <img src={props.img} className="card__image" />
            {/* <div className='card__title'>{props.resturantname}</div> */}
            <h2 className='card__title'>{props.name}</h2>
            <div className='feedcard-resturant'>Quantity: {props.quantity}</div>
            <div className='feedcard-resturant'>{props.type}</div>
        </div>
        <button className= {`card__btn`} type="submit" onClick={()=>handleClick()}>
            Take food
        </button>
    </div>
  );
}

export default FeedCard;