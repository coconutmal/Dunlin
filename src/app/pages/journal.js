"use client";

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState, Route } from 'react';
import { invoke } from '@tauri-apps/api/tauri'


export default function Journal({setPage}) {

  const [currentDay, setCurrentDay] = useState( new Date() );



  return (
    <div></div>
  );
}
