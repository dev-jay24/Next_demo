"use client";
import { useEffect } from "react";

export default function Default() {
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  return null;
}
