import { NavLink } from 'react-router-dom';
import NavCSS from "./Navbar.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {

    return (

        <div className={NavCSS['sidebar']}>
            <ul className={[NavCSS['list-group'], NavCSS['flex-column'], NavCSS['d-inline-block'], NavCSS['first-menu']].join(" ")}>

                <li className={[NavCSS['list-group-item'], NavCSS['pl-3'], NavCSS['py-2']].join(" ")}>
                    <NavLink to="/board">
                        <i className={['bi', 'bi-bookmark-check'].join(" ")} aria-hidden="true">
                            <span className={[NavCSS['ml-2'], NavCSS['align-middle']].join(" ")}>게시판</span>
                        </i>
                    </NavLink>
                    <ul className={[NavCSS['list-group'], NavCSS['flex-column'], NavCSS['d-inline-block'], NavCSS['submenu']].join(" ")}>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/noticelist">공지사항</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/board/survey">신제품 설문</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/board/sue">신고 게시판</NavLink>
                        </li>
                    </ul>
                </li>

                <li className={[NavCSS['list-group-item'], NavCSS['pl-3'], NavCSS['py-2']].join(" ")}>
                    <NavLink to="/mgmt">
                        <i className={['bi', 'bi-database-exclamation'].join(" ")} aria-hidden="true">
                            <span className={[NavCSS['ml-2'], NavCSS['align-middle']].join(" ")}>관리</span>
                        </i>
                    </NavLink>
                    <ul className={[NavCSS['list-group'], NavCSS['flex-column'], NavCSS['d-inline-block'], NavCSS['submenu']].join(" ")}>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/mgmt/stock">재고</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/mgmt/input">입고</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/mgmt/output">출고</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/mgmt/sale">매출</NavLink>
                        </li>
                    </ul>
                </li>

                <li className={[NavCSS['list-group-item'], NavCSS['pl-3'], NavCSS['py-2']].join(" ")}>
                    <NavLink to="/schedule">
                        <i className={['bi', 'bi-calendar-check nav_icon'].join(" ")} aria-hidden="true">
                            <span className={[NavCSS['ml-2'], NavCSS['align-middle']].join(" ")}>스케줄</span>
                        </i>
                    </NavLink>
                    <ul className={[NavCSS['list-group'], NavCSS['flex-column'], NavCSS['d-inline-block'], NavCSS['submenu']].join(" ")}>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/schedule">스케줄</NavLink>
                        </li>
                    </ul>
                </li>

                <li className={[NavCSS['list-group-item'], NavCSS['pl-3'], NavCSS['py-2']].join(" ")}>
                    <NavLink to="/orgchart">
                        <i className={['bi', 'bi-command'].join(" ")} aria-hidden="true">
                            <span className={[NavCSS['ml-2'], NavCSS['align-middle']].join(" ")}>조직도</span>
                        </i>
                    </NavLink>
                    <ul className={[NavCSS['list-group'], NavCSS['flex-column'], NavCSS['d-inline-block'], NavCSS['submenu']].join(" ")}>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/orgchart">조직도</NavLink>
                        </li>
                    </ul>
                </li>

                <li className={[NavCSS['list-group-item'], NavCSS['pl-3'], NavCSS['py-2']].join(" ")}>
                    <NavLink to="/mypage">
                        <i className={['bi', 'bi-person-plus'].join(" ")} aria-hidden="true">
                            <span className={[NavCSS['ml-2'], NavCSS['align-middle']].join(" ")}>마이페이지</span>
                        </i>
                    </NavLink>
                    <ul className={[NavCSS['list-group'], NavCSS['flex-column'], NavCSS['d-inline-block'], NavCSS['submenu']].join(" ")}>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/mypage/myinfo">개인정보</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/mypage/work">근태관리</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/mypage/sue">신고</NavLink>
                        </li>
                    </ul>
                </li>

                <li className={[NavCSS['list-group-item'], NavCSS['pl-3'], NavCSS['py-2']].join(" ")}>
                    <NavLink to="/hr">
                        <i className={['bi', 'bi-people'].join(" ")} aria-hidden="true">
                            <span className={[NavCSS['ml-2'], NavCSS['align-middle']].join(" ")}>인사</span>
                        </i>
                    </NavLink>
                    <ul className={[NavCSS['list-group'], NavCSS['flex-column'], NavCSS['d-inline-block'], NavCSS['submenu']].join(" ")}>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/hr/empinfo">직원 정보 관리</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/hr/empregist">직원 등록</NavLink>
                        </li>
                        <li className={[NavCSS['list-group-item'], NavCSS['pl-4']].join(" ")}>
                            <NavLink to="/hr/empregist">직원 퇴사</NavLink>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>

    )
}

export default Navbar;