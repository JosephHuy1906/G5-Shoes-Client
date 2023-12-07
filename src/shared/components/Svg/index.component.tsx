interface IIconPropsComponent {
    width?: string;
    height?: string;
    className?: string;
    fill?: string;
}

export const FacebookIcon = ({ width = '100%', height = '100%', className, fill = 'none' }: IIconPropsComponent) => (
    <svg
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="#1877F2"
            d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
        />
        <path
            fill="#ffffff"
            d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
        />
    </svg>
);

export const GoogleIcon = ({ width = '100%', height = '100%', className, fill = 'none' }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <defs>
            <path
                id="a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
        </defs>
        <clipPath id="b">
            <use href="#a" overflow="visible" />
        </clipPath>
        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
        <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
        <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
    </svg>
);

export const UploadIcon = ({ width = '100%', height = '100%', className }: IIconPropsComponent) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.5 17L12.5 4M12.5 4L18 8.78947M12.5 4L7 8.78947"
            stroke="#909090"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M6 21H19" stroke="#909090" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const HeartIcon3 = ({ className }: IIconPropsComponent) => (
    <svg className={className} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,10 20,20"></polygon>
        <polygon points="10,50 20,50"></polygon>
        <polygon points="20,80 30,70"></polygon>
        <polygon points="90,10 80,20"></polygon>
        <polygon points="90,50 80,50"></polygon>
        <polygon points="80,80 70,70"></polygon>
    </svg>
);
export const HeartIcon2 = ({ className }: IIconPropsComponent) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
    </svg>
);

export const SearchIcon = ({ className, width, height }: IIconPropsComponent) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width} height={height}>
        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
    </svg>
);
export const CartIcon = ({ className }: IIconPropsComponent) => (
    <svg viewBox="0 0 26.6 25.6" className={className}>
        <polyline
            fill="none"
            points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2.5"
        ></polyline>
        <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
        <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
    </svg>
);

export const LogoutIcon = ({ className, width, height }: IIconPropsComponent) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {' '}
            <path
                opacity="0.6"
                d="M15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2Z"
                fill="#5ec9dd"
            />{' '}
            <path
                opacity="0.4"
                d="M8 8C8 6.46249 8 5.34287 8.14114 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H8.14114C8 18.6571 8 17.5375 8 16V12.75V11.25V8Z"
                fill="#5ec9dd"
            />{' '}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.46967 11.4697C4.17678 11.7626 4.17678 12.2374 4.46967 12.5303L6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303C7.82322 14.2374 7.82322 13.7626 7.53033 13.4697L6.81066 12.75L14 12.75C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25L6.81066 11.25L7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967L4.46967 11.4697Z"
                fill="#5ec9dd"
            />{' '}
        </g>
    </svg>
);

export const PayIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {' '}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V8.5C22 8.77614 21.7761 9 21.5 9L2.5 9C2.22386 9 2 8.77614 2 8.5V8ZM2.5 11C2.22386 11 2 11.2239 2 11.5V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V11.5C22 11.2239 21.7761 11 21.5 11L2.5 11ZM13 15C13 14.4477 13.4477 14 14 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H14C13.4477 16 13 15.5523 13 15Z"
                fill={fill ?? '#5ec9dd'}
            />{' '}
        </g>
    </svg>
);

export const ListBillIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {' '}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.24502 2H16.755C17.9139 2 18.4933 2 18.9606 2.16261C19.8468 2.47096 20.5425 3.18719 20.842 4.09946C21 4.58055 21 5.17705 21 6.37006V20.3742C21 21.2324 20.015 21.6878 19.3919 21.1176C19.0258 20.7826 18.4742 20.7826 18.1081 21.1176L17.625 21.5597C16.9834 22.1468 16.0166 22.1468 15.375 21.5597C14.7334 20.9726 13.7666 20.9726 13.125 21.5597C12.4834 22.1468 11.5166 22.1468 10.875 21.5597C10.2334 20.9726 9.26659 20.9726 8.625 21.5597C7.98341 22.1468 7.01659 22.1468 6.375 21.5597L5.8919 21.1176C5.52583 20.7826 4.97417 20.7826 4.6081 21.1176C3.985 21.6878 3 21.2324 3 20.3742V6.37006C3 5.17705 3 4.58055 3.15795 4.09946C3.45748 3.18719 4.15322 2.47096 5.03939 2.16261C5.50671 2 6.08614 2 7.24502 2ZM7 6.75C6.58579 6.75 6.25 7.08579 6.25 7.5C6.25 7.91421 6.58579 8.25 7 8.25H7.5C7.91421 8.25 8.25 7.91421 8.25 7.5C8.25 7.08579 7.91421 6.75 7.5 6.75H7ZM10.5 6.75C10.0858 6.75 9.75 7.08579 9.75 7.5C9.75 7.91421 10.0858 8.25 10.5 8.25H17C17.4142 8.25 17.75 7.91421 17.75 7.5C17.75 7.08579 17.4142 6.75 17 6.75H10.5ZM7 10.25C6.58579 10.25 6.25 10.5858 6.25 11C6.25 11.4142 6.58579 11.75 7 11.75H7.5C7.91421 11.75 8.25 11.4142 8.25 11C8.25 10.5858 7.91421 10.25 7.5 10.25H7ZM10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11C9.75 11.4142 10.0858 11.75 10.5 11.75H17C17.4142 11.75 17.75 11.4142 17.75 11C17.75 10.5858 17.4142 10.25 17 10.25H10.5ZM7 13.75C6.58579 13.75 6.25 14.0858 6.25 14.5C6.25 14.9142 6.58579 15.25 7 15.25H7.5C7.91421 15.25 8.25 14.9142 8.25 14.5C8.25 14.0858 7.91421 13.75 7.5 13.75H7ZM10.5 13.75C10.0858 13.75 9.75 14.0858 9.75 14.5C9.75 14.9142 10.0858 15.25 10.5 15.25H17C17.4142 15.25 17.75 14.9142 17.75 14.5C17.75 14.0858 17.4142 13.75 17 13.75H10.5Z"
                fill={fill ?? '#5ec9dd'}
            />{' '}
        </g>
    </svg>
);

