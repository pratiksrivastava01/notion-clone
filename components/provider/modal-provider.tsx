"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../modals/SettingModals";
import { CoverImageModals } from "../modals/CoverImageModals";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModals />
    </>
  );
};
