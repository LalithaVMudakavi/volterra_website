"use client";

import Select from "react-select";

interface SearchSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

export function SearchSelect({
  value,
  onChange,
  options,
  placeholder,
}: SearchSelectProps) {
  const selectOptions = options.map((item) => ({
    label: item,
    value: item,
  }));

  return (
    <Select
      isSearchable
      options={selectOptions}
      placeholder={placeholder}
      value={
        selectOptions.find((o) => o.value === value) ?? null
      }
      onChange={(option) => onChange(option?.value ?? "")}
      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: 48,
          height: 48,
          borderRadius: 16,
          borderColor: state.isFocused ? "#84cc16" : "#e2e8f0",
          backgroundColor: "#f8fafc",
          boxShadow: state.isFocused
            ? "0 0 0 4px rgba(132,204,22,.12)"
            : "none",
          "&:hover": {
            borderColor: "#84cc16",
          },
        }),

        valueContainer: (base) => ({
          ...base,
          padding: "0 16px",
        }),

        input: (base) => ({
          ...base,
          margin: 0,
          padding: 0,
        }),

        placeholder: (base) => ({
          ...base,
          color: "#94a3b8",
        }),

        indicatorSeparator: () => ({
          display: "none",
        }),

        dropdownIndicator: (base) => ({
          ...base,
          color: "#64748b",
        }),

        menu: (base) => ({
          ...base,
          borderRadius: 16,
          overflow: "hidden",
          zIndex: 9999,
        }),

        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused
            ? "#ecfccb"
            : "#fff",
          color: "#0f172a",
          cursor: "pointer",
        }),
      }}
    />
  );
}