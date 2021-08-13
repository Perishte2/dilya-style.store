
import ContactsList from './Blog/ContactsList';
import AddContacts from './Blog/AddContacts';
import EditContacts from './Blog/EditContacts';
import api from '../../api/contacts'
import React, {useState} from 'react';


function Blog() {
    //peremennaya gde my hranim obwii massiv contactov
    let [contacts,setContacts]=useState([]);
   //v peremennoi hranim vremenno tot obiect kotoryi hotim sohranit 
   let [editContact, setEditContact]=useState({});
   //stavim status kak v modalke 4toby on otkryvalsya i zakryvalsya
   let[isEdit, setIsEdit]=useState(false);
  
  
  
    function handleNewContact(newContact){
      //kopiruem staryi massiv v novyi object
      let newContactsArray=[...contacts];
      //pushim novoe znachenie v novyi contact
      newContactsArray.push(newContact);
      
  
      //obnovlyaem  novyi contact
      setContacts(newContactsArray);  //perezapisyvaem v massiv
  
      
    }
  
  //perebiraem massiv i vozvrawaem esli id contacta raven novomu id to udalyaem ego
  
    function handleDeleteContact(id){
     let newContactsArray=contacts.filter(item=>{
       return item.id !== id;
     })
     setContacts(newContactsArray); //setContacts obnovlyaet naw massiv
    }
  
  
    function handleEditIndex(index){
      //stavim true i pokazyvaem nawi inputy iz faila EditContacts
      setIsEdit(true);
      //otpravlyaem v peremennuyu editContact naw object kotoryi hotim izmenit
     setEditContact(contacts[index]);
    }
    
      //perebiraem massiv 
    function handleSaveEditedContact(newContact){
      let newContactsArray=contacts.map(item=>{
       // nahodim id otredaktirovannogo novogo contacta
       //stavim uslovie esli id novogo contacta raven id is objego pervon-go contacta
       //to vozvrawaem novyi contact
  
         if(item.id===newContact.id){
           return newContact
         }
         //inache budet vozvrawat te je contacty
         return item
       })
  
       //obnovlennyi contacts peredaem v setContacts
       setContacts(newContactsArray);
       //dalle inuty doljny ischeznut
       setIsEdit(false);
    }
     
    return (
      <div className="App">
        <h2 className="blogTitle" style={{display:'flex',justifyContent:'center'}}>Отзывы</h2>
       <AddContacts handleNewContact={handleNewContact}/>
       {/* stavim uslovie dlya pokaza nawih inputov iz faila editContacts */}
      {isEdit?  <EditContacts editContact={editContact}
      handleSaveEditedContact={handleSaveEditedContact}
      />: null}
  
      {/* object s selym massivom otpravlyaem v file ContactsList.js */}
       <ContactsList contacts={contacts}
       handleDeleteContact={handleDeleteContact}
       handleEditIndex={handleEditIndex}
      /> 
      
      </div>
    );
  }

  export default Blog;