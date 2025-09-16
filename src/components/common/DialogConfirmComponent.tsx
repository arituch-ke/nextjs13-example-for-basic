"use client"
import React, { useState, useEffect, ReactNode } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

interface IProps {
  text: string;
  visible: boolean;
  onHide: () => void;
  onConfirm?: () => void;
  width?: string;
  height?: string;
}
export default function DialogConfirmComponent(props: IProps) {
  const [visible, setVisible] = useState(props.visible);
  const onHide = () => {
    setVisible(false);
    props.onHide();
  }

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  return (
    <div className="card flex justify-content-center">
      <Dialog header="Header" visible={visible} onHide={onHide}
        style={{ width: props.width || '50vw', height: props.height || '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
        <h1>คุณต้องการยืนยันหรือไม่</h1>
        <p className="m-0">
          {props.text}
        </p>
        <Button label="Confirm" onClick={props.onConfirm} />
        <Button label="Cancel" onClick={onHide} className="p-button-secondary ml-2" />
      </Dialog>
    </div>
  )
}
