"use client"
import React from 'react'
import DialogComponent from '@/components/common/DialogComponent'
import DialogConfirmComponent from '@/components/common/DialogConfirmComponent'
import { Button } from 'primereact/button';

export default function About() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  return (
    <div>
      <h1>About Page</h1>
      <Button label="Show" onClick={() => setIsVisible(true)} />
      <DialogComponent visible={isVisible} onHide={() => setIsVisible(false)}>
        <p className="m-0">
          <h1>Dialog 1</h1>
          <Button label="Dialog2" onClick={() => setIsVisible2(true)} className='mr-2' />
          <Button label="Close" onClick={() => setIsVisible(false)} />
        </p>
      </DialogComponent>

      <DialogComponent visible={isVisible2} onHide={() => setIsVisible2(false)} height='30vh'>
        <p className="m-0">
          <h1>Dialog 2</h1>
          <Button label="Close" onClick={() => setIsVisible2(false)} />
        </p>
      </DialogComponent>

      <Button label="Show Confirm" onClick={() => setIsConfirmed(true)} className='mt-2' />
      <DialogConfirmComponent text="Delete Data" visible={isConfirmed} onHide={() => setIsConfirmed(false)}
        onConfirm={() => { setIsConfirmed(true); setIsConfirmed(false); }} height='30vh'>
      </DialogConfirmComponent>
    </div>
  )
}
