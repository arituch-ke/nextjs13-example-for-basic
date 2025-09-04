"use client";
import React from "react";
import { InputText } from "primereact/inputtext";

import { IHealthExaminationInformation } from "@/types";

interface IProps {
  value: IHealthExaminationInformation['name'] | null;
  onChange: (patch: Partial<IHealthExaminationInformation>) => void;
}

export default function Name(props: IProps) {
  return (
    <div className="w-full">
      <InputText value={props.value} onChange={(e) => props.onChange({ name: e.target.value })} />
    </div>
  );
}