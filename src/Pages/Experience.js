import { VerticalTimeline, VerticalTimelineElement } from  'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css' ;
import WorkIcon from '@material-ui/icons/Work';


import React from 'react'

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor={'#3e497a'}>
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1997-1998'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}
        >

        <h3>Student Industrial Work Experience(SIWES)</h3>
        <h4>Nigerian National Petroleum Refinery(NNPC)</h4>
        <p>Kaduna Petroleum Refinery and Petrochemical , NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'2000-2001'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}>

        <h3>National Youth Sercvice (NYSC)</h3>
        <h4>Field Engineering Trainee Intern</h4>
        <p>Dowell, Schlumberger Oil services Ltd, Port Harcourt, NIGERIA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'2003-2008'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}
        >

        <h3>Bank Operations Executive</h3>
        <h4>Branch Operations</h4>
        <p>Functioned as a paying teller, receipts teller, merchant teller, funds transfer officer, customer service office, settlement clearing officer, cash officer, treasury officer, reconciliation officer etc</p>
        <h5>Major Milestone Accomplishments</h5>
        <p><ul>
          <li>Reconciled some general ledgers accounts that exposed some fraud and recovery of hundreds of millions. I was only summoned to resolve the issue after the primary officers were unable to balance these accounts after a considerable time period.</li>
          <li>Reconciled a vault imbalance in foreign currency which had been been left outstanding and unsolved for almost five years. I was able to study and resolved the imbalance just two weeks of my redeployment to the branch which led to my immediate promotion to become a branch operations manager of the bank.</li>
        </ul></p>
        <p>Intercontinental Bank Plc, NIGERIA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'2008-2012'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}>

        <h3>Bank Operations Executive</h3>
        <h4>Branch Operations Manager</h4>
        <p>In charge of the general administration and operations of the bank activities, cash management, reconciliations, accounts management, treasury, clearing, funds transfer, remittances, authorizations of transactions, supervision, mentoring, tasks organisations and management, process monitoing and control, internal audit & control, budgets and planning vault management, ATM Cash management, training of subordinate staff etc</p>
        <p>Intercontinental Bank Plc, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'2012-2012'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}>
        <h3>Bank Operations Executive</h3>
        <h4>Branch Operations Manager</h4>
        <p>Same functions as above but most of us as former staff of the previous Intercontinental bank were disengaged after soon after the completion of the acquision process by Access Bank</p>
        <p>Access Bank Plc, NIGERIA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'2016-2018'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}>
        <h3>Operations Manager</h3>
        <p>Administrative services and business operations</p>
        <p>Jethrone Hospital & Diagnostic Center, Abuja, NIGERIA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'2018-2019'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}>
        <h3>Uber Taxi Driving Business Management</h3>
        <p>Executive Transort Services</p>
        <p>UBER, Abuja, NIGERIA</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'2019-2021'}
        iconStyle={{background : '#3e497a' , color: '#FFFF00'}} 
        icon={<WorkIcon />}>
        <h3>Business Operations Consultant</h3>
        <p>operations management</p>
        <p>ELOFUSIM ENERGY Abuja, NIGERIA</p>
        </VerticalTimelineElement>


        </VerticalTimeline>




    </div>
  )
}

export default Experience