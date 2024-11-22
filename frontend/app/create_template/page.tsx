"use client";

import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Navbar from "@/components/navbar";
import { handleCanvasMouseDown, handleCanvasMouseMove, handleCanvasMouseUp, handleCanvasObjectModified, handleCanvasObjectScaling, handleCanvasSelectionCreated, handlePathCreated, handleResize, initializeFabric } from "@/lib/canvas";
import { handleImageUpload } from "@/lib/shapes";
import { ActiveElement, Attributes } from "@/types/type";
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
  const imageInputRef = useRef<HTMLInputElement>(null);
  const isEditingRef = useRef(false);

  const [activeElement, setActiveElement] = useState<ActiveElement>({name: '', value:'', icon:''} );
  const [elementAttributes, setElementAttributes] = useState<Attributes>({
    width:'',
    height:'',
    fontSize:'',
    fontFamily:'',
    fontWeight:'',
    fill:'#aabbcc',
    stroke:'#aabbcc'
  })
  
  /* const deleteAllShapes = useMuta */

  const handleActiveElement = ( elem:ActiveElement) => {
    setActiveElement(elem);

    switch(elem?.value) {
      case 'reset':
        /* deleteAllShapes() */
        break;
      case 'image':
        imageInputRef.current?.click();
        isDrawing.current = false;

        if (fabricRef.current) {
          fabricRef.current.isDrawingMode = false;
        }
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

    canvas.on("mouse:up", () =>{
      handleCanvasMouseUp({
        canvas,
        isDrawing,
        shapeRef,
        activeObjectRef,
        selectedShapeRef,
        setActiveElement,
      })
    })

    canvas.on("object:modified", (options) => {
      handleCanvasObjectModified({
        options
      })
    })

    canvas.on("selection:created", (options: any) => {
      handleCanvasSelectionCreated({
        options,
        isEditingRef,
        setElementAttributes
      })
    })

    canvas.on("object:scaling", (options: any) => {
      handleCanvasObjectScaling({
        options,
        setElementAttributes
      })
    })
    
    canvas.on("path:created", (options:any) => {
      handlePathCreated(options);
    })

    window.addEventListener( "resize", () => {
      handleResize({ 
        canvas: fabricRef.current,
       })
    })

    return () => {
      canvas.dispose();
    }

  }, [])

  return (
    <main className="h-screen overflow-hidden">
      <section className="flex flex-row h-full">

        <div className="flex h-[100-vh] w-full relative justify-center items-center">
        <Navbar 
          activeElement={activeElement}
          handleActiveElement={handleActiveElement}
          imageInputRef={imageInputRef}
          handleImageUpload={(e: any) => {
            e.stopPropagation();

            handleImageUpload({
              file: e.target.files[0],
              canvas: fabricRef as any,
              shapeRef,
              
            })
          }}
        />
          <LeftSidebar /* allShapes={ Array.from(canvasObjects) } *//>
          <canvas className="shadow-lg shadow-slate-950 dark:shadow-slate-400" id="canvas" height="800" width="800" ref = {canvasRef} />
          <RightSidebar 
            elementAttributes= {elementAttributes}
            setElementAttributes={setElementAttributes}
            fabricRef={fabricRef}
            isEditingRef={isEditingRef}
            activeObjectRef={activeObjectRef}
          />
        </div>
      </section>
    </main>
  );
}
