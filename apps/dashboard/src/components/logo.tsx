import { useTheme } from "next-themes"
import { SVGAttributes } from "react"

const Logo = ({ className, ...rest }: SVGAttributes<SVGElement>) => {
  const { theme, resolvedTheme } = useTheme()
  const isDark = theme === "dark" || resolvedTheme === "dark"

  return (
    <svg
      width="97"
      height="18"
      viewBox="0 0 97 18"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      {...rest}
    >
      <path
        d="M85.6226 16.614V4.6745H88.3221V7.02289L88.1026 6.60589C88.3806 5.88893 88.8342 5.34756 89.4634 4.98177C90.1072 4.60134 90.8534 4.41113 91.702 4.41113C92.5799 4.41113 93.3554 4.60134 94.0285 4.98177C94.7162 5.36219 95.2502 5.89625 95.6306 6.58394C96.0111 7.257 96.2013 8.03979 96.2013 8.93233V16.614H93.3261V9.6127C93.3261 9.08596 93.2237 8.63238 93.0189 8.25195C92.814 7.87153 92.5287 7.57889 92.1629 7.37405C91.8118 7.15457 91.3948 7.04484 90.9119 7.04484C90.4437 7.04484 90.0267 7.15457 89.6609 7.37405C89.2951 7.57889 89.0098 7.87153 88.805 8.25195C88.6001 8.63238 88.4977 9.08596 88.4977 9.6127V16.614H85.6226Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        d="M74.626 16.6143V7.24269H72.519V4.67483H74.626V4.27977C74.626 3.3726 74.8089 2.60444 75.1747 1.97528C75.5551 1.33148 76.0819 0.841323 76.7549 0.504794C77.428 0.168265 78.2254 0 79.1472 0C79.3228 0 79.513 0.0146318 79.7178 0.0438948C79.9373 0.0585271 80.1202 0.0804749 80.2665 0.109738V2.58981C80.1202 2.56055 79.9812 2.54591 79.8495 2.54591C79.7325 2.53128 79.6227 2.52397 79.5203 2.52397C78.8765 2.52397 78.379 2.67028 78.0279 2.96292C77.6767 3.24092 77.5011 3.67987 77.5011 4.27977V4.67483H82.7246V7.24269H77.5011V16.6143H74.626ZM81.6492 16.6143V4.67483H84.5463V16.6143H81.6492Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        d="M66.3385 16.8773C65.1679 16.8773 64.0998 16.6066 63.1341 16.0653C62.1831 15.5239 61.4222 14.785 60.8516 13.8486C60.2956 12.9121 60.0176 11.844 60.0176 10.6442C60.0176 9.44444 60.2956 8.37632 60.8516 7.43989C61.4222 6.50347 62.1831 5.76456 63.1341 5.22319C64.0852 4.68182 65.1533 4.41113 66.3385 4.41113C67.509 4.41113 68.5698 4.68182 69.5209 5.22319C70.4719 5.76456 71.2255 6.50347 71.7815 7.43989C72.3521 8.36169 72.6374 9.4298 72.6374 10.6442C72.6374 11.844 72.3521 12.9121 71.7815 13.8486C71.2108 14.785 70.45 15.5239 69.4989 16.0653C68.5479 16.6066 67.4944 16.8773 66.3385 16.8773ZM66.3385 14.2436C66.9823 14.2436 67.5456 14.09 68.0284 13.7827C68.5259 13.4755 68.9136 13.0511 69.1917 12.5098C69.4843 11.9538 69.6306 11.3319 69.6306 10.6442C69.6306 9.94191 69.4843 9.32738 69.1917 8.80064C68.9136 8.25927 68.5259 7.83495 68.0284 7.52768C67.5456 7.20579 66.9823 7.04484 66.3385 7.04484C65.68 7.04484 65.1021 7.20579 64.6046 7.52768C64.1071 7.83495 63.7121 8.25927 63.4194 8.80064C63.1414 9.32738 63.0024 9.94191 63.0024 10.6442C63.0024 11.3319 63.1414 11.9538 63.4194 12.5098C63.7121 13.0511 64.1071 13.4755 64.6046 13.7827C65.1021 14.09 65.68 14.2436 66.3385 14.2436Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        d="M56.2871 16.6146V4.54688H59.1367L59.1622 16.6146H56.2871ZM56.2871 3.33633V0.263672H59.1622V3.33633H56.2871Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        d="M49.3955 16.6141V4.67465H52.0951V7.33031L51.8756 6.93525C52.1536 6.04272 52.5852 5.42087 53.1705 5.06971C53.7704 4.71855 54.4873 4.54297 55.3213 4.54297H56.0237V7.08888H54.9921C54.1728 7.08888 53.5143 7.34494 53.0169 7.85705C52.5194 8.35452 52.2706 9.05684 52.2706 9.96401V16.6141H49.3955Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        d="M41.6022 16.8773C40.7682 16.8773 40.044 16.7383 39.4294 16.4603C38.8149 16.1823 38.3394 15.7873 38.0028 15.2752C37.6663 14.7484 37.498 14.1412 37.498 13.4535C37.498 12.7951 37.6444 12.2098 37.937 11.6977C38.2296 11.171 38.6832 10.732 39.2977 10.3809C39.9123 10.0297 40.6878 9.78096 41.6242 9.63465L45.5308 8.99817V11.1929L42.1729 11.7636C41.6022 11.866 41.1779 12.0489 40.8999 12.3122C40.6219 12.5756 40.4829 12.9195 40.4829 13.3438C40.4829 13.7535 40.6365 14.0827 40.9438 14.3314C41.2657 14.5655 41.6608 14.6826 42.129 14.6826C42.7289 14.6826 43.2556 14.5582 43.7092 14.3095C44.1774 14.0461 44.5359 13.6876 44.7846 13.234C45.048 12.7805 45.1797 12.283 45.1797 11.7416V8.66896C45.1797 8.15685 44.9748 7.73253 44.5652 7.396C44.1701 7.04484 43.6434 6.86926 42.9849 6.86926C42.3704 6.86926 41.8217 7.03752 41.3389 7.37405C40.8707 7.69595 40.5268 8.12758 40.3073 8.66896L37.9589 7.52768C38.1931 6.89852 38.5588 6.35715 39.0563 5.90357C39.5684 5.43535 40.1683 5.06956 40.856 4.80619C41.5437 4.54282 42.2899 4.41113 43.0947 4.41113C44.075 4.41113 44.9383 4.59403 45.6845 4.95982C46.4307 5.31098 47.0086 5.80846 47.4183 6.45225C47.8427 7.08142 48.0548 7.82032 48.0548 8.66896V16.614H45.3333V14.5728L45.9478 14.5289C45.6406 15.0411 45.2748 15.4727 44.8505 15.8239C44.4262 16.1604 43.9433 16.4238 43.4019 16.614C42.8606 16.7895 42.2607 16.8773 41.6022 16.8773Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        d="M33.7681 16.6146V4.67513H36.6432V16.6146H33.7681ZM33.7681 3.33633V0.263672H36.6432V3.33633H33.7681Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        d="M25.8915 16.8777C24.7356 16.8777 23.7041 16.607 22.7969 16.0656C21.8898 15.5096 21.1728 14.7561 20.6461 13.805C20.1193 12.8539 19.856 11.8005 19.856 10.6446C19.856 9.47402 20.1193 8.42054 20.6461 7.48411C21.1728 6.54768 21.8898 5.80147 22.7969 5.24546C23.7187 4.68946 24.7429 4.41145 25.8696 4.41145C26.7767 4.41145 27.5815 4.59435 28.2838 4.96014C29.0008 5.3113 29.5641 5.80878 29.9738 6.45258L29.5348 7.04516V0H32.4099V16.6143H29.6885V14.3098L29.9957 14.8804C29.586 15.5242 29.0154 16.0217 28.2838 16.3729C27.5522 16.7094 26.7548 16.8777 25.8915 16.8777ZM26.1988 14.244C26.8572 14.244 27.4352 14.0903 27.9327 13.7831C28.4301 13.4758 28.8179 13.0515 29.0959 12.5101C29.3885 11.9687 29.5348 11.3469 29.5348 10.6446C29.5348 9.95687 29.3885 9.34234 29.0959 8.80096C28.8179 8.24496 28.4301 7.81332 27.9327 7.50606C27.4352 7.19879 26.8572 7.04516 26.1988 7.04516C25.555 7.04516 24.977 7.20611 24.4649 7.52801C23.9528 7.83527 23.5505 8.25959 23.2578 8.80096C22.9798 9.3277 22.8408 9.94223 22.8408 10.6446C22.8408 11.3469 22.9798 11.9687 23.2578 12.5101C23.5505 13.0515 23.9528 13.4758 24.4649 13.7831C24.977 14.0903 25.555 14.244 26.1988 14.244Z"
        fill={isDark ? "white" : "#121212"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49997 0.614258C10.8472 0.614258 12.9723 1.56571 14.5106 3.10398C16.0485 4.64224 17 6.76732 17 9.11426C17 11.4615 16.0485 13.5866 14.5106 15.1249C12.9723 16.6628 10.8472 17.6143 8.49997 17.6143C6.15287 17.6143 4.02781 16.6628 2.48963 15.1249C0.951425 13.5866 0 11.4615 0 9.11426C0 6.76732 0.951425 4.64224 2.48963 3.10398C4.02781 1.56571 6.15287 0.614258 8.49997 0.614258ZM3.73242 8.70066C3.83275 7.52955 4.35436 6.47893 5.14502 5.70164C6.00939 4.85186 7.19398 4.3275 8.49997 4.3275C9.82171 4.3275 11.0186 4.86316 11.8847 5.72957C12.7511 6.59567 13.2867 7.79252 13.2867 9.11426C13.2867 9.21185 13.2839 9.30976 13.2776 9.40829C14.568 9.27869 15.5408 8.67462 15.9412 7.05727C15.5813 5.75279 14.8878 4.58638 13.9577 3.65658C12.5609 2.25984 10.6313 1.39594 8.49997 1.39594C6.36864 1.39594 4.43902 2.25984 3.04231 3.65658C1.64556 5.05332 0.781688 6.9829 0.781688 9.11426C0.781688 9.43936 0.801835 9.75944 0.840841 10.0736C1.71419 9.3085 2.6958 8.89397 3.73242 8.70066ZM12.4931 9.43402C12.501 9.33078 12.5054 9.22409 12.5054 9.11426C12.5054 8.00841 12.0569 7.00707 11.3321 6.28218C10.6075 5.55761 9.60613 5.10918 8.49997 5.10918C7.40529 5.10918 6.41379 5.54725 5.69154 6.25739C5.06839 6.86994 4.64469 7.68457 4.52676 8.5946C6.13661 8.45872 7.84229 8.75778 9.45833 9.04114C10.5378 9.23037 11.5731 9.41174 12.4931 9.43402ZM13.6448 14.8682C12.4163 15.305 10.9734 15.3772 9.54243 15.4487C8.00475 15.5253 6.48236 15.6015 5.34522 16.1604C6.30835 16.5925 7.37614 16.8326 8.49997 16.8326C10.4763 16.8326 12.2791 16.0898 13.6448 14.8682ZM4.52437 15.7311C5.8619 14.8522 7.67375 14.7615 9.50571 14.6698C12.0513 14.5427 14.6386 14.4135 15.6566 12.0107C15.8226 11.6008 15.9544 11.1738 16.0482 10.7325C15.1394 12.2561 13.4352 12.7177 11.4657 12.82C10.5152 12.8695 9.5054 12.8306 8.49651 12.7917C6.08342 12.6988 3.67861 12.6066 2.33772 13.7623C2.55381 14.0485 2.78925 14.319 3.04231 14.5719C3.48606 15.016 3.98363 15.4057 4.52437 15.7311ZM1.89792 13.1146C3.46977 11.8189 5.99264 11.9156 8.52413 12.0132C9.51356 12.0511 10.5042 12.0894 11.4259 12.0414C13.5334 11.9319 15.2876 11.3448 15.8101 9.11646C14.4378 10.7068 12.0011 10.28 9.32402 9.81059C6.4084 9.29909 3.18123 8.73362 1.01077 10.988C1.20018 11.7477 1.50212 12.4629 1.89792 13.1146Z"
        fill={isDark ? "white" : "#121212"}
      />
    </svg>
  )
}

export default Logo
