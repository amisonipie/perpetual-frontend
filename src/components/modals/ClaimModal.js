import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PlButton from '../plElement/Button';
import PlInput from '../plElement/Input';

import closeIcon from '../../assets/images/modal-close-icon.svg';

const ClaimModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      centered
      dialogClassName="my-modal"
    >
      <Modal.Body>
        <div className='close-icon' onClick={props?.onHide}>
          <img src={closeIcon} />
        </div>

        <div className='claim-modal-title mb-3'>
          <h3>CLAIM</h3>
        </div>
        <div className="mt-4">
          <PlInput type={"withTag"} label={"Amount"} placeholder={"0.0"} disabled={true} tag={"LAMP"} />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="balance">Claimable Reward : 10.65 LAMP</span>
            <div className="d-flex gap-2">
              <PlButton type={"percentageButton"} label={"25%"} />
              <PlButton type={"percentageButton"} label={"50%"} />
              <PlButton type={"percentageButton"} label={"75%"} />
              <PlButton type={"percentageButton"} label={"100%"} />
            </div>
          </div>
        </div>

        <div className="claim-button mt-4">
          <PlButton label={"Claim"} onClick={props.onHide} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ClaimModal;
