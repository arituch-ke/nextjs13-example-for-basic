"use client";
import React from "react";
import { InputNumber } from 'primereact/inputnumber';

import { IHealthExaminationInformation } from "@/types";

interface IProps {
  value: IHealthExaminationInformation['age'] | null;
  onChange: (patch: Partial<IHealthExaminationInformation>) => void;
}

export default function Age(props: IProps) {
  return (
    <div className="w-full">
      <InputNumber value={props.value} onValueChange={(e) => props.onChange({ age: e.value })} />
    </div>
  );
}