import { useMemo } from "react";

import { Wrapper, ButtonCommon, ButtonStyles } from "../../Common"
import { ResultData } from "../../../models/heartscore-result"

type Props = {
  data: ResultData
  onNextPage: () => void
}

export const ResultContent = ({ data, onNextPage}: Props) => {
  const resultContent = useMemo(() => {
    const totalScore = data.totalScore && data.totalStatus ? (
      <div className={`w-full flex items-center uppercase space-x-[6px] font-semibold text-color-${data.totalStatus}-risk`}>
        <div className={`w-16 h-16 text-[25px] leading-[30px] border-2 rounded-full flex items-center justify-center border-color-${data.totalStatus}-risk`}>
          {data.totalScore}
        </div>

        <div className="text-[16px] leading-[19px">
          {data.totalStatus} RISK
        </div>
      </div>
    ) : null

    const tableScore = data.details ? data.details.map((detail, index) => {
      return (
        <div key={`resultDetail-${index}`} className="flex items-center border-t border-color-gray py-3">
          <div className="flex-1 leading-[22px] font-semibold text-color-overlay">
            {detail.category}
          </div>
          <div className={`w-8 font-semibold text-color-${detail.status}-risk`}>
            {detail.score}
          </div>
        </div>
      )
    }) : null
    return <>
      <div className="space-y-5">
        {totalScore}
        <p className="font-bold">Here were your scores for each section:</p>
        <div className="border-b border-color-gray">
          {tableScore}
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-[6px]">
            <div className="w-[18px] h-[18px] rounded-full bg-color-low-risk border-color-low-risk" />
            <div className="text-[12px] leading-[15px] font-semibold uppercase text-color-low-risk">LOW RISK</div>
          </div>

          <div className="flex items-center space-x-[6px]">
            <div className="w-[18px] h-[18px] rounded-full bg-color-medium-risk border-color-medium-risk" />
            <div className="text-[12px] leading-[15px] font-semibold uppercase text-color-medium-risk">MEDIUM RISK</div>
          </div>

          <div className="flex items-center space-x-[6px]">
            <div className="w-[18px] h-[18px] rounded-full bg-color-high-risk border-color-high-risk" />
            <div className="text-[12px] leading-[15px] font-semibold uppercase text-color-high-risk">HIGH RISK</div>
          </div>
        </div>
      </div>
      <p dangerouslySetInnerHTML={{ __html: data.content }} />
    </>
  }, [data])

  return (
    <Wrapper background="bg-white">
      <div className="min-h-full flex flex-col justify-between py-3 space-y-5">
        <div className="text-[17x] leading-[21px] text-black space-y-5">
          <p>Your Adesso Whole Heart score is</p>
          
          {resultContent}
        </div>

        <ButtonCommon style={ButtonStyles.Dark} width="w-[112px]" height="h-[50px]" text="Next" onClick={() => onNextPage()} />
      </div>
    </Wrapper>
  )
}