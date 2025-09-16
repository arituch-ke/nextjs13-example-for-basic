"use client"
import React, { useState, useEffect, ReactNode } from "react";
import { Dialog } from 'primereact/dialog';

interface IProps {
  children: ReactNode;
  visible: boolean;
  onHide: () => void;
  width?: string;
  height?: string;
}
export default function DialogComponent(props: IProps) {
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
        {props.children}
      </Dialog>
    </div>
  )
}
