import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BasicModal({ setIsModalOpen, isModalOpen, oldPassword, newPassword, confirmPassword, setOldPassword, setNewPassword, setConfirmPassword }) {
    const handleOpen = () => setIsModalOpen(true); 
    const handleClose = () => setIsModalOpen(false); 

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: 'none'
    };

    return (
        <Modal open={isModalOpen}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <div style={{backgroundColor: '#FFFFFF', flexDirection: 'column',borderRadius:'4px'}}>
                        <p style={{ fontWeight: "500", textAlign: "left", color: '#B6B2BD', fontSize: '10px', lineHeight: '12.1px', backgroundColor: 'white', margin: '10px',padding:'8px 20px'}}>
                            CHANGE PASSWORD
                        </p>

<div style={{borderBottom: '1px solid #F1F1F3', backgroundColor: '#FBFBFB', fontSize:'14px', flex: '1', display: 'flex', flexDirection: 'column',padding:'8px 20px'}}>
    <label style={{ textAlign: "left", color: '#5F5A6B', padding: '10px 10px' }}>
        Enter old password *
        <input type="password" style={{ width: '100%', borderRadius:'4px', height:'48px', padding:'6px 12px',border:'1px solid #D2D1D6',backgroundColor:'#FFFFFF'}} value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
    </label>

    <label style={{ textAlign: "left", color: '#5F5A6B', padding: '10px 10px' }}>
        Enter new password *
        <input type="password" style={{ width: '100%', borderRadius:'4px', height:'48px', padding:'6px 12px',border:'1px solid #D2D1D6',backgroundColor:'#FFFFFF'}} value={newPassword} onChange={e => setNewPassword(e.target.value)} />
    </label>

    <label style={{ textAlign: "left", color: '#5F5A6B', padding: '10px 10px' }}>
        Confirm password *
        <input type="password" style={{ width: '100%', borderRadius:'4px', height:'48px', padding:'6px 12px',border:'1px solid #D2D1D6',backgroundColor:'#FFFFFF'}} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
    </label>
</div>

<div style={{ display: "flex", justifyContent: "flex-end", gap: '8px', padding: '8px 30px' }}>
    <Button style={{ backgroundColor: '#FFFFFF', border: '1px solid #121114', height: '36px', width: '92px', borderRadius: '4px',color:'#121114' }} onClick={handleOpen}>Cancel</Button>
    <Button style={{ backgroundColor: '#D54029', border: 'none', height: '36px', width: '92px', borderRadius: '4px', color: '#fff' }} onClick={handleClose}>Save</Button>
</div>

                    </div>
                </Typography>
            </Box>
        </Modal>
    );
}
