import { FooterItem } from './FooterItem'

export const FooterCommon = () => {
  return (
    <div className="fixed bottom-0 z-20 mx-auto flex h-[58px] w-[375px] items-center justify-center bg-gradient-to-l from-ma-red to-ma-red-300 px-2">
      <FooterItem name="Home" link="dashboard">
        <div className="h-full w-full bg-[url('assets/images/icon/i-home.svg')] bg-[length:auto_21px] bg-center bg-no-repeat" />
      </FooterItem>

      <FooterItem name="Learning" link="dashboard">
        <div className="h-full w-full bg-[url('assets/images/icon/i-learning.svg')] bg-[length:auto_18px] bg-center bg-no-repeat" />
      </FooterItem>

      <FooterItem name="Journal" link="heart-journal">
        <div className="h-full w-full bg-[url('assets/images/icon/i-journal.svg')] bg-[length:auto_23px] bg-center bg-no-repeat" />
      </FooterItem>

      <FooterItem name="Heart Chart" link="heart-chart">
        <div className="h-full w-full bg-[url('assets/images/icon/i-heart_chart.svg')] bg-[length:auto_18px] bg-center bg-no-repeat" />
      </FooterItem>

      <FooterItem name="Settings" link="dashboard">
        <div className="h-full w-full bg-[url('assets/images/icon/i-settings.svg')] bg-[length:auto_20px] bg-center bg-no-repeat" />
      </FooterItem>
    </div>
  )
}
