import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { DashboardSection } from '../Common/DashboardSection'
import MyNowServices from '../../services/MyNowServices'

type Props = {
  isIntroduction?: boolean
  myNowData?: string
}

export const MyNow = ({ myNowData, isIntroduction }: Props) => {
  const [myNow, setMyNow] = useState<string>(myNowData || '')
  const [newMyNow, setNewMyNow] = useState<string>('')
  const [isShowModalEdit, setIsShowModalEdit] = useState<boolean>(false)

  //   getMyNow() {
  //     MyNowServices.getMyNow().then((response) => {
  //       if (response.data.content) {
  //         let content = response.data.content
  //         this.setState({
  //           myNow: content,
  //           newMyNow: content,
  //         })
  //         localStorage.setItem('myNow', content)
  //       }
  //     })
  //   }

  const handleChangeMyNow = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMyNow(event.target.value)
  }, [])

  const handleUpdateMyNow = useCallback(() => {
    setMyNow(newMyNow)
    setIsShowModalEdit(false)
  }, [newMyNow])

  const handleOpenModalEditMyNow = useCallback(() => {
    setNewMyNow(myNow)
    setIsShowModalEdit(true)
  }, [myNow])

  const modalEditMyNow = useMemo(() => {
    return (
      <div className="modal" id="edit-my-now">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit My Now</h3>
          <textarea className="textarea textarea-bordered mt-10 w-full rounded-2xl p-4 text-lg placeholder:text-lg placeholder:text-black" value={newMyNow} onChange={handleChangeMyNow} />
          <div className="modal-action">
            <a href="#" onClick={handleUpdateMyNow} className="flex h-quiz-button items-center justify-center rounded-full bg-color-text-primary px-10 text-[15px] font-medium uppercase text-white">
              Update
            </a>
          </div>
        </div>
      </div>
    )
  }, [newMyNow])

  return (
    <>
      <DashboardSection className="space-y-4" title="My Now">
        <div
          className={`w-full rounded bg-dashboard-my-now bg-cover bg-center bg-no-repeat px-4 text-[22px] font-bold leading-[1.1818] tracking-[0.15px] text-white ${
            isIntroduction ? 'py-5 text-left' : 'py-10 text-center'
          }`}
        >
          {myNow}
        </div>

        <div className="flex justify-end">
          <a href="#edit-my-now" className="text-[14px] leading-none text-color-primary underline decoration-color-primary" onClick={handleOpenModalEditMyNow}>
            Edit My Now
          </a>
        </div>
      </DashboardSection>

      {!isIntroduction && isShowModalEdit && modalEditMyNow}
    </>
  )
}
