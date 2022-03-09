import React from 'react'
import './style.css'
import Header from '../../layout/Header'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Blacklisted Domains', 'Whitelisted Domains'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 90],
      backgroundColor: [
        '#076d2b',
        '#1EAA49',
      ],
      borderColor: [
        '#076d2b',
        '#1EAA49'
      ],
      borderWidth: 1,
    },
  ],
};

function Home() {
  return (
    <div>
        {/* header start */}
        <Header/>
        {/* header end */}
        {/* stats start */}
        <main>
          <section className='section-one'>
            <div className='row-type-one'>
              <div>
                <h2>900</h2>
                <h3>WHITELISTED DOMAINS</h3>
              </div>
              <div>
                <h2>10</h2>
                <h3>BLACKLISTED DOMAINS</h3>
              </div>
              <div>
                <h4>Continuity overview</h4>
                <h3 className='status'>
                  status{'  '}
                  <i className='fas fa-circle-info'></i>
                </h3>
               <div className='active'>
                  <h3>Active</h3>
                  <h3><i class="fas fa-circle-check"></i></h3>
               </div>
               <p className='base-text'>Last activated 23-Dec-2016</p>
              </div>
            </div>
            <div className='row-type-one'>
              <div>
                <h2>720</h2>
                <h3>VERIFIED DOMAINS</h3>
              </div>
              <div>
                <h2>2</h2>
                <h3>ADMIN</h3>
              </div>
              <div>
                <h4>Contact Sync</h4>
                <h3 className='status'>
                  status{'  '}
                  <i className='fas fa-circle-info'></i>
                </h3>
               <div className='active'>
                  <h3>Complete</h3>
                  <h3><i class="fas fa-circle-check"></i></h3>
               </div>
               <p className='base-text'>Last activated 04-Feb-2022</p>
              </div>
            </div>
            <div className='row-type-two'>
              <section>
                <div>
                  <h4>Directory Sync</h4>
                  <h3 className='status'>
                    status{'  '}
                    <i className='fas fa-circle-info'></i>
                  </h3>
                  <div className='active'>
                      <h3>Active</h3>
                      <h3><i class="fas fa-circle-check"></i></h3>
                  </div>
                </div>
                <div>
                  <div className='flex-title'>
                    <h4>Licensing</h4>
                    <button>RENEW</button>
                  </div>
                  <h3 className='status'>
                    subscription{'  '}
                    <i className='fas fa-circle-info'></i>
                  </h3>
                <div className='active'>
                    <h3>Valid</h3>
                    <h3><i class="fas fa-circle-check"></i></h3>
                </div>
                <p className='base-text'>Expires on: 15-Jan 2018</p>
                </div>
              </section>
              <section>
              <div>
                <h4>Continuity overview</h4>
                <h3 className='status d-color'>
                status
                </h3>
                  <h3>UPDATED</h3>
                 <p className='base-text'>Last activated 23-Dec-2016</p>
              </div>
              </section>
            </div>
          </section>
          <section className='section-two'>
            <div style={{
              width: "25em",
              height: "25em"
            }}>
              <Pie data={data} style={{width:300, height:300}}/>
            </div>
          </section>
        </main>
        {/* stats end */}
    </div>
  )
}

export default Home