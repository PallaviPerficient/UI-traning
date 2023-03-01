import React from 'react'
import './Education.css'

const Eduction = (props) => {
  return (
    <>
       <div className={props.educationvalue ? ' ' : 'display-none'}>
       <table>
            <tr>
                <th>Year</th>
                <th>Degree/Certificate</th>
                <th>University/Board</th>
                <th>School/College</th>
                <th>Percentage</th>
                <th>Remark</th>

            </tr>
            <tr>
                <td>2020-21</td>
                <td>BE Year IV</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>72.08%</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2019-20</td>
                <td>BE Year III</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>71.06%</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2020-21</td>
                <td>BE Year IV</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>72.08%</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2018-19</td>
                <td>BE Year II</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>63.38%</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2017-18</td>
                <td>BE Year I</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>69.09%</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2017</td>
                <td>H.S.C</td>
                <td>***STATE</td>
                <td>Bhalerao High School Saoner</td>
                <td>69.09%</td>
                <td>Pass</td>
            </tr>
            <tr>
                <td>2015</td>
                <td>S.S.C</td>
                <td>***STATE</td>
                <td>Bhalerao High School Saoner</td>
                <td>83.60%</td>
                <td>Pass</td>
            </tr>
        </table>
        <div className='starmark'>
            <span>
            *Rashtrasant Tukdoji Maharaj Nagpur University.
            <br />
            ** Shantilal Badjate Jain Institute of Management and Research Nagpur.
            <br />
            ***Maharashtra State Board of Secondary and Higher Secondary Education, Pune.
            <br />
            </span>
        </div>
       </div>
    </>
  )
}

export default Eduction