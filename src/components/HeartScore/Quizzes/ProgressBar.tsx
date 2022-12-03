import { Component } from "react";

type Props = {
  totalPage: number,
  currentPage: number
}

export const ProgressBar = ({ totalPage, currentPage }: Props) => {
  const listPage = totalPage > 0 ? [...Array(totalPage)].map((page, index) => (
    <li 
      key={`page-${index}`}
      className={`w-7 h-7 text-[#EF2E7D] font-medium text-[20px] leading-none rounded-full flex justify-center items-center ${ currentPage > index ? 'bg-white' : 'bg-[#BFBFBE]'}`} 
    >
      { index + 1 }
    </li>
  )) : undefined

  return (
    <div className="w-full h-7 relative">
      <div className="w-full h-1 absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-[#BFBFBE] flex justify-start">
        <div className="h-full bg-white" style={{ width: `calc(${currentPage/totalPage*100}% - 14px)` }}/>
      </div>
      <ul className="w-full flex justify-between relative z-50">
        { listPage }
      </ul>
    </div>
  )
}