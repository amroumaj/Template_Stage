"use client";

import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Navbar from "@/components/navbar";
import { handleCanvasMouseDown, handleCanvasMouseMove, handleCanvasMouseUp, initializeFabric } from "@/lib/canvas";
import { ActiveElement } from "@/types/type";
import { fabric } from "fabric";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>(null);
  const isDrawing = useRef(false);
  const activeObjectRef = useRef<fabric.Object | null>(null);

  const [activeElement, setActiveElement] = useState<ActiveElement>({name: '', value:'', icon:''} );
  
  /* const deleteAllShapes = useMuta */

  const handleActiveElement = ( elem:ActiveElement) => {
    setActiveElement(elem);

    switch(elem?.value) {
      case 'reset':
        /* deleteAllShapes() */
        break;
    }

    selectedShapeRef.current = elem?.value as string;
  }
  
  useEffect (() => {
    const canvas = initializeFabric({canvasRef, fabricRef})
    
    canvas.on("mouse:down", (options) =>{
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef
      })
    })

    canvas.on("mouse:move", (options) =>{
      handleCanvasMouseMove({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef
      })
    })

    canvas.on("mouse:up", (options) =>{
      handleCanvasMouseUp({
        canvas,
        isDrawing,
        shapeRef,
        activeObjectRef,
        selectedShapeRef,
        setActiveElement,
      })
    })

    window.addEventListener( "resize", () => {
      handleResize({ fabricRef })
    })

    return () => {
      canvas.dispose();
    }

  }, [])

  return (
    <main className="h-screen overflow-hidden">
      <section className="flex flex-row h-full">
        <Navbar 
          activeElement={activeElement}
          handleActiveElement={handleActiveElement}
        />
        <LeftSidebar /* allShapes={ Array.from(canvasObjects) } *//>
        <canvas ref = {canvasRef}/>
        <RightSidebar />
      </section>
    </main>
  );
}
