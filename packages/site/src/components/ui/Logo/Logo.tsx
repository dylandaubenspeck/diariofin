type LogoProps = {
  color?: "dark" | "light";
};

export const Logo = ({ color = "dark" }: LogoProps) => {
  return (
    <>
      {color === "dark" ? (
        <svg
          width="1984"
          height="489"
          viewBox="0 0 1984 489"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1891.44 167.865C1891.44 130.156 1913.36 111.302 1939.55 111.302C1968.17 111.302 1980.35 130.765 1980.35 151.444C1980.35 165.433 1973.04 176.989 1965.12 182.462C1957.82 180.03 1952.34 172.731 1947.46 163.608C1947.46 181.246 1984 221.996 1984 263.962C1984 313.836 1946.25 336.339 1909.71 336.339C1868.3 336.339 1846.99 312.011 1846.99 280.384C1846.99 268.828 1852.47 253.015 1860.39 239.634C1863.43 233.552 1876.22 235.985 1871.96 245.108C1869.52 249.365 1868.91 253.015 1868.91 256.664C1868.91 265.787 1876.22 274.91 1889.62 274.91C1901.79 274.91 1920.06 270.653 1920.06 245.108C1920.06 215.914 1891.44 201.317 1891.44 167.865Z"
            fill="black"
          />
          <path
            d="M1700.92 235.377C1700.92 175.772 1725.28 104.004 1789.21 104.004C1824.53 104.004 1840.36 126.508 1840.36 152.661C1840.36 188.545 1811.74 231.728 1763.64 237.202C1768.51 267.004 1785.56 277.952 1806.26 277.952C1830.01 277.952 1848.28 267.612 1857.41 245.108C1858.63 242.675 1860.46 242.067 1862.29 242.067C1865.33 242.067 1867.16 244.5 1867.16 246.325C1862.89 292.549 1826.97 335.731 1776.43 335.731C1725.89 335.731 1700.92 282.817 1700.92 235.377ZM1762.42 221.388C1788.61 211.049 1812.96 184.896 1812.96 166.041C1812.96 152.661 1806.26 146.578 1798.35 146.578C1768.51 146.578 1762.42 200.709 1762.42 221.388Z"
            fill="black"
          />
          <path
            d="M1545.71 235.377C1545.71 175.772 1570.07 104.004 1634.01 104.004C1660.8 104.004 1685.77 123.466 1685.77 151.444C1685.77 163 1682.11 176.989 1666.28 176.989C1664.45 176.989 1662.02 175.772 1661.41 173.948C1658.97 163.608 1655.93 146.578 1643.14 146.578C1621.83 146.578 1607.22 179.422 1607.22 217.131C1607.22 262.746 1626.7 277.952 1651.06 277.952C1674.81 277.952 1693.07 267.612 1702.21 245.108C1703.43 242.675 1705.25 242.067 1707.08 242.067C1710.12 242.067 1711.95 244.5 1711.95 246.325C1707.69 292.549 1671.76 335.731 1621.22 335.731C1570.68 335.731 1545.71 282.817 1545.71 235.377Z"
            fill="black"
          />
          <path
            d="M1451.32 20.6793C1455.58 15.8136 1461.06 12.1644 1467.76 10.9479C1484.2 6.69048 1502.47 15.2054 1506.73 37.1009C1510.39 60.2129 1507.95 85.7576 1489.07 90.6233C1474.46 94.2726 1458.02 88.1905 1453.76 70.5524C1453.15 66.9032 1458.02 38.3173 1451.32 20.6793ZM1449.49 124.075C1456.19 116.168 1467.76 111.302 1479.94 111.302C1506.12 111.302 1511 127.724 1511 140.496C1511 161.784 1508.56 204.967 1508.56 239.634C1508.56 259.097 1511.6 274.302 1521.96 274.302C1537.79 274.302 1542.05 256.664 1546.92 245.108C1547.53 242.676 1549.97 242.067 1551.79 242.067C1555.45 242.067 1556.67 244.5 1556.06 246.325C1553.01 283.426 1531.7 335.732 1492.73 335.732C1465.94 335.732 1450.1 318.702 1447.06 287.683C1441.58 235.377 1453.76 186.72 1449.49 124.075Z"
            fill="black"
          />
          <path
            d="M1251.59 12.1642C1257.68 4.25744 1269.25 0 1281.42 0C1307.61 0 1312.48 16.4216 1312.48 29.194C1312.48 67.5112 1308.22 117.384 1305.17 166.041C1319.79 129.549 1344.75 111.302 1368.5 111.302C1401.38 111.302 1431.22 146.578 1431.22 206.183C1431.22 273.694 1400.17 329.649 1349.62 329.649C1327.7 329.649 1313.09 318.093 1303.96 299.239C1303.96 305.929 1304.56 312.011 1305.78 316.877C1306.39 322.351 1305.78 327.216 1301.52 330.257C1296.04 333.907 1290.56 335.731 1283.86 335.731C1241.84 335.731 1242.45 274.91 1242.45 250.582C1242.45 171.515 1256.46 91.2313 1251.59 12.1642ZM1344.14 273.694C1363.02 273.694 1372.76 239.634 1372.76 208.007C1372.76 179.422 1364.85 153.269 1349.62 153.269C1334.4 153.269 1320.4 195.235 1320.4 229.903C1320.4 253.623 1327.09 273.694 1344.14 273.694Z"
            fill="black"
          />
          <path
            d="M1054.78 124.074C1060.87 116.168 1072.44 111.302 1084.62 111.302C1110.81 111.302 1115.68 127.724 1115.68 140.496C1115.68 161.783 1105.93 204.966 1105.93 239.634C1105.93 259.097 1108.98 274.302 1119.33 274.302C1157.08 274.302 1154.65 147.186 1153.43 124.074C1159.52 116.168 1171.09 111.302 1183.27 111.302C1209.45 111.302 1214.32 127.724 1214.32 140.496C1214.32 161.783 1204.58 204.966 1204.58 239.634C1204.58 259.097 1207.63 274.302 1217.98 274.302C1234.42 274.302 1238.68 256.664 1242.94 245.108C1243.55 242.675 1245.99 242.067 1247.81 242.067C1250.86 242.067 1252.69 244.5 1252.69 246.324C1249.03 283.425 1227.72 335.731 1189.36 335.731C1157.69 335.731 1144.91 313.227 1142.47 284.642C1133.34 312.011 1116.29 335.731 1090.71 335.731C1063.31 335.731 1047.48 318.701 1044.43 287.683C1038.95 235.377 1058.44 186.72 1054.78 124.074Z"
            fill="black"
          />
          <path
            d="M968.632 19.4627C972.894 14.597 978.374 10.9477 985.073 9.73131C1001.51 5.47386 1019.78 13.9888 1024.04 35.8843C1027.7 58.9962 1025.26 84.541 1006.39 89.4067C991.771 93.0559 975.33 86.9738 971.067 69.3358C970.458 65.0783 975.33 37.1007 968.632 19.4627ZM852.935 356.41C855.371 354.586 857.807 355.802 859.025 358.235C863.896 368.575 873.639 380.739 899.214 380.739C952.799 380.739 952.799 319.31 958.28 190.978C958.889 170.907 958.889 152.052 961.324 140.496C963.151 127.724 971.067 111.302 997.251 111.302C1009.43 111.302 1020.39 116.168 1025.26 124.075C1017.95 155.093 1015.52 191.586 1015.52 223.821C1015.52 276.127 1026.48 326 1023.44 372.832C1017.95 445.817 964.369 489 913.828 489C854.762 489 825.533 461.022 825.533 416.623C825.533 384.388 835.276 367.966 852.935 356.41Z"
            fill="black"
          />
          <path
            d="M752.343 124.074C758.432 116.168 770.002 111.302 782.18 111.302C808.364 111.302 813.235 127.724 813.235 140.496C813.235 161.783 803.493 204.966 803.493 239.634C803.493 259.097 806.537 274.302 816.889 274.302C854.643 274.302 852.207 147.186 850.989 124.074C857.078 116.168 868.648 111.302 880.826 111.302C907.01 111.302 911.882 127.724 911.882 140.496C911.882 161.783 902.139 204.966 902.139 239.634C902.139 259.097 905.184 274.302 915.535 274.302C931.976 274.302 936.239 256.664 940.501 245.108C941.11 242.675 943.546 242.067 945.373 242.067C948.417 242.067 950.244 244.5 950.244 246.324C946.591 283.425 925.278 335.731 886.916 335.731C855.251 335.731 842.464 313.227 840.028 284.642C830.894 312.011 813.844 335.731 788.269 335.731C760.868 335.731 745.035 318.701 741.991 287.683C736.51 235.377 755.996 186.72 752.343 124.074Z"
            fill="black"
          />
          <path
            d="M540.664 285.25C545.536 283.426 549.189 285.858 549.189 291.332C549.189 315.052 555.887 336.948 591.205 336.948C635.048 336.948 659.405 264.571 666.712 192.802C671.584 142.929 672.193 93.0561 675.237 67.5113C660.014 93.0561 630.786 133.198 584.507 133.198C555.279 133.198 535.184 113.127 535.184 80.8919C535.184 77.2426 535.793 73.5934 537.62 69.9441C542.491 70.5523 546.754 70.5523 551.016 70.5523C593.641 72.9852 619.216 54.7389 646.618 23.1121C669.148 22.5039 704.466 24.3285 714.818 46.224C716.644 49.8732 718.471 111.911 719.08 170.299C720.907 284.642 712.991 405.067 589.378 405.067C535.793 405.067 509 367.358 509 333.299C509 312.011 519.961 291.94 540.664 285.25Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M200 433C310.457 433 400 343.457 400 233C400 122.543 310.457 33 200 33C89.5431 33 0 122.543 0 233C0 343.457 89.5431 433 200 433ZM114.667 312.263C98.9644 336.306 91.4958 352.206 86.4616 373.969C45.3192 340.791 19 289.969 19 233C19 133.036 100.036 52 200 52C299.964 52 381 133.036 381 233C381 289.677 354.95 340.269 314.17 373.457C310.643 351.912 302.254 336.166 282.889 312.485L298 270.93C320.444 208.93 325.111 149.596 325.111 149.596C325.111 149.596 314.444 142.485 301.778 148.263C287.778 154.707 267.111 175.374 251.111 199.374C236.222 221.818 210.223 273.596 203.556 292.707C178.667 246.93 125.556 192.485 92 185.818C75.3335 182.485 68 195.818 68 195.818C78.8892 219.374 114.667 311.152 114.667 312.263ZM243.776 370.485C233.776 365.152 230.665 349.596 238.221 341.374C247.11 331.596 259.11 339.596 259.11 355.152C259.11 365.152 250.221 374.041 243.776 370.485ZM150.309 341.539C142.753 349.761 145.864 365.317 155.864 370.65C162.309 374.205 171.198 365.317 171.198 355.317C171.198 339.761 159.198 331.761 150.309 341.539ZM195.11 402.485C190.443 399.374 189.11 391.374 192.443 386.93C198.665 379.596 213.332 385.596 211.999 394.93C211.11 401.596 200.887 406.041 195.11 402.485Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          width="1984"
          height="489"
          viewBox="0 0 1984 489"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1891.44 167.865C1891.44 130.156 1913.36 111.302 1939.55 111.302C1968.17 111.302 1980.35 130.765 1980.35 151.444C1980.35 165.433 1973.04 176.989 1965.12 182.462C1957.82 180.03 1952.34 172.731 1947.46 163.608C1947.46 181.246 1984 221.996 1984 263.962C1984 313.836 1946.25 336.339 1909.71 336.339C1868.3 336.339 1846.99 312.011 1846.99 280.384C1846.99 268.828 1852.47 253.015 1860.39 239.634C1863.43 233.552 1876.22 235.985 1871.96 245.108C1869.52 249.365 1868.91 253.015 1868.91 256.664C1868.91 265.787 1876.22 274.91 1889.62 274.91C1901.79 274.91 1920.06 270.653 1920.06 245.108C1920.06 215.914 1891.44 201.317 1891.44 167.865Z"
            fill="url(#paint0_linear_432_20)"
          />
          <path
            d="M1700.92 235.377C1700.92 175.772 1725.28 104.004 1789.21 104.004C1824.53 104.004 1840.36 126.508 1840.36 152.661C1840.36 188.545 1811.74 231.728 1763.64 237.202C1768.51 267.004 1785.56 277.952 1806.26 277.952C1830.01 277.952 1848.28 267.612 1857.41 245.108C1858.63 242.675 1860.46 242.067 1862.29 242.067C1865.33 242.067 1867.16 244.5 1867.16 246.325C1862.89 292.549 1826.97 335.731 1776.43 335.731C1725.89 335.731 1700.92 282.817 1700.92 235.377ZM1762.42 221.388C1788.61 211.049 1812.96 184.896 1812.96 166.041C1812.96 152.661 1806.26 146.578 1798.35 146.578C1768.51 146.578 1762.42 200.709 1762.42 221.388Z"
            fill="url(#paint1_linear_432_20)"
          />
          <path
            d="M1545.71 235.377C1545.71 175.772 1570.07 104.004 1634.01 104.004C1660.8 104.004 1685.77 123.466 1685.77 151.444C1685.77 163 1682.11 176.989 1666.28 176.989C1664.45 176.989 1662.02 175.772 1661.41 173.948C1658.97 163.608 1655.93 146.578 1643.14 146.578C1621.83 146.578 1607.22 179.422 1607.22 217.131C1607.22 262.746 1626.7 277.952 1651.06 277.952C1674.81 277.952 1693.07 267.612 1702.21 245.108C1703.43 242.675 1705.25 242.067 1707.08 242.067C1710.12 242.067 1711.95 244.5 1711.95 246.325C1707.69 292.549 1671.76 335.731 1621.22 335.731C1570.68 335.731 1545.71 282.817 1545.71 235.377Z"
            fill="url(#paint2_linear_432_20)"
          />
          <path
            d="M1451.32 20.6793C1455.58 15.8136 1461.06 12.1644 1467.76 10.9479C1484.2 6.69048 1502.47 15.2054 1506.73 37.1009C1510.39 60.2129 1507.95 85.7576 1489.07 90.6233C1474.46 94.2726 1458.02 88.1905 1453.76 70.5524C1453.15 66.9032 1458.02 38.3173 1451.32 20.6793ZM1449.49 124.075C1456.19 116.168 1467.76 111.302 1479.94 111.302C1506.12 111.302 1511 127.724 1511 140.496C1511 161.784 1508.56 204.967 1508.56 239.634C1508.56 259.097 1511.6 274.302 1521.96 274.302C1537.79 274.302 1542.05 256.664 1546.92 245.108C1547.53 242.676 1549.97 242.067 1551.79 242.067C1555.45 242.067 1556.67 244.5 1556.06 246.325C1553.01 283.426 1531.7 335.732 1492.73 335.732C1465.94 335.732 1450.1 318.702 1447.06 287.683C1441.58 235.377 1453.76 186.72 1449.49 124.075Z"
            fill="url(#paint3_linear_432_20)"
          />
          <path
            d="M1251.59 12.1642C1257.68 4.25744 1269.25 0 1281.42 0C1307.61 0 1312.48 16.4216 1312.48 29.194C1312.48 67.5112 1308.22 117.384 1305.17 166.041C1319.79 129.549 1344.75 111.302 1368.5 111.302C1401.38 111.302 1431.22 146.578 1431.22 206.183C1431.22 273.694 1400.17 329.649 1349.62 329.649C1327.7 329.649 1313.09 318.093 1303.96 299.239C1303.96 305.929 1304.56 312.011 1305.78 316.877C1306.39 322.351 1305.78 327.216 1301.52 330.257C1296.04 333.907 1290.56 335.731 1283.86 335.731C1241.84 335.731 1242.45 274.91 1242.45 250.582C1242.45 171.515 1256.46 91.2313 1251.59 12.1642ZM1344.14 273.694C1363.02 273.694 1372.76 239.634 1372.76 208.007C1372.76 179.422 1364.85 153.269 1349.62 153.269C1334.4 153.269 1320.4 195.235 1320.4 229.903C1320.4 253.623 1327.09 273.694 1344.14 273.694Z"
            fill="url(#paint4_linear_432_20)"
          />
          <path
            d="M1054.78 124.074C1060.87 116.168 1072.44 111.302 1084.62 111.302C1110.81 111.302 1115.68 127.724 1115.68 140.496C1115.68 161.783 1105.93 204.966 1105.93 239.634C1105.93 259.097 1108.98 274.302 1119.33 274.302C1157.08 274.302 1154.65 147.186 1153.43 124.074C1159.52 116.168 1171.09 111.302 1183.27 111.302C1209.45 111.302 1214.32 127.724 1214.32 140.496C1214.32 161.783 1204.58 204.966 1204.58 239.634C1204.58 259.097 1207.63 274.302 1217.98 274.302C1234.42 274.302 1238.68 256.664 1242.94 245.108C1243.55 242.675 1245.99 242.067 1247.81 242.067C1250.86 242.067 1252.69 244.5 1252.69 246.324C1249.03 283.425 1227.72 335.731 1189.36 335.731C1157.69 335.731 1144.91 313.227 1142.47 284.642C1133.34 312.011 1116.29 335.731 1090.71 335.731C1063.31 335.731 1047.48 318.701 1044.43 287.683C1038.95 235.377 1058.44 186.72 1054.78 124.074Z"
            fill="url(#paint5_linear_432_20)"
          />
          <path
            d="M968.632 19.4627C972.894 14.597 978.374 10.9477 985.073 9.73131C1001.51 5.47386 1019.78 13.9888 1024.04 35.8843C1027.7 58.9962 1025.26 84.541 1006.39 89.4067C991.771 93.0559 975.33 86.9738 971.067 69.3358C970.458 65.0783 975.33 37.1007 968.632 19.4627ZM852.935 356.41C855.371 354.586 857.807 355.802 859.025 358.235C863.896 368.575 873.639 380.739 899.214 380.739C952.799 380.739 952.799 319.31 958.28 190.978C958.889 170.907 958.889 152.052 961.324 140.496C963.151 127.724 971.067 111.302 997.251 111.302C1009.43 111.302 1020.39 116.168 1025.26 124.075C1017.95 155.093 1015.52 191.586 1015.52 223.821C1015.52 276.127 1026.48 326 1023.44 372.832C1017.95 445.817 964.369 489 913.828 489C854.762 489 825.533 461.022 825.533 416.623C825.533 384.388 835.276 367.966 852.935 356.41Z"
            fill="url(#paint6_linear_432_20)"
          />
          <path
            d="M752.343 124.074C758.432 116.168 770.002 111.302 782.18 111.302C808.364 111.302 813.235 127.724 813.235 140.496C813.235 161.783 803.493 204.966 803.493 239.634C803.493 259.097 806.537 274.302 816.889 274.302C854.643 274.302 852.207 147.186 850.989 124.074C857.078 116.168 868.648 111.302 880.826 111.302C907.01 111.302 911.882 127.724 911.882 140.496C911.882 161.783 902.139 204.966 902.139 239.634C902.139 259.097 905.184 274.302 915.535 274.302C931.976 274.302 936.239 256.664 940.501 245.108C941.11 242.675 943.546 242.067 945.373 242.067C948.417 242.067 950.244 244.5 950.244 246.324C946.591 283.425 925.278 335.731 886.916 335.731C855.251 335.731 842.464 313.227 840.028 284.642C830.894 312.011 813.844 335.731 788.269 335.731C760.868 335.731 745.035 318.701 741.991 287.683C736.51 235.377 755.996 186.72 752.343 124.074Z"
            fill="url(#paint7_linear_432_20)"
          />
          <path
            d="M540.664 285.25C545.536 283.426 549.189 285.858 549.189 291.332C549.189 315.052 555.887 336.948 591.205 336.948C635.048 336.948 659.405 264.571 666.712 192.802C671.584 142.929 672.193 93.0561 675.237 67.5113C660.014 93.0561 630.786 133.198 584.507 133.198C555.279 133.198 535.184 113.127 535.184 80.8919C535.184 77.2426 535.793 73.5934 537.62 69.9441C542.491 70.5523 546.754 70.5523 551.016 70.5523C593.641 72.9852 619.216 54.7389 646.618 23.1121C669.148 22.5039 704.466 24.3285 714.818 46.224C716.644 49.8732 718.471 111.911 719.08 170.299C720.907 284.642 712.991 405.067 589.378 405.067C535.793 405.067 509 367.358 509 333.299C509 312.011 519.961 291.94 540.664 285.25Z"
            fill="url(#paint8_linear_432_20)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M200 433C310.457 433 400 343.457 400 233C400 122.543 310.457 33 200 33C89.5431 33 0 122.543 0 233C0 343.457 89.5431 433 200 433ZM114.667 312.263C98.9644 336.306 91.4958 352.206 86.4616 373.969C45.3192 340.791 19 289.969 19 233C19 133.036 100.036 52 200 52C299.964 52 381 133.036 381 233C381 289.677 354.95 340.269 314.17 373.457C310.643 351.912 302.254 336.166 282.889 312.485L298 270.93C320.444 208.93 325.111 149.596 325.111 149.596C325.111 149.596 314.444 142.485 301.778 148.263C287.778 154.707 267.111 175.374 251.111 199.374C236.222 221.818 210.223 273.596 203.556 292.707C178.667 246.93 125.556 192.485 92 185.818C75.3335 182.485 68 195.818 68 195.818C78.8892 219.374 114.667 311.152 114.667 312.263ZM243.776 370.485C233.776 365.152 230.665 349.596 238.221 341.374C247.11 331.596 259.11 339.596 259.11 355.152C259.11 365.152 250.221 374.041 243.776 370.485ZM150.309 341.539C142.753 349.761 145.864 365.317 155.864 370.65C162.309 374.205 171.198 365.317 171.198 355.317C171.198 339.761 159.198 331.761 150.309 341.539ZM195.11 402.485C190.443 399.374 189.11 391.374 192.443 386.93C198.665 379.596 213.332 385.596 211.999 394.93C211.11 401.596 200.887 406.041 195.11 402.485Z"
            fill="#F6ADBA"
          />
          <defs>
            <linearGradient
              id="paint0_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_432_20"
              x1="457.522"
              y1="244.5"
              x2="2183.38"
              y2="244.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9C58D" />
              <stop offset="1" stop-color="#F492F0" />
              <stop offset="1" stop-color="#F492F0" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
};