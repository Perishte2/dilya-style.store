
import React, {useState} from 'react';

// poluchaem i prinimaem 4erez props nawi dannye
const EditContacts = (props) => {
    //sohranyem promejutochnye dannye a imenno object 
    //kotoryi hotim izmenit
    let [name,setName]=useState(props.editContact.name);
    let [comment,setComment]=useState(props.editContact.comment);
    


    //kopiruem staryi object v novyi 
    
   function handleSaveClick(){
        let contact={...props.editContact};
        //izmenyaem dannye objecta
        contact.name=name;
        contact.comment=comment;
        
        
        //obnovlennyi object otpravlyaem v roditelskii komponent
        props.handleSaveEditedContact(contact)
        setName('')
        setComment('')
        
     }

    



    return (
        <div>

            
             <input style={{height:'50px', fontFamily: 'Playfair Display',fontSize:'18px',fontWeight:'500'}} onChange= {(e)=>setName(e.target.value)} 
            type="text"
             placeholder="Имя"
             value={name}/>
            <input style={{height:'50px',width:'300px', fontFamily: 'Playfair Display',fontSize:'18px',fontWeight:'500'}} onChange={(e)=>setComment(e.target.value)} 
            typ ceholder="Отзыв"
             value={comment}/>
            
            <button  style={{height:'50px',width:'100px',fontSize:'18px',fontWeight:'500',fontFamily: 'Playfair Display'}}  onClick={handleSaveClick}>Сохранить</button>
        </div>
    )
    };



export default EditContacts;