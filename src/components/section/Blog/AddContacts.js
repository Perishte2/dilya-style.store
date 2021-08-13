import React,{useState} from 'react';


const AddContacts = (props) => {
    //peremennye gde hranyatsya dannye massiva
    let [name,setName]=useState('');
    let [comment,setComment]=useState('');
    

    //We create general function where we have  an object which 
    //consists of all variables name surname phone

    function handleClick(){
    //object gde hranitsya sobrannyi object
   let newContact={
       name,
       comment,
      
       id:Date.now()
   }
   //dalee sobrannyi contact otpravlyaem v roditelskii component
   props.handleNewContact(newContact);
       setName('')
       setComment('')
       
}
    
    return (
        <div>
            <input style={{height:'50px', fontFamily: 'Playfair Display',fontSize:'18px',fontWeight:'500'}} onChange= {(e)=>setName(e.target.value)} 
            type="text"
             placeholder="Имя"
             value={name}/>
            <input style={{height:'50px',width:'300px', fontFamily: 'Playfair Display',fontSize:'18px',fontWeight:'500'}} className="comment" onChange={(e)=>setComment(e.target.value)} 
            type="text" placeholder="Отзыв"
             value={comment}/>
           
            <button style={{height:'50px',width:'100px',fontSize:'18px',fontWeight:'500',fontFamily: 'Playfair Display'}} onClick={handleClick}>Отправить</button>
        </div>
    );
};

export default AddContacts;


// contacts:[
//     {
//        name:'Perishte',
//        surname:'Ismailova',
//        phone:+996220676767
//     }
// ]


//teper nado otravit dannye v app.js 4toby dannye otobrajalis 
//i dobavlyalis v obwii massiv