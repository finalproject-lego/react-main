import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeCSS from "./EmpCSS.module.css";

function EmployeeInfo() {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onEnterKeyHandler = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key', search);

            navigate(`/search?value=${ search }`, { replace: false });

            window.location.reload();
        } 
    }

    return (
        <>
            <div className={EmployeeCSS.Position}>
                <div className="EmployeeInfo">
                    <input
                        className={ EmployeeCSS.InputStyle }
                        type="text"
                        placeholder=""
                        value = { search }
                        onKeyUp={ onEnterKeyHandler }
                        onChange={ onSearchChangeHandler }
                    />
                
                    <table>
                        <tr>
                            <th>성명</th>
                            <th>사번</th>
                            <th>부서</th>
                            <th>직급</th>
                            <th>내선번호</th>
                            <th>생년월일</th>
                            <th>연락처</th>
                        </tr>
                        <tr>
                            <td>눈망울</td>
                            <td>110011</td>
                            <td>인사팀</td>
                            <td>팀장</td>
                            <td>707</td>
                            <td>19911122</td>
                            <td>010-1234-1234</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>110022</td>
                            <td>인사팀</td>
                            <td>사원</td>
                            <td>999</td>
                            <td>19941122</td>
                            <td>010-5678-8890</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default EmployeeInfo;