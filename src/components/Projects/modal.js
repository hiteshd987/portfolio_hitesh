import React from 'react';
import Modal from 'antd/lib/modal';
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
      >
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