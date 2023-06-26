import { useState } from "react";
import ClaimModal from "../modals/ClaimModal";
import DepositModal from "../modals/DepositModal";
import PlButton from "./Button";

const EarnCard = () => {
    const [depositModal, SetDepositModal] = useState(false);
    const [claimModal, SetClaimtModal] = useState(false);

    return (
        <div className="shadowed-box">
            <div className="d-flex">
                <div className="earn-heading">
                </div>
                <div className="earn-heading-text justify-content-center">
                    <p>LAMP</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="d-flex justify-content-between align-items-center mb-1">
                    Total Deposited <span className="fw-600">148.65 LAMP</span>
                </p>
                <p className="d-flex justify-content-between align-items-center mb-1">
                    APR <span className="fw-600">210.54%</span>
                </p>
                <p className="d-flex justify-content-between align-items-center mb-1">
                    Your Deposit <span className="fw-600 earn-text">24.97 LAMP</span>
                </p>
                <p className="d-flex justify-content-between align-items-center mb-1">
                    Estimated Earning per day<span className="fw-600">0.136 LAMP</span>
                </p>
                <p className="d-flex justify-content-between align-items-center mb-1">
                    Claimable Reward<span className="fw-600 earn-text">1.24 LAMP</span>
                </p>
            </div>

            <div className="earn-deposit-button mt-4">
                <PlButton label={"Deposit/Withdraw"} onClick={() => SetDepositModal(true)} />
            </div>

            <div className="earn-deposit-button mt-4">
                <PlButton label={"Claim"} className="transparent" onClick={() => SetClaimtModal(true)} />
            </div>

            {depositModal &&
                <DepositModal
                    show={depositModal}
                    onHide={() => SetDepositModal(false)}
                />
            }

            {claimModal &&
                <ClaimModal
                    show={claimModal}
                    onHide={() => SetClaimtModal(false)}
                />
            }

        </div>
  );
};

export default EarnCard;
