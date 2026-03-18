import React, { createContext, useContext, useState, useEffect } from "react";
import { buildImageUrl } from "../utils";

const ConfigContext = createContext<any>(null);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      const response = await fetch("/set-up");
      if (!response.ok) throw new Error("Failed to fetch config");
      const data = await response.json();
      setConfig(data);
    };
    fetchConfig();
  }, []);

  const getImageUrl = (
    filePath: string | null,
    size: string = "normal",
    type: string,
  ) => {
    return buildImageUrl(config, filePath, size, type);
  };

  return (
    <ConfigContext.Provider value={{ config, getImageUrl }}>
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
