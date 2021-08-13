import React from 'react';

const ContactsList = (props) => {
    // console.log(props); 
    return (
        <div className='list'>
           {/* prinimaem i perebiraem */}
           {/* v kachestve key prinimaem id a v kachestve soderjaniya item */}
            {props.contacts.map((item, index)=>(
                <ul key={item.id}>  
                <li>{item.name}</li>
                <li>{item.comment}</li>
                
                <li>
                    <button style={{height:'30px',width:'100px',fontSize:'14px',fontWeight:'500',fontFamily: 'Playfair Display'}} onClick={()=>props.handleDeleteContact(item.id)}>Удалить</button>
                    {/* pri najatii na knopku Edit my poluchaem index massiva kotoryi hotim otredaktirovat */}
                    <button style={{height:'30px',width:'100px',fontSize:'14px',fontWeight:'500',fontFamily: 'Playfair Display'}} onClick={()=>props.handleEditIndex(index)}>Изменить</button>
                    </li>
                </ul>
            ))}
           
        </div>
    );
};

export default ContactsList;