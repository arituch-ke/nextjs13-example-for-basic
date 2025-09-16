"use client";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownChangeEvent,
} from "primereact/dropdown";
import { IHealthExaminationInformation, IHospital } from "@/types";

interface IProps {
  value: IHospital['id'] | null;
  onChange: (patch: Partial<IHealthExaminationInformation>) => void;
}

export default function Selection(props: IProps) {
  const [hospital, setHospital] = useState<IHospital[]>([]);

  useEffect(() => {
    setHospital([
      { id: 1, name: "โรงพยาบาล A" },
      { id: 2, name: "โรงพยาบาล B" },
      { id: 3, name: "โรงพยาบาล B" },
      { id: 4, name: "โรงพยาบาล B" },
      { id: 5, name: "โรงพยาบาล B" },
      { id: 6, name: "โรงพยาบาล B" },
      { id: 7, name: "โรงพยาบาล B" },
    ]);
  }, []);

  const getHospitalById = (id: number | null) => {
    return hospital.find(h => h.id === id) || null;
  }

  const selectedHospitalTemplate = (option: IHospital) => {
    if (option) {
      return <div className="h-12 flex items-center px-3">{option.name}</div>;
    }
    return <span>เลือกโรงพยาบาล</span>;
  };

  return (
    <div className="w-full">
      <Dropdown
        value={props.value}
        onChange={(e: DropdownChangeEvent) => props.onChange({ hospital: getHospitalById(e.value) })}
        options={hospital}
        optionLabel="name"
        optionValue="id"
        placeholder="ชื่อโรงพยาบาล"
        filter
        filterDelay={400}
        showClear
        valueTemplate={selectedHospitalTemplate}
        className="w-full"
        pt={{
          panel: {
            className: 'h-[500px] overflow-y-auto',
          }
        }}
      />
    </div>
  );
}