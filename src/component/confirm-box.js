import React from "react";
import CancelIcon from "../common/assets/cancel.png";
import SuccessIcon from "../common/assets/shield.svg";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { Dialog } from "@mui/material";
import Button from "./button";

const ConfirmBoxStyle = styled.div`
.areyousurecomponent{
  max-width: 600px;
  text-align: center;
  padding: 24px;

  img{
      height: 100px;
      width: auto;
  }
  .areyousurecomponent-imgcontainer {
    display: flex;
    justify-content: center;
  }

  .areyousurecomponent_buttons{
      display: flex;
      flex-direction: column;
      button{
          margin-top: 16px;
          cursor: pointer;
      }
  }
}
`

const ConfirmBox = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.dailogHandeller}
      aria-labelledby="responsive-dialog-title"
    >
      <ConfirmBoxStyle>
        <div className='areyousurecomponent'>
          <div className="areyousurecomponent-imgcontainer">
            <img src={props?.error ? CancelIcon : SuccessIcon} alt="cancelicon" />
          </div>
          <h2>{props.title}</h2>
          <div className="areyousurecomponent_buttons">
            <Button color='primary' onClick={props.onConform}>Yes</Button>
            <Button color='tertary' onClick={props.dailogHandeller}>No</Button>
          </div>
        </div>
      </ConfirmBoxStyle>
    </Dialog>
  );
};

ConfirmBox.propTypes = {
  open: PropTypes.bool,
  dailogHandeller: PropTypes.func,
  error: PropTypes.bool,
  title: PropTypes.string,
  discription: PropTypes.string,
  onConform: PropTypes.func,
};

export default ConfirmBox;
