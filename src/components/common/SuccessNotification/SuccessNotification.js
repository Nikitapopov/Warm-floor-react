import React, {useState} from "react";
import styles from './SuccessNotification.module.sass';
import {Modal, Button} from "react-bootstrap";

let SuccessNotification = ({notification, setSendingAccomplished}) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        setSendingAccomplished(false);
    };
    return <div className={styles.moduleWindow}>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>{notification}</Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>
                    Ок
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
};

export default SuccessNotification;