export const BellRingIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
    >
        <g id="Communication / Bell_Ring">
            <path
                id="Vector"
                d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7047 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29477 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9M18.0186 2.01367C19.3978 3.05299 20.4843 4.43177 21.1724 6.01574M5.98197 2.01367C4.60275 3.05299 3.5162 4.43177 2.82812 6.01574"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);
export const UserIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24.00 24.00"
        fill="none"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.048"
        />

        <g id="SVGRepo_iconCarrier">
            {' '}
            <circle cx="12" cy="6" r="4" stroke={fill ?? '#1C274C'} strokeWidth="2.4" />{' '}
            <path
                d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                stroke={fill ?? '#1C274C'}
                strokeWidth="2.4"
                strokeLinecap="round"
            />{' '}
        </g>
    </svg>
);

export const MenuIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke={fill ?? '#000000'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const HomeIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        className={className}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {' '}
            <path
                d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9264 5.32698 19.3619C5 18.7202 5 17.8801 5 16.2V9.7774M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z"
                stroke={fill ?? '#5ec9dd'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />{' '}
        </g>
    </svg>
);

export const CartMenuIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {' '}
            <path
                d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 6H11M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke={fill ?? '#5ec9dd'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />{' '}
        </g>
    </svg>
);

export const ProductIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        className={className}
        height={height}
        viewBox="0 0 24 24"
        version="1.1"
        fill="#000000"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

        <g id="SVGRepo_iconCarrier">
            {' '}
            <title />{' '}
            <g fill="none" fill-rule="evenodd" id="页面-1" stroke="none" strokeWidth="1">
                {' '}
                <g id="导航图标" transform="translate(-325.000000, -80.000000)">
                    {' '}
                    <g id="编组" transform="translate(325.000000, 80.000000)">
                        {' '}
                        <polygon
                            fill="#FFFFFF"
                            fillOpacity="0.01"
                            fillRule="nonzero"
                            id="路径"
                            points="24 0 0 0 0 24 24 24"
                        />{' '}
                        <polygon
                            id="路径"
                            points="22 7 12 2 2 7 2 17 12 22 22 17"
                            stroke={fill ?? '#5ec9dd'}
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        />{' '}
                        <line
                            id="路径"
                            stroke={fill ?? '#5ec9dd'}
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="1.5"
                            x1="2"
                            x2="12"
                            y1="7"
                            y2="12"
                        />{' '}
                        <line
                            id="路径"
                            stroke={fill ?? '#5ec9dd'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            x1="12"
                            x2="12"
                            y1="22"
                            y2="12"
                        />{' '}
                        <line
                            id="路径"
                            stroke={fill ?? '#5ec9dd'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            x1="22"
                            x2="12"
                            y1="7"
                            y2="12"
                        />{' '}
                        <line
                            id="路径"
                            stroke={fill ?? '#5ec9dd'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            x1="17"
                            x2="7"
                            y1="4.5"
                            y2="9.5"
                        />{' '}
                    </g>{' '}
                </g>{' '}
            </g>{' '}
        </g>
    </svg>
);

export const ProfileIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        className={className}
        height={height}
        viewBox="0 0 20 20"
        version="1.1"
        fill="#000000"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

        <g id="SVGRepo_iconCarrier">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                {' '}
                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -2119.000000)" fill="#5ec9dd">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                            d="M302,1972.618 C301,1971.194 299.559,1970.115 297.86,1969.477 C299.226,1968.377 300.153,1966.792 300.153,1964.902 C300.153,1963.363 299.619,1962 298.667,1961 L302,1961 L302,1972.618 Z M286.42,1977 C287.246,1973 290.419,1971 294.204,1971 C297.989,1971 301.161,1973 301.987,1977 L286.42,1977 Z M286,1972.618 L286,1961 L289.741,1961 C288.788,1962 288.204,1963.363 288.204,1964.902 C288.204,1966.792 288.978,1968.426 290.344,1969.526 C288.645,1970.164 287,1971.194 286,1972.618 L286,1972.618 Z M294.204,1960.804 C296.409,1960.804 298.204,1962.598 298.204,1964.804 C298.204,1967.009 296.409,1968.804 294.204,1968.804 C291.998,1968.804 290.204,1967.009 290.204,1964.804 C290.204,1962.598 291.998,1960.804 294.204,1960.804 L294.204,1960.804 Z M284,1979 L304,1979 L304,1959 L284,1959 L284,1979 Z"
                            id="profile_image_zoom-[#1347]"
                        >
                            {' '}
                        </path>{' '}
                    </g>{' '}
                </g>{' '}
            </g>{' '}
        </g>
    </svg>
);

export const ErrorIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        className={className}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

        <g id="SVGRepo_iconCarrier">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"
                fill="#5ec9dd"
            />
        </g>
    </svg>
);

export const CloseIcon = ({ className, width, height, fill }: IIconPropsComponent) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5ec9dd"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {' '}
            <path
                opacity="0.5"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="#5ec9dd"
            />{' '}
            <path
                d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                fill="#5ec9dd"
            />{' '}
        </g>
    </svg>
);
