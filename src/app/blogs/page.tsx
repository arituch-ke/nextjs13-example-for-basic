"use client";
import React, { useRef, useState, useCallback } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import Selection from "@/components/Selection";
import Age from "@/components/Age";
import { IHealthExaminationInformation } from "@/types";
import Name from "@/components/Name";

export default function SaveHealthRecord() {
  const stepperRef = useRef<Stepper | null>(null);
  const [showLabel, setShowLabel] = useState(true);
  const [labelStep2, setLabelStep2] = useState("โรงพยาบาล");
  const [formData, setFormData] = useState<IHealthExaminationInformation>({
    name: "",
    age: 0,
    hospital: null
  });

  const handleChange = useCallback(
    (patch: Partial<IHealthExaminationInformation>): void => {
      setFormData(prev => ({ ...prev, ...patch }))
    },
    []
  );

  const toggleLabel = (toggle: boolean) => {
    setShowLabel(toggle);
  };

  const next = () => {
    toggleLabel(true);
    stepperRef.current?.nextCallback()
    const step = stepperRef.current?.getActiveStep() ?? 0;
    if(step + 1 === 1) {
      setLabelStep2(formData.hospital ? `บันทึก > ${formData.hospital.name}` : "โรงพยาบาล");
    }

    console.log(step);
  };

  const prev = () => {
    toggleLabel(false);
    stepperRef.current?.prevCallback()
    console.log(stepperRef.current?.getActiveStep());
  };

  return (
    <div>
      {/* {formData.name} <br />
      {formData.age} <br />
      {formData.hospital?.id} <br />
      {formData.hospital?.name} */}
      <br />
      <Stepper ref={stepperRef} style={{ flexBasis: "50rem" }}>
        <StepperPanel header="เลือกโรงพยาบาล">
          <div className="flex flex-column h-12rem">
            <Selection value={formData.hospital?.id || null} onChange={handleChange} />
          </div>
          <div className="flex pt-4 justify-end">
            <Button
              label="ถัดไป"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="info"
              onClick={next}
            />
          </div>
        </StepperPanel>
        <StepperPanel header={labelStep2}>
          <div className="flex flex-column h-12rem">
            <Age value={formData.age || null} onChange={handleChange} />
          </div>

          <div className="flex pt-4 justify-between">
            <Button
              label="กลับ"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={prev}
            />
            <Button
              label="ถัดไป"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={next}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Header III">
          <div className="flex flex-column h-12rem">
            <Name value={formData.name || null} onChange={handleChange} />
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="กลับ"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={prev}
            />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}