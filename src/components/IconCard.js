import React, { useEffect, useState } from "react";
import "../App.css";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { padding } from "@mui/system";

let show = false;
function IconCard(props) {
  let screenWidth = window.innnerWidth;
  let height = window.innerHeight;

  const customStyles = {
  content: {
    top: '50%',
    left: '45%',
    right: 'auto',
    bottom: 'auto',
  paddingLeft:'150px',
  paddingRight:'100px',
    transform: 'translate(-50%, -50%)',
    background:'#252424',
    padding:'30px',
    color:'#fff'

  },
};


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



 
 
  return (
    <div
      className="IconCard"
      data-toggle="modal"
      data-target="#exampleModal"
  onClick={openModal}
    >
    {console.log( props?.raster[6]?.formats[0].preview_url )}
      <img
        src={props.url}
        style={{
          height: 24,
          width: 24,
          objectFit: "contain",
          marginBottom: 10,
        }}
      />
      <div className="IconTags" style={{ display: "flex" }}>
        {props.tags.map((tag, index) => {
          if (index < 3) {
            return <p>{tag},</p>;
          }
        })}
      </div>
  


      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
       
        <div className="modalcontent">  
        <div style={{background:'white'}}>  
        <img
        src={props?.raster[7]?.formats[0].preview_url}
        style={{
          height: 256,
          width: 256,
          objectFit: "contain",
          marginBottom: 10,
        }}
      />
      </div>  
      {props.premium ? (  <div className="modelText">
        <h3>This premium</h3>
        <ul>
          <li>1 credit needed </li>
            <li>1 credit needed </li>
              <li>1 credit needed </li>
        </ul>
      </div>) : (  <div className="modelText">
        <h3>This premium</h3>
        <ul>
          <li>1 credit needed </li>
            <li>1 credit needed </li>
              <li>1 credit needed </li>
        </ul>
      </div>)  }
    
      </div>
     
        
      </Modal>

   
    </div>
  );
}

export default IconCard;
