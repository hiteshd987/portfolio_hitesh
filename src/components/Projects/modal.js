import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ProjectDialog = ({isDialogOpen, dialogText, setIsDialogOpen}) => {

    const handleOk = () => {
        setIsDialogOpen(false);
      };
    
      const handleCancel = () => {
        setIsDialogOpen(false);
      }; 

  return (
    <>
      <Modal 
      title={dialogText.company} open={isDialogOpen} 
      onOk={handleOk} onCancel={handleCancel}
      className="custom-modal"
      style={{ height: '70vh' }}
      >
        {/* <p>{dialogText.dialogDetails}</p> */}
        <ul>
        {dialogText.dialogDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      </Modal>
    </>
  );
};
export default ProjectDialog;