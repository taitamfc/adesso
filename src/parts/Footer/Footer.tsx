import { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component<any, any> {
  render() {
    return (
      <div className="fixed bottom-0 z-20 w-full min-w-[375px] max-w-md">
        <ul className="menu menu-horizontal grid h-[60px] max-h-[60px] w-full grid-cols-5 justify-around rounded-none bg-bottom-nav text-white">
          <li className="">
            <Link to="dashboard" className="flex w-full flex-col justify-center gap-0 p-0 align-middle active:bg-transparent">
              <svg viewBox="0 0 21 21" fill="none" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_115_2042)">
                  <path
                    d="M20.5001 9.34463H18.3122C18.1842 9.34672 18.062 9.40059 17.9714 9.49485C17.8809 9.5891 17.8291 9.71633 17.8271 9.84961V20.4903C17.9869 20.3235 18.152 20.1517 18.3122 19.9853H2.67172L3.15642 20.4903V9.84961C3.15441 9.71641 3.10272 9.58924 3.01226 9.495C2.9218 9.40076 2.79968 9.34684 2.67172 9.34463H0.483395C0.599915 9.63229 0.71167 9.9204 0.829922 10.2081C1.96047 9.15301 3.08914 8.09766 4.21593 7.042C6.0147 5.36024 7.81231 3.68027 9.60876 2.00211C10.0155 1.61842 10.4287 1.23968 10.8385 0.855535H10.1524C11.2823 1.91089 12.411 2.96639 13.5384 4.02204L18.933 9.06193C19.3406 9.44562 19.7529 9.82436 20.1605 10.2081C20.6262 10.6422 21.3101 9.93032 20.8445 9.49612C19.7139 8.44047 18.5853 7.38512 17.4585 6.33007C15.6583 4.6483 13.8601 2.96834 12.0639 1.29018C11.6563 0.906033 11.2439 0.527748 10.8385 0.143601C10.7468 0.0511837 10.6242 -0.000488281 10.4965 -0.000488281C10.3689 -0.000488281 10.2462 0.0511837 10.1545 0.143601C9.02227 1.19925 7.89302 2.2546 6.7668 3.30965L1.37137 8.34954C0.963768 8.73324 0.551401 9.11198 0.143798 9.49612C-0.176307 9.79415 0.0809895 10.3596 0.490325 10.3596H2.67821L2.19307 9.85457V20.4952C2.19508 20.6285 2.24684 20.7558 2.33739 20.85C2.42794 20.9443 2.55017 20.9981 2.67821 21.0002H18.317C18.445 20.9981 18.5673 20.9443 18.6578 20.85C18.7484 20.7558 18.8001 20.6285 18.8021 20.4952V9.85457L18.317 10.3609H20.5049C21.1213 10.3559 21.126 9.34598 20.5001 9.34598V9.34463Z"
                    fill="white"
                  />
                  <path
                    d="M12.8254 19.9851H8.1243L8.60944 20.4901V12.5096L8.1243 13.0146H12.8254L12.3402 12.5096V20.4901C12.3402 21.1416 13.3105 21.1416 13.3105 20.4901V12.5096C13.3084 12.3764 13.2566 12.2492 13.1661 12.155C13.0756 12.0608 12.9534 12.0068 12.8254 12.0046H8.1243C7.99629 12.0068 7.87412 12.0608 7.7836 12.155C7.69307 12.2492 7.64128 12.3764 7.63916 12.5096V20.4901C7.64117 20.6234 7.69293 20.7506 7.78348 20.8449C7.87402 20.9391 7.99626 20.993 8.1243 20.9951H12.8254C13.4465 20.9951 13.4465 19.9851 12.8254 19.9851Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_115_2042">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="mt-1 text-xs text-white">Home</span>
            </Link>
          </li>
          <li className="">
            <Link to="dashboard" className="flex w-full flex-col justify-center gap-0 p-0 align-middle active:bg-transparent">
              <svg className="h-5 w-auto" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.81224 1.28536e-05C7.29082 1.28536e-05 6.30612 0.489932 5.4551 0.925416C4.60408 1.3609 3.88775 1.74195 2.57143 1.74195H2V3.48388H0V18H24V3.48388H22V1.74195H21.4286C20.1143 1.74195 19.3954 1.3609 18.5444 0.925416C17.6934 0.489932 16.7077 -0.00102401 15.1878 1.28536e-05C14.0255 -0.00257931 13.0857 0.386764 12 1.28832C10.9143 0.386764 9.97449 -0.00206088 8.81224 1.28536e-05ZM8.81224 1.1613C9.83265 1.1613 10.3939 1.37956 11.4286 2.29563V13.9251C10.5704 13.332 9.76633 13.0609 8.81224 13.063C7.29082 13.063 6.30612 13.5534 5.4551 13.9884C4.74082 14.3513 4.09847 14.6649 3.14235 14.7598V2.85813C4.35816 2.75134 5.22602 2.34696 5.96429 1.96902C6.81684 1.53302 7.52347 1.16027 8.81224 1.16182V1.1613ZM15.1898 1.1613C16.4786 1.1613 17.1852 1.5325 18.0378 1.96902C18.776 2.34644 19.6439 2.75082 20.8592 2.85762V14.7608C19.9036 14.6665 19.2602 14.3549 18.5469 13.9899C17.6959 13.5544 16.7102 13.063 15.1898 13.0645C14.2357 13.0645 13.4316 13.3336 12.5735 13.9262V2.29512C13.6092 1.37905 14.1719 1.15871 15.1898 1.1613ZM1.14235 4.64517H2V15.9678H2.57143C4.11429 15.9678 5.11173 15.4695 5.96429 15.0346C6.81684 14.5996 7.52347 14.2258 8.81224 14.2269C9.89235 14.2243 10.4515 14.4591 11.6184 15.5229L12.002 15.8765L12.3857 15.5229C13.5505 14.4576 14.1097 14.2227 15.1918 14.2269C16.4806 14.2269 17.1872 14.5981 18.0398 15.0346C18.8923 15.4711 19.8893 15.9678 21.4327 15.9678H22V4.64517H22.8571V16.8387H1.14235V4.64517Z"
                  fill="white"
                />
              </svg>
              <span className="mt-1 text-xs text-white">Learning</span>
            </Link>
          </li>
          <li className="">
            <Link to="heart-journal" className="flex w-full flex-col justify-center gap-0 p-0 align-middle active:bg-transparent">
              <svg className="h-5" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.8247 4.04763C15.7733 3.90772 12.5087 0.209293 12.4621 0.162601C12.2522 -0.0660143 12.9797 0.0133142 0.46644 0.0133142C0.208939 0.0133142 0 0.222097 0 0.479755V21.9333C0 22.057 0.0491905 22.1756 0.136638 22.2631C0.224086 22.3505 0.342763 22.3997 0.46644 22.3997H15.3907C15.5144 22.3997 15.633 22.3505 15.7205 22.2631C15.8079 22.1756 15.8571 22.057 15.8571 21.9333C15.8571 3.06341 15.8571 4.21072 15.8245 4.04762L15.8247 4.04763ZM12.5926 1.72027L14.365 3.74437H12.5926V1.72027ZM14.9246 21.4672H0.933001V0.945931H11.6598V4.21069C11.6598 4.33437 11.709 4.45305 11.7964 4.5405C11.8839 4.62794 12.0025 4.67713 12.1262 4.67713H14.9245L14.9246 21.4672Z"
                  fill="white"
                />
                <path
                  d="M7.59747 12.8158C7.68508 12.904 7.80422 12.9537 7.92868 12.9537C8.05298 12.9537 8.17213 12.904 8.25973 12.8158L11.4592 9.61633C12.0348 9.04152 12.2601 8.20326 12.0501 7.41717C11.8401 6.63124 11.2268 6.01709 10.4411 5.80594C9.65545 5.59465 8.81672 5.81874 8.24114 6.3937L7.92867 6.70617L7.61621 6.3937C7.04047 5.81873 6.20189 5.59466 5.41612 5.80594C4.63051 6.01706 4.01712 6.63124 3.80709 7.41717C3.59706 8.20326 3.82239 9.04152 4.39813 9.61633L7.59747 12.8158ZM6.3896 6.71107C6.78608 6.83241 6.89337 6.99091 7.59747 7.69516V7.69501C7.68508 7.78339 7.80422 7.83305 7.92868 7.83305C8.05298 7.83305 8.17213 7.78339 8.25973 7.69501L8.89871 7.05603V7.05619C9.23772 6.71623 9.73241 6.58303 10.1964 6.70671C10.6603 6.83039 11.0229 7.19222 11.1478 7.65582C11.2726 8.11946 11.1407 8.61444 10.8016 8.95424L7.92868 11.8272C4.91581 8.81432 4.66392 8.74904 4.66392 8.00277V8.00293C4.66642 7.57958 4.86708 7.18202 5.20579 6.92825C5.54465 6.67465 5.98269 6.59423 6.3896 6.71104L6.3896 6.71107Z"
                  fill="white"
                />
                <path
                  d="M3.26515 15.8704H12.5928C12.8504 15.8704 13.0592 15.6614 13.0592 15.4039C13.0592 15.1464 12.8504 14.9375 12.5928 14.9375H3.26515C3.00764 14.9375 2.79871 15.1464 2.79871 15.4039C2.79871 15.6614 3.00764 15.8704 3.26515 15.8704Z"
                  fill="white"
                />
                <path
                  d="M12.5928 17.27H3.26515C3.00764 17.27 2.79871 17.4788 2.79871 17.7363C2.79871 17.994 3.00764 18.2027 3.26515 18.2027H12.5928C12.8504 18.2027 13.0592 17.994 13.0592 17.7363C13.0592 17.4788 12.8504 17.27 12.5928 17.27Z"
                  fill="white"
                />
                <path
                  d="M18.889 4.67708C18.4562 4.67708 18.0409 4.84901 17.7349 5.15508C17.4286 5.4613 17.2567 5.87652 17.2567 6.30938C17.2567 20.4689 17.2567 19.6622 17.3081 19.8345C18.5533 22.3018 18.5019 22.3997 18.889 22.3997C19.2761 22.3997 19.2248 22.3018 20.4701 19.8112C20.5494 19.6572 20.5215 20.4735 20.5215 6.3093C20.5215 5.87644 20.3494 5.46121 20.0433 5.155C19.7373 4.84893 19.3221 4.677 18.889 4.677L18.889 4.67708ZM18.889 20.889L18.3014 19.7183C18.6798 19.5737 19.0983 19.5737 19.4768 19.7183L18.889 20.889ZM19.5886 18.7762C19.1308 18.6503 18.6474 18.6503 18.1894 18.7762V8.40837H19.5886V18.7762ZM19.5886 7.47572H18.1894V6.3097C18.1894 6.0597 18.3228 5.82875 18.5392 5.70383C18.7557 5.5789 19.0224 5.5789 19.2388 5.70383C19.4552 5.82875 19.5886 6.05971 19.5886 6.3097V7.47572Z"
                  fill="white"
                />
              </svg>
              <span className="mt-1 text-xs text-white">Journal</span>
            </Link>
          </li>
          <li className="">
            <Link to="heart-chart" className="flex w-full flex-col justify-center gap-0 p-0 align-middle active:bg-transparent">
              <svg className="h-5 w-auto" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.32199 2.50024e-06C4.61616 -0.000691425 3.9176 0.143068 3.26894 0.422506C2.62028 0.701945 2.03512 1.1112 1.54919 1.62529C-0.51777 3.7971 -0.515024 7.27888 1.54919 9.4516L9.43898 17.7605C9.51083 17.8362 9.59722 17.8964 9.69293 17.9376C9.78863 17.9787 9.89166 17.9999 9.99577 17.9999C10.0999 17.9999 10.2029 17.9787 10.2986 17.9376C10.3943 17.8964 10.4807 17.8362 10.5526 17.7605L18.4501 9.45988C20.5171 7.28761 20.5171 3.80629 18.4501 1.63357C17.9645 1.11892 17.3795 0.709048 16.7309 0.428944C16.0822 0.148839 15.3836 0.00438072 14.6776 0.00438072C13.9715 0.00438072 13.2729 0.148839 12.6243 0.428944C11.9756 0.709048 11.3907 1.11892 10.905 1.63357L10.0001 2.57445L9.09525 1.62529C8.60926 1.11131 8.02408 0.702149 7.37543 0.422792C6.72677 0.143436 6.02824 -0.000264371 5.32245 0.000461889L5.32199 2.50024e-06ZM5.32199 1.51222C6.27812 1.51222 7.24066 1.90797 7.98899 2.69488L9.44676 4.23146C9.51861 4.30712 9.605 4.36735 9.70071 4.4085C9.79641 4.44965 9.89944 4.47087 10.0035 4.47087C10.1077 4.47087 10.2107 4.44965 10.3064 4.4085C10.4021 4.36735 10.4885 4.30712 10.5603 4.23146L12.0099 2.70315C13.5074 1.12934 15.8394 1.12934 17.3365 2.70315C18.8337 4.27696 18.8341 6.82429 17.3365 8.3981C14.8915 10.9681 12.446 13.5367 10.0001 16.104L2.66277 8.39029C1.16656 6.81418 1.16564 4.26869 2.66277 2.69534C3.41156 1.90843 4.36632 1.51268 5.32245 1.51268L5.32199 1.51222Z"
                  fill="white"
                />
              </svg>
              <span className="mt-1 text-xs text-white">Heart Chart</span>
            </Link>
          </li>
          <li className="">
            <Link to="dashboard" className="flex w-full flex-col justify-center gap-0 p-0 align-middle active:bg-transparent">
              <svg className="h-5 w-auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.6503 19.9968H9.35367C9.15361 19.9969 8.9568 19.9461 8.78179 19.8492C8.60678 19.7522 8.45932 19.6124 8.35328 19.4427C8.25932 19.2945 7.68516 18.3325 7.3929 17.7638L6.35678 17.3377C5.72475 17.5377 4.58644 17.8217 4.48819 17.8456C4.29267 17.8906 4.08893 17.8852 3.89607 17.8299C3.70322 17.7746 3.52757 17.6713 3.38562 17.5295L2.4674 16.6115C2.32554 16.4697 2.22209 16.2941 2.16677 16.1014C2.11146 15.9086 2.1061 15.7049 2.1512 15.5095C2.19122 15.3373 2.46347 14.251 2.65962 13.6409L2.23338 12.6089C1.63314 12.3046 0.632748 11.6987 0.554146 11.6487C0.384489 11.5427 0.244605 11.3953 0.147661 11.2203C0.0507175 11.0453 -9.73197e-05 10.8485 1.39927e-07 10.6485V9.34826C-9.73197e-05 9.14824 0.0507175 8.95147 0.147661 8.7765C0.244605 8.60152 0.384489 8.45408 0.554146 8.34807C0.702061 8.25377 1.66458 7.67972 2.23338 7.38788L2.65962 6.35553C2.45918 5.72362 2.1755 4.58519 2.1512 4.48731C2.10617 4.29183 2.11157 4.08812 2.16688 3.89529C2.22218 3.70247 2.32559 3.52686 2.4674 3.38495L3.38562 2.46691C3.52753 2.32512 3.70319 2.22174 3.89607 2.1665C4.08895 2.11126 4.29271 2.10597 4.48819 2.15114C4.6604 2.19114 5.74654 2.46298 6.35678 2.65909L7.38933 2.23294C7.69338 1.63282 8.29969 0.632624 8.34971 0.554037C8.45589 0.384553 8.60339 0.244807 8.77837 0.147901C8.95335 0.0509946 9.15007 0.000103806 9.3501 0H10.6453C10.8453 0.000103806 11.042 0.0509946 11.217 0.147901C11.392 0.244807 11.5395 0.384553 11.6456 0.554037C11.7396 0.702281 12.3138 1.66426 12.606 2.23294L13.6382 2.65909C14.2717 2.45763 15.41 2.17186 15.5082 2.14935C15.7039 2.10409 15.9078 2.10933 16.1009 2.16457C16.294 2.21981 16.4698 2.32324 16.6119 2.46513L17.5305 3.38352C17.6723 3.52537 17.7758 3.70098 17.8311 3.89382C17.8864 4.08667 17.8918 4.29041 17.8467 4.48588C17.8063 4.6577 17.5344 5.74399 17.3382 6.35411L17.763 7.38717C18.3633 7.69115 19.3637 8.29735 19.4423 8.34735C19.6119 8.45337 19.7518 8.6008 19.8488 8.77578C19.9457 8.95076 19.9965 9.14752 19.9964 9.34755V10.6435C19.9965 10.8435 19.9457 11.0403 19.8488 11.2153C19.7518 11.3903 19.6119 11.5377 19.4423 11.6437C19.2944 11.738 18.3318 12.3121 17.763 12.6039L17.345 13.6398C17.5451 14.2721 17.8291 15.4102 17.8531 15.5084C17.8981 15.7038 17.8927 15.9075 17.8374 16.1003C17.7821 16.293 17.6787 16.4686 17.5369 16.6104L16.6187 17.5284C16.4767 17.6702 16.3011 17.7736 16.1082 17.8289C15.9154 17.8842 15.7116 17.8896 15.5161 17.8446C15.3442 17.8046 14.2577 17.5327 13.6475 17.3366L12.615 17.7628C12.3109 18.3629 11.7046 19.3631 11.6546 19.4417C11.5482 19.6119 11.4001 19.7522 11.2244 19.8494C11.0486 19.9465 10.8511 19.9972 10.6503 19.9968ZM6.38644 16.1482L8.20108 16.9023L8.29111 17.1023C8.47511 17.5024 9.1393 18.6265 9.29151 18.8566C9.29852 18.8677 9.30828 18.8768 9.31986 18.8831C9.33144 18.8894 9.34444 18.8925 9.3576 18.8923H10.6542C10.6673 18.8925 10.6803 18.8894 10.6919 18.8831C10.7035 18.8768 10.7133 18.8677 10.7203 18.8566C10.8382 18.6683 11.5202 17.5284 11.7207 17.1023L11.8107 16.9023L13.6329 16.1478L13.8329 16.2218C14.247 16.3739 15.5097 16.6979 15.7755 16.7619C15.7881 16.7658 15.8015 16.766 15.8142 16.7625C15.8269 16.7589 15.8383 16.7518 15.8469 16.7419L16.7652 15.8238C16.7748 15.8149 16.7818 15.8036 16.7854 15.791C16.7889 15.7784 16.789 15.765 16.7855 15.7524C16.7355 15.5381 16.4111 14.2482 16.2453 13.8102L16.1714 13.6102L16.9216 11.7937L17.1217 11.7037C17.5219 11.5198 18.6463 10.8557 18.8763 10.7035C18.8875 10.6966 18.8967 10.6868 18.903 10.6752C18.9092 10.6636 18.9124 10.6506 18.9121 10.6374V9.34255C18.9124 9.32943 18.9092 9.31647 18.9029 9.30494C18.8967 9.29341 18.8875 9.28372 18.8763 9.27682C18.6881 9.15858 17.5476 8.47667 17.1214 8.27663L16.9213 8.18661L16.1671 6.36482L16.241 6.16443C16.3932 5.75042 16.7173 4.48802 16.7812 4.22226C16.7843 4.20963 16.784 4.19644 16.7805 4.18393C16.777 4.17143 16.7704 4.16003 16.7612 4.15082L15.843 3.23278C15.8341 3.22322 15.8227 3.2163 15.8101 3.21278C15.7975 3.20925 15.7842 3.20925 15.7716 3.21277C15.5572 3.26278 14.271 3.58678 13.829 3.75288L13.6286 3.82682L11.8039 3.07668L11.7139 2.87664C11.5299 2.47656 10.8657 1.35205 10.7135 1.12201C10.7065 1.11084 10.6967 1.10168 10.6852 1.09542C10.6736 1.08916 10.6606 1.08601 10.6474 1.08628H9.35903C9.34587 1.08605 9.33287 1.08921 9.32129 1.09547C9.30971 1.10173 9.29995 1.11087 9.29294 1.12201C9.17503 1.3099 8.49298 2.45012 8.29254 2.87628L8.20251 3.07632L6.38036 3.8304L6.18028 3.75645C5.76619 3.60464 4.50355 3.28064 4.23774 3.21635C4.22517 3.21239 4.21172 3.21217 4.19903 3.21572C4.18634 3.21927 4.17496 3.22644 4.16628 3.23635L3.24949 4.1576C3.23993 4.16654 3.23301 4.17793 3.22948 4.19052C3.22596 4.20312 3.22596 4.21645 3.22948 4.22905C3.2795 4.44337 3.60392 5.73363 3.7697 6.17157L3.84401 6.37161L3.09372 8.1959L2.89221 8.28448C2.49205 8.46845 1.36768 9.13251 1.13759 9.28468C1.12645 9.29169 1.11731 9.30146 1.11105 9.31303C1.10479 9.32461 1.10162 9.33761 1.10186 9.35077V10.6471C1.10162 10.6603 1.10479 10.6732 1.11105 10.6848C1.11731 10.6964 1.12645 10.7062 1.13759 10.7132C1.32588 10.8311 2.46633 11.513 2.89256 11.7134L3.09264 11.8034L3.84687 13.6252L3.77291 13.8252C3.62071 14.2392 3.29665 15.5016 3.2327 15.7674C3.22974 15.78 3.23005 15.7932 3.23362 15.8057C3.23718 15.8182 3.24387 15.8296 3.25306 15.8388L4.17128 16.7569C4.18018 16.7665 4.19155 16.7735 4.20415 16.7771C4.21676 16.7807 4.23011 16.7807 4.24274 16.7772C4.45711 16.7272 5.74333 16.4029 6.18529 16.2371L6.38644 16.1482ZM10.0021 14.6679C8.91844 14.6698 7.8676 14.2959 7.02879 13.6099C6.18999 12.9238 5.61517 11.9681 5.40232 10.9057C5.18948 9.84335 5.35179 8.74004 5.86159 7.78391C6.3714 6.82779 7.19712 6.07806 8.19798 5.66255C9.19883 5.24704 10.3129 5.19148 11.3501 5.50535C12.3873 5.81921 13.2836 6.48307 13.886 7.38372C14.4885 8.28438 14.7598 9.36606 14.6538 10.4444C14.5477 11.5227 14.0709 12.5308 13.3045 13.2969C12.4291 14.1736 11.2412 14.6667 10.0021 14.6679ZM10.0021 6.42841C9.17533 6.42732 8.37373 6.71297 7.734 7.23667C7.09427 7.76037 6.65601 8.48969 6.49393 9.30031C6.33186 10.1109 6.456 10.9526 6.84519 11.682C7.23439 12.4113 7.86454 12.9831 8.62823 13.2999C9.39192 13.6167 10.2419 13.6589 11.0332 13.4193C11.8245 13.1796 12.5082 12.673 12.9677 11.9858C13.4272 11.2986 13.6341 10.4733 13.5531 9.65058C13.4721 8.8279 13.1082 8.05878 12.5235 7.47433C11.855 6.80528 10.948 6.42906 10.0021 6.42841Z"
                  fill="white"
                />
              </svg>
              <span className="mt-1 text-xs text-white">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}